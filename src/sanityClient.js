import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "tydb6akb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-26",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export function fileUrl(fileAsset) {
  if (!fileAsset?.asset?._ref) return "";
  const ref = fileAsset.asset._ref;
  const [, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/tydb6akb/production/${id}.${extension}`;
}
