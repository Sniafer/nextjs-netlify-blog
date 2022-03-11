export type Post = {
  author: string;
  date: string;
  title: string;
  slug: string;
  tags?: string[];
};

export type PostContent = {
  slug: string;
  frontmatter: Post;
};
