import Head from "next/head";
import Layout from "../components/layout";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout posts={allPosts}>
      <Head>
        <title>Iteo career app</title>
      </Head>
    </Layout>
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
    "id",
    "parentIds",
  ]);

  return {
    props: { allPosts },
  };
};
