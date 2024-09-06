import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AddressBar } from "Components/BreadCrumb/BreadCrumb";

export default function Header({ setSidebarOpen }) {
  const onLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="lg:pl-64">
        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6  transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
          <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <AddressBar />
            <div
              className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
              id="navbar"
            >
              <div className="flex items-center md:ml-auto md:pr-4">
                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                  <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full  text-slate-500">
                <div
                  onClick={() => {
                    onLogout();
                  }}
                  className="flex items-center cursor-pointer"
                >
                  <UserCircleIcon className="w-8" />
                  <span className="hidden lg:inline">Sign In</span>
                </div>
                <li className="flex items-center pl-4 xl:hidden ">
                  <div
                    className="w-8 overflow-hidden lg:hidden cursor-pointer"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <Bars3Icon />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
