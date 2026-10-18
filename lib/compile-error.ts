/**
 * `/api/compile` answers failures with `{ error, log }`. Pages used to keep
 * only the message; the log is what the "fix with AI" CTA hands to Octree.
 */
export class CompileError extends Error {
  readonly log: string;

  constructor(message: string, log = '') {
    super(message);
    this.name = 'CompileError';
    this.log = log;
  }
}

/** Build a CompileError from a failed `/api/compile` response. */
export async function readCompileError(response: Response, fallbackMessage: string): Promise<CompileError> {
  let message = fallbackMessage;
  let log = '';
  try {
    const data = await response.json();
    if (typeof data?.error === 'string' && data.error.trim()) message = data.error;
    if (typeof data?.log === 'string') log = data.log;
  } catch {
    // Non-JSON body; keep the fallback message.
  }
  return new CompileError(message, log);
}

/** The log attached to a thrown value, or '' when it was not a CompileError. */
export function compileLogOf(err: unknown): string {
  return err instanceof CompileError ? err.log : '';
}
