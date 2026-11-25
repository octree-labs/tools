import { MetadataRoute } from 'next'

/**
 * Crawlers for AI assistants (ChatGPT search, Claude, Perplexity, Gemini,
 * Apple Intelligence, Copilot via Bing) that we want to read and cite the
 * tools. A crawler follows only the most specific group that names it, so each
 * named group repeats the disallows of the * group.
 */
const AI_AND_SEARCH_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      ...AI_AND_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/api/',
      })),
    ],
    sitemap: 'https://tools.useoctree.com/sitemap.xml',
  }
}
