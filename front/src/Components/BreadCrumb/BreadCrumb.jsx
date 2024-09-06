import { HomeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function AddressBar() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    pathname.length > 0 && (
      <div className="flex items-center w-fit  gap-x-2 p-3.5 lg:px-5 lg:py-3 bg-wcg_blue/5 rounded-3xl text-wcg_navy/70">
        <>
          <div className="flex gap-x-2 text-sm font-medium justify-center items-center">
            <div onClick={() => nav("/")}>
              <HomeIcon className="w-6 h-6 cursor-pointer hover:text-wcg_navy" />
            </div>
            {/* <ChevronRightIcon className="w-6 h-6 cursor-pointer" /> */}/
            {pathname
              .split("/")
              .slice(1)
              .map((segment, i) => {
                return (
                  <React.Fragment key={segment}>
                    <>
                      <span
                        className="uppercase tracking-wider cursor-pointer"
                        onClick={() =>
                          nav(
                            `/${pathname
                              .split("/")
                              .slice(1, i + 2)
                              .join("/")}`
                          )
                        }
                      >
                        <span
                          key={segment}
                          className={`hover:text-wcg_navy/80 rounded-full ${
                            i + 2 === pathname.split("/").length &&
                            "text-wcg_navy/90"
                          }`}
                        >
                          {segment.split("-").join(" ") || ""}
                        </span>
                      </span>
                      {pathname.split("/").length > 2 &&
                        i + 2 !== pathname.split("/").length &&
                        //   <ChevronRightIcon className="w-6 h-6 cursor-pointer" />
                        "/"}
                    </>
                  </React.Fragment>
                );
              })}
          </div>
        </>
      </div>
    )
  );
}
