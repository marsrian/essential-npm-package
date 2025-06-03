import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0]{
        "currentSlug": slug.current,
        title,
        body,
        image
    }`;

  const data = await client.fetch(query, { slug });
  return data;
}

export async function generateStaticParams() {
  const query = `*[_type == "blog"]{"slug": slug.current}`;
  const slugs = await client.fetch(query);
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

const BlogArticle = async ({ params }: { params: Promise<{ slug: string }> }) => {
 const { slug } = await params; // Destructure to avoid direct params.slug access
  if (!slug) {
    throw new Error("Slug is missing");
  }

  console.log("Slug:", slug); // Debug log
  const data: fullBlog = await getData(slug);
  console.log("Data:", data); // Debug log

  if (!data) {
    throw new Error("Blog post not found");
  }
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
        {data.title}
      </h1>
      <Image
        src={urlFor(data.image).url()}
        width={800}
        height={500}
        alt="Title Image"
        className="rounded-lg h-[500px] mt-8 border mx-auto"
      />
      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-headings:underline prose-a:text-red-400">
        <PortableText value={data.body} />
      </div>
    </div>
  );
};

export default BlogArticle;
