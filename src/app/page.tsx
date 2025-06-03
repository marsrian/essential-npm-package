import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == "blog"]| order(_createdAt desc){
  title,
  "currentSlug": slug.current,
  image,
  body
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: BlogPost[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-5 max-w-7xl mx-auto">
      {data.map((post) => (
        <Card key={post.currentSlug} className="py-0">
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            width={500}
            height={500}
            className="rounded-lg h-[200px] object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-lg line-clamp-2">{post.title}</h2>
            {/* <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{smallDescription}</p> */}
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`} className="text-blue-500">
              Read more
            </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
