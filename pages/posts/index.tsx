import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
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

    const matterResult = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    });
    const slug = filename.replace(".md", "");
    const frontmatter = matterResult.data as {
      author: string;
      date: string;
      title: string;
      tags: string[];
      slug: string;
    };

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { posts: posts.sort(sortByDate) },
  };
}
