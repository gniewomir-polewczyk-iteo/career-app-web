import PostType from "../interfaces/post";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
  posts: PostType[];
  preview?: boolean;
};

const Layout = ({ children, posts, preview }: Props) => {
  return (
    <div className="">
      <Meta />
      <Header />
      <div className="">
        <Menu posts={posts} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
