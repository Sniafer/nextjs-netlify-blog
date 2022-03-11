import { PostContent } from "../lib/types";
import PostItem from "./PostItem";

type Props = {
  posts: PostContent[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((p: PostContent) => (
        <PostItem key={p.slug} post={p} />
      ))}
    </div>
  );
};

export default PostsList;
