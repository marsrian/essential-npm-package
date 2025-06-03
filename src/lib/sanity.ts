import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

export const client = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source);
}