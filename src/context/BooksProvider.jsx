import { createContext, useEffect, useState } from "react";

// Crea el contexto con un valor inicial
export const BookContext = createContext();

// Proveedor del contexto que envuelve tu aplicación
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [details, setDetails] = useState(null);
  const [detailsPovCharacters, setDetailsPovCharacters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [columnFilters, setColumnFilters] = useState([]);
  const [favorite, setFavorite] = useState(
    localStorage.getItem("favorite")
      ? JSON.parse(localStorage.getItem("favorite"))
      : []
  );

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://anapioficeandfire.com/api/books?page=1&pageSize=15"
      );
      const data = await response.json();
      setBooks(data); // Actualiza el estado con los libros obtenidos de la API
    } catch (error) {
      console.error("Error al obtener libros:", error);
    }
  };

  const handleBookClick = async (book) => {
    try {
      const povCharactersData = await Promise.all(
        book.povCharacters.map(async (characterURL) => {
          try {
            const characterResponse = await fetch(characterURL);
            const characterData = await characterResponse.json();
            console.log("desde characterData", characterData.name);

            return characterData;
          } catch (error) {
            console.error(`Error al obtener datos del personaje: ${error}`);
          }
        })
      );

      setDetails(book);
      setDetailsPovCharacters(povCharactersData);
    } catch (error) {
      console.error("Error al obtener detalles de povCharacters:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // FAVORITO EN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite) ?? []);
  }, [favorite]);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        isOpen,
        setIsOpen,
        details,
        setDetails,
        handleBookClick,
        detailsPovCharacters,
        columnFilters,
        setColumnFilters,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
