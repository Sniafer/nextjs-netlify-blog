// @ts-ignore: Unreachable code error
export const sortByDate = (a, b) => {
  return (
    new Date(b.frontmatter.date).valueOf() -
    new Date(a.frontmatter.date).valueOf()
  );
};
