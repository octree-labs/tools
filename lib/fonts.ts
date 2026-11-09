import localFont from 'next/font/local';

// Self-hosted so builds never fetch from Google Fonts (next/font/google
// failures were breaking Vercel builds). Both files are the official Google
// Fonts variable woff2, latin subset, OFL-licensed (see public/fonts/OFL-*.txt).

// DM Sans variable: wght 100-1000 (+ opsz 9-40, applied automatically).
export const dmSans = localFont({
  src: '../app/fonts/DMSans-Variable-latin.woff2',
  weight: '100 1000',
  style: 'normal',
  display: 'swap',
});

// Space Grotesk variable: wght 300-700.
export const spaceGrotesk = localFont({
  src: '../app/fonts/SpaceGrotesk-Variable-latin.woff2',
  weight: '300 700',
  style: 'normal',
  display: 'swap',
});
