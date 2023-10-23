import Link from "next/link";
import PostType from "../interfaces/post";

interface Props {
  post: PostType;
}

const MenuItem = ({ post }: Props) => {
  return (
    <div>
      <Link
        as={`/posts/${post.slug}`}
        href="/posts/[slug]"
        className="hover:underline"
      >
        {post.title}
      </Link>
    </div>
  );
};

export default MenuItem;
