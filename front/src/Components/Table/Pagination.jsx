import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import { useEffect } from "react";
export function debounce(func, delay) {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

export default function Pagination({ pageFilter, setPageFilter, isLoading }) {
  const handleInput = (e) => {
    setPageFilter({
      ...pageFilter,
      page: Number(e?.target?.value),
    });
  };
  return (
    <div className="mt-4 h-16  bg-gray-100 p-4 flex gap-4 items-center justify-between">
      {/* First Page */}
      <button
        title="First Page"
        className={`w-8  bg-gray-400 p-1 rounded transition-all duration-600 ${
          pageFilter?.page === 1 ? "opacity-25" : ""
        }`}
        onClick={() => {
          setPageFilter({ ...pageFilter, page: 1 });
        }}
        disabled={pageFilter.page === 1}
      >
        <ChevronDoubleLeftIcon />
      </button>
      {/* Previous Page */}
      <button
        title="Previous Page"
        className={`w-8 bg-gray-400 p-1 rounded transition-all duration-600 ${
          pageFilter?.page === 1 || isLoading ? "opacity-25" : ""
        }`}
        onClick={() => {
          setPageFilter({ ...pageFilter, page: pageFilter?.page - 1 });
        }}
        disabled={isLoading || pageFilter?.page === 1}
      >
        <ChevronLeftIcon />
      </button>
      <span>
        Page{" "}
        <input
          className=" px-1 py-[5px] w-16"
          type="number"
          min={1}
          max={pageFilter?.lastPage ? pageFilter?.lastPage : 1}
          value={pageFilter.page}
          disabled={isLoading}
          onChange={(e) => {
            debounce(handleInput(e), 500);
          }}
        />
        of <strong>{pageFilter?.lastPage}</strong>
      </span>
      {/* Next Page */}
      <button
        title="Next Page"
        className={`w-8 bg-gray-400 p-1 rounded transition-all duration-600 ${
          pageFilter?.page === pageFilter?.lastPage || isLoading
            ? "opacity-25"
            : ""
        }`}
        onClick={() => {
          setPageFilter({ ...pageFilter, page: pageFilter?.page + 1 });
        }}
        disabled={pageFilter?.page === pageFilter?.lastPage || isLoading}
      >
        <ChevronRightIcon />
      </button>
      {/* Last Page */}
      <button
        title="Last Page"
        className={`w-8 bg-gray-400 p-1 rounded transition-all duration-600 ${
          pageFilter?.page === pageFilter?.lastPage ? "opacity-25" : ""
        } `}
        onClick={() => {
          setPageFilter({ ...pageFilter, page: pageFilter?.lastPage });
        }}
        disabled={pageFilter?.page === pageFilter?.lastPage}
      >
        <ChevronDoubleRightIcon />
      </button>
    </div>
  );
}
