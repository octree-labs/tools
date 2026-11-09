import * as React from 'react';

// tsconfig keeps JSX as "preserve" for Next.js, so tsx compiles .tsx modules
// with the classic runtime; module-level JSX needs React in scope. Import this
// before any such module.
Object.assign(globalThis, { React });
