import { Combobox } from "@headlessui/react";
import { useBooks } from "../hooks/useBooks";

const Filter = () => {
  const { columnFilters, setColumnFilters } = useBooks();

  const bookName = columnFilters.find((f) => f.id === "name")?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );

  return (
    <Combobox>
      <Combobox.Input
        className=" w-full sm:w-2/5 border h-[40px] rounded-full transition-all p-5 focus:outline-none  text-lg mb-5"
        value={bookName}
        placeholder="Search a book"
        onChange={(e) => onFilterChange("name", e.target.value)}
      />
    </Combobox>
  );
};

export default Filter;
