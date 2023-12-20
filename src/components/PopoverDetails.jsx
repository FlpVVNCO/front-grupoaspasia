import { Dialog } from "@headlessui/react";
import { useBooks } from "../hooks/useBooks";
import { formattedDate } from "../utils/FormatDate";

const PopoverDetails = () => {
  const {
    isOpen,
    setIsOpen,
    details,
    detailsPovCharacters,
    setFavorite,
    favorite,
  } = useBooks();

  if (!details || !detailsPovCharacters) {
    return;
  }

  const { name, authors, publisher, numberOfPages, released } = details;

  const formattedReleased = formattedDate(released);
  const isAlreadyFavorite = favorite.some((fav) => fav.name === details.name);

  const handleFavorite = () => {
    if (!isAlreadyFavorite) {
      // Agregar el nuevo elemento a la lista de favoritos
      setFavorite((prevFavorites) => [...prevFavorites, details]);
    } else {
      // Si ya es un favorito, y se ejecuta la función lo quita
      setFavorite((prevFavorites) =>
        prevFavorites.filter((fav) => fav.name !== details.name)
      );
    }
  };

  console.log("desde favorite", favorite);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className=" fixed inset-0 flex justify-center py-5 items-start w-full bg-black bg-opacity-50 overflow-y-auto"
    >
      <Dialog.Panel className="bg-white p-10 rounded-xl w-full sm:w-3/4 xl:w-3/6  flex flex-col justify-center gap-16 overflow-y-auto relative">
        <Dialog.Title className="text-4xl font-bold text-center py-10 mt-5 shadow-md bg-secondary text-white rounded-xl">
          {name}
        </Dialog.Title>
        {isAlreadyFavorite ? (
          <button
            className="cursor-pointer  py-5 px-2  font-bold rounded-lg border bg-red-500 text-white hover:scale-105 hover:bg-red-500/80 transition-all sm:w-1/4"
            onClick={() => handleFavorite()}
          >
            Remove from favorites ❌
          </button>
        ) : (
          <button
            className="cursor-pointer  py-5 px-2 text-white font-bold rounded-lg bg-secondary hover:bg-secondary/80 hover:scale-105 transition-all sm:w-1/4"
            onClick={() => handleFavorite()}
          >
            Add to favorites ⭐
          </button>
        )}

        <div className="flex flex-col text-center">
          <h3 className="font-bold text-xl text-secondary border-b-2 text-center mb-5">
            Authors
          </h3>
          {authors.map((author) => (
            <p className="" key={author}>
              {author}
            </p>
          ))}
        </div>

        <div id="sinapsis" className="text-center">
          <h3 className="text-xl text-secondary font-bold border-b-2 mb-5">
            Sinapsis
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            ex ad eos quis tenetur! Dolorum itaque hic doloribus officiis fuga
            illo distinctio quidem? Vel quod, omnis hic necessitatibus eligendi
            officiis?
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div id="publisher" className="text-center">
            <h3 className="text-xl text-secondary font-bold border-b-2 mb-5">
              Publisher
            </h3>
            <p>{publisher}</p>
          </div>

          <div id="released" className="text-center">
            <h3 className="text-xl text-secondary font-bold border-b-2 mb-5">
              Released
            </h3>
            <p> {formattedReleased}</p>
          </div>

          <div id="pages" className="text-center">
            <h3 className="text-xl text-secondary font-bold border-b-2 mb-5">
              Pages
            </h3>
            <p> {numberOfPages}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-secondary text-center border-b-2">
          Pov Characters
        </h3>
        {detailsPovCharacters.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-5 place-items-center ">
              {detailsPovCharacters.map((character) => (
                <div
                  key={character.id}
                  className="p-5 border w-full h-full rounded-lg shadow-md cursor-pointer hover:bg-secondary hover:text-white hover:scale-105 transition-all"
                >
                  <h4
                    className="text-center font-bold mb-5"
                    key={character.name}
                  >
                    {character.name}
                  </h4>
                  <p className="font-semibold">Characteristics: </p>
                  <div>
                    <p>
                      Gender:
                      <span> {character.gender}</span>
                    </p>
                    <p>
                      Culture:{" "}
                      {character.culture ? character.culture : "Undefined"}
                    </p>
                    <p>Born: {character.born}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1>Not found</h1>
        )}

        <button
          className="absolute top-3 right-5 hover:scale-110 text-4xl text-secondary transition-all "
          onClick={() => setIsOpen(false)}
        >
          🗙
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default PopoverDetails;
