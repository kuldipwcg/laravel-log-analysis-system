import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
// import { users } from "Assets/Data/user";
import Modal from "Components/Modal/Modal";
import ListTable from "Components/Table/ListTable";
import { dateFunction, timeFunction } from "Module/util";
import { useEffect, useMemo, useState } from "react";
import { useLoggerMutation } from "store/Actions/loggerData";
import FilterForm from "./FilterForm";
import { debounce } from "Components/Table/Pagination";

const LoggerList = () => {
  // Logger API data
  const [loggerData, { data, isLoading, isSuccess }] = useLoggerMutation();
  // state for filter pagination
  const [filterData, setFilterData] = useState({
    page: 1,
  });
  // state for modal open or close
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    loggerData(filterData).then((res) => {
      setFilterData({ ...filterData, lastPage: res?.data?.last_page });
    });
  }, [filterData?.page, filterData?.req]);
  // function for set selected Dropdown value
  const handleData = (value, name) => {
    setFilterData({
      ...filterData,
      [name]: {
        selectedKey: value,
      },
      page: 1,
      req: !filterData?.req,
    });
  };
  // function for set selected Dropdown value
  const handleChange = (value, name) => {
    debounce(handleData(value, name), 300);
  };
  // create haeder for table
  const columns = useMemo(
    () => [
      {
        header: "Channel",
        accessor: "channel",
      },

      {
        header: "Level",
        accessor: "level",
      },
      {
        header: "Level Name",
        accessor: "level_name",
      },
      {
        header: "Date",
        accessor: "date",
        Cell: (cell) => {
          return dateFunction(cell?.row?.values?.datetime?.$date?.$numberLong);
        },
      },

      {
        header: "Time",
        accessor: `datetime`,
        Cell: (cell) => {
          return timeFunction(cell?.row?.values?.datetime?.$date?.$numberLong);
        },
      },
      {
        header: "Action",
        accessor: "_id",
        Cell: ({ cell }) => (
          <div className="flex gap-2 justify-center items-center">
            <EyeIcon
              className="h-5 text-orange-DEFAULT-500 cursor-pointer"
              title="View"
              onClick={() => {
                setOpenModal(true);
                setModalData(cell?.row?.original);
              }}
            />
            {/* <PencilSquareIcon
              className="h-5 text-blue-DEFAULT-400 cursor-pointer"
              title="Edit"
            /> */}
            {/* <TrashIcon
              className="h-5 text-red-DEFAULT-800 cursor-pointer"
              title="Delete"
            /> */}
          </div>
        ),
      },
    ],
    []
  );
  return (
    <>
      {modalData && openModal && (
        <Modal
          data={modalData}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <section>
        <div
          className="bg-opacity-50 flex flex-col items-center "
          style={{
            height: "90vh",
          }}
        >
          <FilterForm
            handleChange={handleChange}
            pageFilter={filterData}
          ></FilterForm>
          <div className="select-none md:m-10 lg-max:m-5 bg-[#fff]   lg-max:flex-col lg:flex shadow-2xl rounded-lg w-full">
            <div className=" w-full flex order-1 lg-max:order-2 justify-center items-center rounded-l-lg lg-max:rounded-b-lg">
              <div className=" w-full m-5  ">
                <ListTable
                  columns={columns}
                  data={data?.data ?? []}
                  isLoading={isLoading}
                  pageFilter={filterData}
                  setPageFilter={setFilterData}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoggerList;
