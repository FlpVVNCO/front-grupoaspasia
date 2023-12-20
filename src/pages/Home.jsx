import PopoverDetails from "../components/PopoverDetails";
import Table from "../components/Table";
import { useBooks } from "../hooks/useBooks";

const Home = () => {
  const { books } = useBooks();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white mb-5">Books</h1>
      <Table data={books} />
      <PopoverDetails />
    </div>
  );
};

export default Home;
