import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Menu from "../components/menu";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Iteo career app</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <Menu posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "author",
    "category",
    "content",
    "coverImage",
    "date",
    "excerpt",
    "slug",
    "title",
  ]);

  return {
    props: { allPosts },
  };
};
