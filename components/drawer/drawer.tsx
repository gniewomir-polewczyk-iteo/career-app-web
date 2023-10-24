import { Box, Stack, Typography } from "@mui/material";
import { NavLogo } from "./components/nav-logo";
import DrawerItem from "./components/drawer-item";
import DrawerSection from "./components/drawer-section";
import PostType from "../../interfaces/post";

interface Props {
  posts: PostType[];
}

const generateCategoriesList = (posts: PostType[]) => {
  const categories = posts.map((post) => post.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
};

const Drawer = ({ posts }: Props) => {
  const categoriesList = generateCategoriesList(posts);

  return (
    <Box
      sx={{
        width: "280px",
        transition: "transform 300ms",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          top: 0,
          backgroundColor: "#232328",
          boxShadow: 0,
          zIndex: 155,
          borderRadius: 0,
          overflowY: "auto",
          overflowX: "hidden",
          transition: "all 0.3s ease",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        }}
      >
        <Stack
          height="64px"
          alignItems="center"
          direction="row"
          justifyContent="center"
          px={2}
          spacing={1}
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <NavLogo />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "primary.contrastText",
              pt: 0.3,
              textTransform: "uppercase",
              mr: "inherit",
            }}
          >
            iteo
          </Typography>
        </Stack>
        <Stack
          width="100%"
          justifyContent="center"
          flexDirection="column"
          spacing="4px"
          sx={{
            pb: 1,
          }}
        >
          {categoriesList?.map((category) => (
            <DrawerSection title={category} key={category}>
              {posts
                .filter((post) => post.category === category)
                .map((post) => (
                  <DrawerItem
                    key={post.title}
                    label={post.title}
                    path={post.slug}
                  />
                ))}
            </DrawerSection>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Drawer;
