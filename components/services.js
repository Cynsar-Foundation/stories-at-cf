import { sanityClient } from "../lib/sanity.server";

export async function fetchSteps(postSlug) {
    const query = `
      *[_type == "post" && slug.current == $slug][0] {
        steps
      }
    `;
    const params = { slug: postSlug };
    const result = await sanityClient.fetch(query, params);
    return result ? result.steps : [];
  }