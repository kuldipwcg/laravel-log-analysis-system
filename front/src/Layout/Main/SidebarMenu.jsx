import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { sidebarList } from "Assets/Data/sidebarList";
import logo from "Assets/logo.png";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarMenu = ({ setSidebarOpen }) => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const contentSpace = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease rotate-0");
  const toggleAccordion = () => {
    setExpanded((prevState) => !prevState);
    setHeight(expanded ? "0px" : `${contentSpace.current.scrollHeight + 10}px`);
    setRotate(
      expanded
        ? "transform duration-500 ease rotate-0"
        : "transform duration-500 ease -rotate-180",
    );
  };

  return (
    <div>
      <div>
        <div
          className="flex  cursor-pointer items-center justify-center  px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white w-full"
          onClick={() => nav("/")}
        >
          <img
            src={logo}
            className="inline-block h-full w-full transition-all duration-200 ease-soft-in-out max-w-60/100 max-h-60max-w-60/100  dark:hidden"
            alt="main_logo"
          />

          {/* <span className="ml-2 font-semibold transition-all duration-200 ease-soft-in-out text-2xl">Yachtr</span> */}
        </div>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <ul role="list" className="pt-5 ">
        {sidebarList.map((item) => (
          <li key={item.name}>
            {!item.children ? (
              <div
                onClick={() => {
                  nav(item.href);
                  setSidebarOpen && setSidebarOpen(false);
                }}
                className={` ${
                  pathname === item.href
                    ? "bg-white  lg:shadow-soft-xl rounded-lg"
                    : ""
                } ease-soft-in-out text-sm py-2.7 active  my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors cursor-pointer dark:text-white dark:opacity-80 `}
              >
                <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-1 text-center text-white">
                  <item.icon />
                </div>

                <div className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">
                  {item.name}
                </div>
              </div>
            ) : (
              <div>
                <div
                  onClick={() => toggleAccordion()}
                  className={` ${
                    pathname.includes(item.href)
                      ? "bg-white  lg:shadow-soft-xl rounded-lg"
                      : ""
                  } ease-soft-in-out text-sm py-2.7 active  my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors cursor-pointer  dark:text-white dark:opacity-80 justify-between `}
                >
                  <div className="flex items-center">
                    <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-1 text-center text-white">
                      <item.icon />
                    </div>

                    <div className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">
                      {item.name}
                    </div>
                  </div>
                  <div className={`justify-self-end ${rotate} w-5`}>
                    {" "}
                    <ChevronDownIcon />{" "}
                  </div>
                </div>
                <div
                  ref={contentSpace}
                  style={{ maxHeight: `${height}` }}
                  className="overflow-auto transition-max-height duration-500 ease-in-out data_table no_scrollbar"
                >
                  <div className="w-full">
                    {item.children.map((child) => (
                      <div
                        key={child.name}
                        onClick={() => {
                          nav(child.href);
                          setSidebarOpen && setSidebarOpen(false);
                          toggleAccordion();
                        }}
                        className=" ease-soft-in-out cursor-pointer text-sm py-2.7 active  my-2 mx-4 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-all w-full  dark:text-white dark:opacity-80 "
                      >
                        <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-1 text-center text-white">
                          <child.icon />
                        </div>

                        <div className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">
                          {child.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;

/// ease-soft-in-out text-sm py-2.7 active lg:shadow-soft-xl my-2 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all w-full  dark:text-white dark:opacity-80
