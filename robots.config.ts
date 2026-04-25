import { siteUrl } from "./site.config";

export default {
	host: siteUrl,
	sitemap: [`${siteUrl}/sitemap.xml`],
	policy: [
		// BLOCK: AI/LLM Training Crawlers
		{
			userAgent: [
				// OpenAI
				"GPTBot",
				"OAI-SearchBot",
				"ChatGPT-User",
				// Anthropic
				"ClaudeBot",
				"Claude-Web",
				// Google AI
				"GoogleOther",
				// Meta
				"facebookexternalhit",
				"Facebot",
				// Other AI Companies
				"AppleBot",
				"Googlebot-Extended",
				"CCBot",
				"PerplexityBot",
				"DuckAssistant",
				"YouBot",
				"Omgili",
				"BingBot",
				"Slurp",
				"ia_archiver",
				"Exabot",
				// Generative AI & ML
				"anthropic-ai",
				"cohere-ai",
				"diffbot",
				"Scrapy",
				"curl",
				"wget",
			],
			disallow: ["/"],
		},
		// ALLOW: Major Search Engines
		{
			userAgent: [
				"Googlebot",
				"Googlebot-Image",
				"Googlebot-Mobile",
				"Googlebot-News",
				"Googlebot-Video",
				"Bingbot",
				"Slurp",
				"Yandexbot",
				"YandexImages",
				"YandexVideo",
				"YandexMobileBot",
				"DuckDuckBot",
				"Baiduspider",
				"Sogou",
				"Exabot",
				"ia_archiver",
				"Teoma",
			],
			allow: ["/"],
		},
		// BLOCK: Everything Else
		{
			userAgent: ["*"],
			disallow: ["/"],
		},
	],
};