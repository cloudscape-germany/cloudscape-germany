import { siteUrl } from "./site.config";

const host = new URL(siteUrl).hostname;

export default {
	host: host,
	sitemap: [`${siteUrl}/sitemap.xml`],
	policy: [
		// BLOCK: AI/LLM Training Crawlers
		{ userAgent: "GPTBot", disallow: ["/"] },
		{ userAgent: "OAI-SearchBot", disallow: ["/"] },
		{ userAgent: "ChatGPT-User", disallow: ["/"] },
		{ userAgent: "ClaudeBot", disallow: ["/"] },
		{ userAgent: "Claude-Web", disallow: ["/"] },
		{ userAgent: "GoogleOther", disallow: ["/"] },
		{ userAgent: "facebookexternalhit", disallow: ["/"] },
		{ userAgent: "Facebot", disallow: ["/"] },
		{ userAgent: "AppleBot", disallow: ["/"] },
		{ userAgent: "CCBot", disallow: ["/"] },
		{ userAgent: "PerplexityBot", disallow: ["/"] },
		{ userAgent: "DuckAssistant", disallow: ["/"] },
		{ userAgent: "YouBot", disallow: ["/"] },
		{ userAgent: "Omgili", disallow: ["/"] },
		{ userAgent: "anthropic-ai", disallow: ["/"] },
		{ userAgent: "cohere-ai", disallow: ["/"] },
		{ userAgent: "diffbot", disallow: ["/"] },
		{ userAgent: "Scrapy", disallow: ["/"] },
		// ALLOW: Major Search Engines
		{ userAgent: "Googlebot", allow: ["/"] },
		{ userAgent: "Googlebot-Image", allow: ["/"] },
		{ userAgent: "Googlebot-Mobile", allow: ["/"] },
		{ userAgent: "Googlebot-News", allow: ["/"] },
		{ userAgent: "Googlebot-Video", allow: ["/"] },
		{ userAgent: "Bingbot", allow: ["/"] },
		{ userAgent: "DuckDuckBot", allow: ["/"] },
		{ userAgent: "Baiduspider", allow: ["/"] },
		{ userAgent: "Yandexbot", allow: ["/"] },
		// BLOCK: Everything Else
		{ userAgent: "*", disallow: ["/"] },
	],
};