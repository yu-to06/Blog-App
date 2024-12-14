import {allPosts} from "@/.contentlayer/generated";
import Mdx from "@/components/mdx-components";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: {
  params: {slug: string};
}): Promise<Metadata> {
  const page = await getPostFromSlug(params.slug);

  if (!page) {
    return {};
  }
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function PostPage({params}: {params: {slug: string}}) {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className='container mx-auto max-w-3xl py-6 lg:py-10'>
      <div>
        {post.date && (
          <time>Published on {format(post.date, "yyyy/MM/dd")}</time>
        )}
        <h1 className='mt-2 font-extrabold text-4xl leading-tight lg:text-6xl'>
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={766}
          height={405}
          className='my-8 border rounded-md bg-muted'
        />
      )}
      <Mdx code={post.body.code} />
      <hr className='mt-12' />
      <div className='py-6 text-center lg:py-10'>
        <Link
          href={"/blog"}
          className={cn(buttonVariants({variant: "secondary"}))}
        >
          全ての記事を見る
        </Link>
      </div>
    </article>
  );
}
