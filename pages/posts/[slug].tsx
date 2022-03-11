import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { Post } from "../../lib/types";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

type Props = {
  frontmatter: Post;
  content: any;
  slug: String;
};

const PostPage = ({
  frontmatter: { author, title, tags, date },
  content,
  slug,
}: Props) => {
  console.log();
  return (
    <div>
      <Link href={"/posts"}>Go back</Link>
      <p>Posted by {author}</p>
      <p>{date}</p>
      <h2>{title}</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

type Params = {
  params: {
    slug: String;
  };
};

export async function getStaticProps({ params: { slug } }: Params) {
  const fileContents = fs.readFileSync(
    path.join("content/posts", slug + ".md"),
    "utf-8"
  );

  const matterResult = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const frontmatter = matterResult.data as {
    author: string;
    date: string;
    title: string;
    tags: string[];
    slug: string;
  };

  const { content } = matter(fileContents);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
