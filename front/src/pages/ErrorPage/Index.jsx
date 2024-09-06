import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <section className="my-48">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 my-auto shrink-0 lg:flex-0 lg:w-6/12 ">
              <h1 className="leading-tighter text-['calc(1.625rem_+_4.5vw)'] font-bold text-transparent bg-clip-text bg-gradient-to-tl from-red-600 to-rose-400 z-1 relative xl:text-8xl">
                Error 404
              </h1>
              <h2>Erm. Page not found</h2>
              <p className="font-normal leading-relaxed text-xl">
                We suggest you to go to the homepage while we solve this issue.
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-3 mt-6 mb-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
              >
                Go to homepage
              </Link>
            </div>
            <div className="relative w-full max-w-full px-3 my-auto shrink-0 lg:flex-0 lg:w-6/12">
              <img
                className="relative w-full"
                src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/error-404.png"
                alt="error-404-img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
