import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-10 flex px-5 sm:px-0 items-center justify-between sm:justify-around font-bold text-white bg-secondary mb-10 w-full">
      <div className="flex">
        <Link to="/" className="hover:scale-110 transition-all">
          Home
        </Link>
      </div>
      <div className="flex gap-5 ">
        <Link to="/form" className="hover:scale-110 transition-all">
          Form
        </Link>
        <Link to="/favorite" className="hover:scale-110 transition-all">
          Favorites ⭐
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
