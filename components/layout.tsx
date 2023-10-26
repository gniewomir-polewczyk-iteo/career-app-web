import { Grid, Stack } from "@mui/material";
import { FlowRoadmap } from "./modules/flow-roadmap/flow-roadmap";
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
      <Grid container>
        <Grid item xs={2}>
          <Drawer posts={posts} />
        </Grid>
        <Grid item xs={7}>
          <FlowRoadmap posts={posts} />
        </Grid>
        <Grid item xs={3}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Layout;
