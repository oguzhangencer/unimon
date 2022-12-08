import { Button, ScrollArea } from "@mantine/core";
import {
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useReducer, useState } from "react";
import { useQuery } from "react-query";
import { Filter, fuzzyFilter } from "../components/TableFilter";
import { IUsers } from "../types/interfaces";
import { getUsers } from "../utils/users";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";

export const UsersTable = () => {
  const { isLoading, isError, data, error } = useQuery("users", getUsers);

  const rerender = useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columnHelper = createColumnHelper<IUsers>();

  const columns = [
    columnHelper.accessor("firstName", {
      header: () => "First Name",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Last Name",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("teamName", {
      header: () => "Team Name",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("package", {
      header: () => "Package",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("createDate", {
      header: () => "Created Date",
      cell: (info) => info.renderValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const pageSizes = table.getState().pagination.pageSize;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col">
      <div className="flex justify-center overflow-x-auto rounded-xl">
        <ScrollArea offsetScrollbars>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <>
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none flex items-center justify-center gap-x-2"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: <BsSortAlphaUpAlt size={20} />,
                                desc: <BsSortAlphaDown size={20} />,
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                            {header.column.getCanFilter() ? (
                              <div>
                                <Filter column={header.column} table={table} />
                              </div>
                            ) : null}
                          </>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ScrollArea>
      </div>

      <div className="flex justify-center flex-row items-center p-2 gap-x-2">
        {/* <Select
          className="w-20"
          defaultValue={table.getState().pagination.pageSize}
          value={table.getState().pagination.pageSize}
          data={["5", "10", "20", "50", "100"]}
          onChange={(e) => table.setPageSize(Number(e))}></Select> */}
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>

        <Button
          radius="md"
          variant="outline"
          className="border-2"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}>
          {"<<"}
        </Button>
        <Button
          radius="md"
          variant="outline"
          className="border-2"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          {"<"}
        </Button>
        <Button
          radius="md"
          variant="outline"
          className="border-2"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          {">"}
        </Button>
        <Button
          radius="md"
          variant="outline"
          className="border-2"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}>
          {">>"}
        </Button>
      </div>
    </div>
  );
};
