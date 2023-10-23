import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Container from "../../components/container";
import Layout from "../../components/layout";
import markdownToHtml from "../../lib/markdownToHtml";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import type PostType from "../../interfaces/post";

type Props = {
  allPosts: PostType[];
  post: PostType;
  preview?: boolean;
};

export default function Post({ allPosts, post, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} posts={allPosts}>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article className="">
              <Head>
                <title>{post.title}</title>
              </Head>
              <PostHeader title={post.title} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
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

  const post = getPostBySlug(params.slug, [
    "author",
    "category",
    "content",
    "coverImage",
    "date",
    "excerpt",
    "slug",
    "title",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
