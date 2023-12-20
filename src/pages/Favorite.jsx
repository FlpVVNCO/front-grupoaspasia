import PopoverDetails from "../components/PopoverDetails";
import Table from "../components/Table";
import { useBooks } from "../hooks/useBooks";

const Favorite = () => {
  const { favorite } = useBooks();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white mb-5">Favorites ⭐</h1>
      <Table data={favorite} />
      <PopoverDetails />
    </div>
  );
};

export default Favorite;
