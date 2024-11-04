import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site";

const IndexPage = () => {
  return (
    <>
      <section className='pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32'>
        <div className='container text-center flex flex-col items-center gap-4 max-w-[64rem]'>
          <Link
            href={"siteConfig.links.x"}
            className='bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm'
          >
            Xをフォローする
          </Link>
          <h1 className='font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Post Writer
          </h1>
          <p className='text-muted-foreground leading-normal  sm:text-xl max-w-[42rem]'>
            このアプリケーションはNext.js13を使用して作成されたものです。ユーザーは投稿をポストすることができ、マークダウン形式でブログを投稿することもできます。
          </p>
          <div className='space-x-4'>
            <Link href={"/login"} className={cn(buttonVariants({size: "lg"}))}>
              Let's Start!
            </Link>
            <Link
              href={"siteConfig.links.Github"}
              className={cn(buttonVariants({size: "lg", variant: "outline"}))}
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
