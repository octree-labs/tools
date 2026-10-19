import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dropNoiseExceptions, exceptionMessages, isNoiseException } from '../lib/exception-filter';

const exception = (value: string, type = 'Error') => ({
  uuid: 'u',
  event: '$exception' as const,
  properties: { $exception_list: [{ type, value, mechanism: { handled: false } }] },
});

test('drops the Edge/Outlook SafeLinks "Object Not Found Matching Id" rejection', () => {
  const event = exception(
    'Non-Error promise rejection captured with value: Object Not Found Matching Id:3, MethodName:update, ParamCount:4',
    'UnhandledRejection',
  );
  assert.equal(dropNoiseExceptions(event), null);
  assert.equal(
    isNoiseException({ $exception_message: 'Object Not Found Matching Id:12, MethodName:remove, ParamCount:2' }),
    true,
  );
});

test('drops the benign ResizeObserver warnings', () => {
  assert.equal(dropNoiseExceptions(exception('ResizeObserver loop limit exceeded')), null);
  assert.equal(
    dropNoiseExceptions(exception('ResizeObserver loop completed with undelivered notifications.')),
    null,
  );
});

test('drops non-Error rejections that carry no message', () => {
  for (const value of [
    'Non-Error promise rejection captured with value: [object Object]',
    'Non-Error promise rejection captured with value: undefined',
    'Non-Error promise rejection captured with value: null',
    'Non-Error promise rejection captured with value: ',
    'Object captured as exception with keys: code, status',
    "'CustomEvent' captured as exception with keys: detail",
  ]) {
    assert.equal(dropNoiseExceptions(exception(value, 'UnhandledRejection')), null, value);
  }
});

test('keeps real errors, including rejections with a message', () => {
  for (const value of [
    "Cannot read properties of undefined (reading 'latex')",
    'Non-Error promise rejection captured with value: Compile failed: missing \\begin{document}',
    'Object Not Found Matching Id:3, MethodName:fetch, ParamCount:4',
    'Failed to fetch',
  ]) {
    const event = exception(value, 'UnhandledRejection');
    assert.equal(dropNoiseExceptions(event), event, value);
  }
});

test('keeps an exception event with no recognisable message', () => {
  const event = { uuid: 'u', event: '$exception' as const, properties: {} };
  assert.equal(dropNoiseExceptions(event), event);
  assert.equal(isNoiseException(undefined), false);
});

test('drops only when every listed exception is noise', () => {
  const event = {
    uuid: 'u',
    event: '$exception' as const,
    properties: {
      $exception_list: [
        { type: 'Error', value: 'ResizeObserver loop limit exceeded' },
        { type: 'TypeError', value: 'x is not a function' },
      ],
    },
  };
  assert.equal(dropNoiseExceptions(event), event);
  assert.deepEqual(exceptionMessages(event.properties), [
    'ResizeObserver loop limit exceeded',
    'x is not a function',
  ]);
});

test('never touches non-exception events or null', () => {
  const click = { uuid: 'u', event: 'open_in_octree_clicked', properties: { source: 'tools:templates' } };
  assert.equal(dropNoiseExceptions(click), click);
  assert.equal(dropNoiseExceptions(null), null);
});
