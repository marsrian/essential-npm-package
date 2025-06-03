import { FullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string): Promise<FullBlog> {
  const query = `
    *[_type == "blog" && slug.current == $slug]{
        "currentSlug": slug.current,
        title,
        body,
        image
    }[0]`;

  const data = await client.fetch(query, { slug });
  return data;
}

interface PageProps {
  params: {
    slug: string;
  };
}

const BlogArticle = async ({ params }: PageProps) => {
  const data: FullBlog = await getData(params.slug);
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
