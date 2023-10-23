type Props = {
  title: string;
};

const PostHeader = ({ title }: Props) => {
  return (
    <div className="">
      <h1>{title}</h1>
    </div>
  );
};

export default PostHeader;
