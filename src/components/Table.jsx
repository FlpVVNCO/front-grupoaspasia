import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useBooks } from "../hooks/useBooks";
import Filter from "./Filter";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Book Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("authors", {
    header: () => "Authors",
  }),
  columnHelper.accessor("publisher", {
    header: "Publisher",
  }),
  columnHelper.accessor("country", {
    header: "Country",
  }),
];

const Table = ({ data }) => {
  const { setIsOpen, setDetails, handleBookClick, columnFilters } = useBooks();

  const table = useReactTable({
    data: data,
    columns,
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDetails = (row) => {
    setDetails(row);
    setIsOpen(true);
    handleBookClick(row);
  };

  return (
    <>
      <Filter />
      <div className="p-2 w-full flex overflow-x-auto sm:px-20">
        <table className="border min-w-full ">
          <thead className="bg-secondary text-white text-left">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="p-5 " key={header.id}>
                    <div className="flex gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                      {header.column.getCanSort() && (
                        <p
                          className="cursor-pointer hover:scale-110 transition-all"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          ⇅
                        </p>
                      )}

                      {header.column.getIsSorted()}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="cursor-pointer hover:bg-red-500/20 transition-all  "
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="p-5 text-left  border-b text-secondary"
                    key={cell.id}
                    onClick={() => handleDetails(cell.row.original)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
        <div className="h-4" />
      </div>
    </>
  );
};

export default Table;
