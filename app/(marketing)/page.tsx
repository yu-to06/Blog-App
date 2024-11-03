import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <section>
        <div className='pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32'>
          <Link href={"/"}>Xをフォローする</Link>
          <h1>Post Writer</h1>
          <p>
            このアプリケーションはNext.js13を使用して作成されたものです。ユーザーは投稿をポストすることができ、マークダウン形式でブログを投稿することもできます。
          </p>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
