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

      <section
        id='features'
        className='container py-8 space-y-6 bg-slate-50 md:py-12 lg:py-24'
      >
        <div className='text-center space-y-6 max-w-[58rem] mx-auto'>
          <h2 className='font-extrabold text-3xl md:text-6xl'>
            サービスの特徴
          </h2>
          <p className='text-muted-foreground sm:text-lg sm:leading-7'>
            このアプリはNext.js ver 13
            とコンテンツレイヤーを学習するために作成したものです。
          </p>
        </div>

        {/* スタックのカード */}
        <div className='grid gap-4 mx-auto max-w-[64rem] sm:grid-cols-2 md:grid-cols-3'>
          <div className='bg-background p-2 rounded-lg'>
            <div className='flex flex-col justify-center p-6 h-[180px] '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='45'
                height='45'
                viewBox='0 0 128 128'
              >
                <path d='M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z' />
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Next.js</h3>
                <p className='text-sm text-muted-foreground'>
                  AppRouter/Layouts/APIRoutesの技術を使用しています。
                </p>
              </div>
            </div>
          </div>

          {/* カード２ */}
          <div className='bg-background p-2 rounded-lg'>
            <div className='flex flex-col justify-center p-6 h-[180px]'>
              <svg viewBox='0 0 128 128' width='45' height='45'>
                <g fill='#61DAFB'>
                  <circle cx='64' cy='64' r='11.4'></circle>
                  <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'></path>
                </g>
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold'>React</h3>
                <p className='text-sm text-muted-foreground'>
                  react19を使用しています。
                </p>
              </div>
            </div>
          </div>

          {/* カード3 */}
          <div className='bg-background p-2 rounded-lg'>
            <div className='flex flex-col justify-center p-6 h-[180px]'>
              <svg viewBox='0 0 128 128' width='45' height='45'>
                <g fill='#181616'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z'
                  ></path>
                  <path d='M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0'></path>
                </g>
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold'>Git Hub</h3>
                <p className='text-sm text-muted-foreground'>
                  学習の記録、およびソース保存に採用しました。
                </p>
              </div>
            </div>
          </div>

          {/* カード4 */}
          <div className='bg-background p-2 rounded-lg'>
            <div className='flex flex-col justify-center p-6 h-[180px] '>
              <svg viewBox='0 0 128 128' width='45' height='50'>
                <path
                  d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0'
                  fill='#38bdf8'
                ></path>
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold'>Tailwindcss</h3>
                <p className='text-sm text-muted-foreground'>
                  スタイリングの効率化のために採用しました。また、Next.jsと相性が良いことも採用理由です。
                </p>
              </div>
            </div>
          </div>

          {/* カード5 */}
          <div className='bg-background p-2 rounded-lg'>
            <div className='flex flex-col justify-center p-6 h-[180px] '>
              <svg viewBox='0 0 128 128' width='45' height='45'>
                <defs>
                  <linearGradient
                    id='a'
                    x1='53.974'
                    x2='94.163'
                    y1='54.974'
                    y2='71.829'
                    gradientTransform='translate(29.387 60.096) scale(1.1436)'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop offset='0' stopColor='#249361'></stop>
                    <stop offset='1' stopColor='#3ecf8e'></stop>
                  </linearGradient>
                  <linearGradient
                    id='b'
                    x1='36.156'
                    x2='54.484'
                    y1='30.578'
                    y2='65.081'
                    gradientTransform='translate(29.387 60.096) scale(1.1436)'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop offset='0'></stop>
                    <stop offset='1' stopOpacity='0'></stop>
                  </linearGradient>
                </defs>
                <path
                  fill='url(#a)'
                  d='M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z'
                  transform='translate(-27.722 -60.338)'
                ></path>
                <path
                  fill='url(#b)'
                  fillOpacity='.2'
                  d='M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z'
                  transform='translate(-27.722 -60.338)'
                ></path>
                <path
                  fill='#3ecf8e'
                  d='M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z'
                ></path>
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold'>supabase</h3>
                <p className='text-sm text-muted-foreground'>
                  学習のために無料で高性能なデータベースとして採用しました。
                </p>
              </div>
            </div>
          </div>

          {/* カード6 */}
          <div className='bg-background p-2 rounded-lg'>
            <div className='flex flex-col justify-center p-6 h-[180px] '>
              <svg viewBox='0 0 128 128' width='45' height='45'>
                <path
                  fill='#2d3748'
                  d='M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z'
                ></path>
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold'>Prisma</h3>
                <p className='text-sm text-muted-foreground'>
                  javascriptでデータベース管理ができると技術と知り学習のために採用しました。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto md:max-w-[58rem] text-center'>
          <p className='text-muted-foreground sm:text-lg sm:leading-7'>
            Post Writerはログインするとブログ投稿ができます。
          </p>
        </div>
      </section>

      <section id='contact' className='container py-8 md:py-12 lg:py-24'>
        <div className='max-w-[58rem] text-center mx-auto flex flex-col gap-4'>
          <h2 className='font-extrabold text-3xl md:text-6xl'>Contact Me</h2>
          <p className='text-muted-foreground sm:text-lg sm:leading-7'>
            下記DMでご連絡ください
          </p>
          <Link
            href={"/"}
            className='underline underline-offset-4 '
            target='_blank'
            rel='noreferrer'
          >
            Formへ ※準備中
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
