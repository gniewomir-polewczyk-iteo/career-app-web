import PostType from "../interfaces/post";
import MenuItem from "./menu-item";

interface Props {
  posts: PostType[];
}

const generateCategoriesList = (posts: PostType[]) => {
  const categories = posts.map((post) => post.category);
  const uniqeCategories = [...new Set(categories)];

  return uniqeCategories;
};

const Menu = ({ posts }: Props) => {
  const categoriesList = generateCategoriesList(posts);

  return (
    <div className="">
      {categoriesList.map((category) => (
        <div key={category}>
          <h3>{category}:</h3>
          {posts
            .filter((post) => post.category === category)
            .map((post) => (
              <MenuItem key={post.slug} post={post} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
