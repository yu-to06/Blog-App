import {allPosts} from "@/.contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts;
  console.log(posts);

  return (
    <div>
      <div>Blog Page!</div>
    </div>
  );
}
