import { getAllPosts } from "../lib/api";
import { PostType } from "../types";
import Head from "next/head";
import Layout from "../components/layout";

type Props = {
  allPosts: PostType[];
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
