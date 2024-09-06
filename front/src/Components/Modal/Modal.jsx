import { Dialog, Transition } from "@headlessui/react";
import { capitalizeFirstLetter, dateFunction, timeFunction } from "Module/util";
import { Fragment, useRef, useState } from "react";

export default function Modal({ data, openModal, setOpenModal }) {
  const cancelButtonRef = useRef(null);
  // read more state
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Transition.Root appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-50 ${
          !openModal && "animate-fade-down animate-ease-linear"
        }`}
        initialFocus={cancelButtonRef}
        onClose={setOpenModal}
      >
        <Transition.Child
          as={Fragment}
          enter=" ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-[1px]  transition-opacity backdrop-filter  " />
        </Transition.Child>
        <div
          className={`fixed inset-0 z-10 w-full overflow-y-auto animate-fade-up animate-ease-linear  `}
        >
          <div className="flex h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0 my-2">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-600"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100 "
              leave="ease-in duration-600"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative h-auto transform overflow-hidden rounded-md bg-white border border-gray-400 text-left shadow-md transition-all  sm:my-8 w-[40rem] mx-10">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900   "
                >
                  <div className="flex justify-between items-center bg-white  p-2   ">
                    <div className="ml-5 text-gray-600 ">
                      {capitalizeFirstLetter(data?.channel && data?.channel)}
                    </div>
                    <div>
                      <button
                        type="button"
                        className=" w-7 mr-2 h-7 bg-gray-500 text-white rounded-full outline-none  "
                        onClick={() => setOpenModal(false)}
                      >
                        {"X"}
                      </button>
                    </div>
                  </div>
                  <hr className="mt-1 border-[2px] border-gray-500" />
                </Dialog.Title>
                <div className="bg-white p-4">
                  <div className="sm:flex sm:items-start relative w-full  ">
                    <div className=" sm:mt-0 text-left w-full h-auto">
                      <div className="mt-1  text-sm  break-words  ">
                        {/* Date & Time  */}
                        <div className="mb-2 flex justify-center items-center text-lg  gap-4">
                          {/* <div className="">
                            <span className="bg-gray-300 p-1 rounded">
                              Date and Time
                            </span>
                          </div> */}
                          <div className=" p-1 rounded-md text-gray-600 border-2 border-slate-400 ">
                            {dateFunction(data?.datetime?.$date?.$numberLong)}{" "}
                            {timeFunction(data?.datetime?.$date?.$numberLong)}
                          </div>
                        </div>
                        {/* Channel  */}
                        <div className="mb-2 flex gap-4">
                          <div className="">
                            <span className="p-1 rounded-md text-gray-600 border-2 border-slate-400 ">
                              Channel{" "}
                            </span>
                          </div>
                          <div className="w-3/4">{data?.channel}</div>
                        </div>
                        {/* Message  */}
                        <div className="mb-2 flex gap-4 ">
                          <div className="">
                            <span className="p-1 rounded-md text-gray-600 border-2 border-slate-400 ">
                              Message
                            </span>
                          </div>

                          <div className="w-3/4 transition-all ease-in-out delay-700  ">
                            {isReadMore
                              ? `${data?.message.slice(0, 150)}...`
                              : data?.message}
                            {data?.message.length > 150 && (
                              <button
                                onClick={toggleReadMore}
                                className={`p-1 rounded-md text-gray-600 border-b-2 border-slate-400   text-[12px] text-xs font-semibold `}
                              >
                                {isReadMore ? "read more" : "show less"}
                              </button>
                            )}
                          </div>
                        </div>
                        {/* Level  */}
                        <div className="mb-2 flex gap-4">
                          <div className="w-20">
                            <span className="p-1 rounded-md text-gray-600 border-2 border-slate-400  ">
                              Level
                            </span>
                          </div>
                          <div className="">{data?.level}</div>
                        </div>
                        {/* Level name  */}
                        <div className="mb-2 flex gap-4">
                          <div className="">
                            <span className="p-1 rounded-md text-gray-600 border-2 border-slate-400  ">
                              Level Name
                            </span>
                          </div>
                          <div className="">{data?.level_name}</div>
                        </div>
                        {/* File  */}
                        <div className="mb-2 flex gap-4">
                          {data?.context?.exception?.file && (
                            <div className="w-20">
                              <span className="p-1 rounded-md text-gray-600 border-2 border-slate-400 ">
                                File
                              </span>
                            </div>
                          )}
                          <div className="w-3/4">
                            {data?.context?.exception?.file}
                            {""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
