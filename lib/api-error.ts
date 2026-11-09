/**
 * Error contract for the AI tool routes: a failed generation answers with a
 * non-2xx status and `{ error, code }` JSON, never with sample output.
 */

export interface ApiErrorBody {
  error: string;
  code: string;
}

/** Server side: JSON error response for an AI route. */
export function aiErrorResponse(status: number, error: string, code = 'ai_error'): Response {
  return Response.json({ error, code } satisfies ApiErrorBody, { status });
}

export const AI_UNAVAILABLE = 'The AI service could not complete this request. Please try again.';

/** Client side: an error whose message came from the API and is fit to show. */
export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/** Client side: turn a non-2xx response into an ApiError (falls back to `fallback` for non-JSON bodies). */
export async function readApiError(response: Response, fallback: string): Promise<ApiError> {
  const body = (await response.json().catch(() => null)) as Partial<ApiErrorBody> | null;
  const message = typeof body?.error === 'string' && body.error ? body.error : fallback;
  return new ApiError(message, response.status, typeof body?.code === 'string' ? body.code : undefined);
}
