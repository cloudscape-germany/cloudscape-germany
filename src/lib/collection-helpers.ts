import { getCollection } from "astro:content";
import { type Locale, defaultLocale } from "site.config";

export async function getCollectionStaticPaths(
	collectionName: string,
	locale?: Locale,
) {
	const collection = await getCollection(collectionName as any);

	const visibleItems = collection.filter((item) => {
		return !item.data.hidden;
	});

	const paths = visibleItems.map((item) => {
		const [lang, ...slug] = item.id.split("/");
		let localizedSlug = slug;

		if (collectionName === "pages") {
			if (slug[0] === "homepage" || slug[0] === "index") return null;
			localizedSlug = slug;
		}

		if (lang !== defaultLocale && !locale) {
			localizedSlug = [lang, ...localizedSlug];
		}

		return {
			params: {
				lang,
				slug: localizedSlug.join("/") || undefined,
			},
			props: {
				data: item,
			},
		};
	}).filter(Boolean);

	let pathsRes = paths;
	if (locale) {
		pathsRes = paths.filter((path) => path.params.lang === locale);
	}

	return pathsRes;
}