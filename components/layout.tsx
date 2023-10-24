import { Stack } from "@mui/system";
import Drawer from "./drawer/drawer";
import Meta from "./meta";
import PostType from "../interfaces/post";

type Props = {
  children: React.ReactNode;
  posts: PostType[];
  preview?: boolean;
};

const Layout = ({ children, posts }: Props) => {
  return (
    <Stack direction={"row"} minHeight={"100vh"} position={"relative"}>
      <Meta />
      <Drawer posts={posts} />
      <Stack
        direction="column"
        sx={{
          p: 4,
          height: "100vh",
          width: `calc(100% - 280px)`,
          transform: `translateX(280px)`,
          transition: "all 300ms",
        }}
      >
        <main>{children}</main>
      </Stack>
    </Stack>
  );
};

export default Layout;
