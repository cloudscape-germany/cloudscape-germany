import { getCollectionStaticPaths } from "@/lib/collection-helpers.ts";
import generateOgImage from "@/lib/og-image-generator.tsx";
import type { APIRoute } from "astro";
import { siteTitle } from "site";

export const prerender = true;

export const GET: APIRoute<CollectionProps<"pages">> = async ({ props: { data: page } }) => {
	const response = await generateOgImage(page?.data.title, siteTitle, page?.data.lastUpdateDate);
	return new Response(response, {
		status: 200,
		headers: {
			"Content-Type": "image/png",
		},
	});
};

export async function getStaticPaths() {
	return await getCollectionStaticPaths("pages");
}
