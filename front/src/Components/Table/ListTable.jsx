import { useTable } from "react-table";
import Pagination from "./Pagination";
import Skeleton from "Components/Loader/Skeleton";

// eslint-disable-next-line react/prop-types
const ListTable = ({
  columns,
  data,
  isLoading,
  pageFilter,
  setPageFilter,
  last_page,
}) => {

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });
  return (
    <div>
      <table
        {...getTableProps()}
        className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 dark:border-white/40"
        style={{
          height: "70vh",
          width:"100%",
        }}
      >
        {isLoading ? (
          <thead className="align-bottom">
            <tr className="border-b-[1px] border-slate-DEFAULT-300 ">
              <th className="px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 dark:border-white/40 dark:text-white dark:opacity-80">
                <Skeleton
                  counter={1}
                  className="row gx-lg-5 align-items-center align-items-lg-start"
                />
              </th>
            </tr>
          </thead>
        ) : (
          <>
            <thead className="align-bottom">
              {headerGroups.map((headerGroup, i) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={i}
                  className="border-b-[1px] border-slate-DEFAULT-300 "
                >
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-black opacity-70 dark:border-white/40 dark:text-white dark:opacity-80"
                      key={index}
                    >
                      {column.render("header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              
              className="border-t-2 border-current border-solid dark:border-white/40"
            >
              {data?.length > 0 ? (
                rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40 hover:bg-gray-200 ${
                        row?.original?.level > 400
                          ? "bg-red-200 text-white hover:text-black"
                          : ""
                      } `}
                      key={i}
                    >
                      {row.cells.map((cell, index) => (
                        <td
                          {...cell.getCellProps()}
                          className="p-2 text-center font-normal leading-normal text-sm"
                          key={index}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr className="flex justify-center relative left-[25rem]">
                  <td className="flex h-16 justify-center py-4 px-6text-center whitespace-nowrap">
                    No Data Available...
                  </td>
                </tr>
              )}
            </tbody>
          </>
        )}
      </table>
      <Pagination
        pageFilter={pageFilter}
        setPageFilter={setPageFilter}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ListTable;
