import { Pagination, ScrollArea } from "@mantine/core";
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
import moment from "moment";

export const UsersTable = () => {
  const { isLoading, isError, data, error } = useQuery("users", getUsers);

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
      cell: (info) => moment(info.renderValue()).format("lll"),
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

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col mx-auto p-2">
      <div className="flex justify-center overflow-x-auto rounded-xl">
        <ScrollArea offsetScrollbars>
          {/* Customers Table */}
          <table className="w-full items-center justify-center text-sm text-black-500 rounded-lg ">
            {/* Table Head */}
            <thead className="text-lg  rounded-xl text-white  bg-gray-100 dark:bg-slate-800 items-center justify-center">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className="font-body py-2 px-4  items-center text-md tracking-wide justify-center">
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
                              <div className="flex items-center justify-center">
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
            {/* Table Body */}
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr
                    key={row.id}
                    className="bg-white border-b hover:bg-gray-100 ">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="font-body py-3 px-2 text-lg items-center justify-start">
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
      {/* Pagination and PageSize */}
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

        <Pagination
          page={table.getState().pagination.pageIndex}
          onChange={table.setPageIndex}
          total={table.getPageCount()}
          withEdges
        />
      </div>
    </div>
  );
};
