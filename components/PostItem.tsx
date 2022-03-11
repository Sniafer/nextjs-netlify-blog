import Link from "next/link";
import { PostContent } from "../lib/types";

type Props = {
  post: PostContent;
};

const PostItem = ({ post }: Props) => {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <p>{post.frontmatter.date}</p>
        <h2>{post.frontmatter.title}</h2>
      </a>
    </Link>
  );
};
export default PostItem;
