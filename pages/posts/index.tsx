import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostsList from "../../components/PostsList";
import { PostContent } from "../../lib/types";
import { sortByDate } from "../../utils";

type Props = {
  posts: PostContent[];
};

const PostsPage = ({ posts }: Props) => {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
};
export default PostsPage;

const postsDirectory = path.join("content/posts");

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(postsDirectory));
  const posts = files.map((filename) => {
    const fileContents = fs.readFileSync(
      path.join("content/posts", filename),
      "utf-8"
    );
    const slug = filename.replace(".md", "");
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { posts: posts.sort(sortByDate) },
  };
}
