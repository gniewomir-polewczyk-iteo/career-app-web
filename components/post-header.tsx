type Props = {
  title: string;
};

const PostHeader = ({ title }: Props) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default PostHeader;
