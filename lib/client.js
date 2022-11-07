import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "rhcci1ye",
  dataset: "production",
  apiVersion: "2022-11-06",
  useCdn: true,
  token: process.env.NEXT_PULIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
