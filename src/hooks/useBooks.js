import { useContext } from "react";
import { BookContext } from "../context/BooksProvider";

export const useBooks = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error(
      "useBooks debe ser utilizado dentro de un proveedor MyContext"
    );
  }

  return context;
};
