import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="A blog page"></meta>
        <meta name="keywords" content=""></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog</title>
      </Head>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
