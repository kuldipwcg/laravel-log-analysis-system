import LoginForm from "Components/Forms/LoginForm";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
          <div className="container z-1">
            <div className="flex flex-wrap -mx-3">
              <div className="flex flex-col w-full max-w-full px-12 mx-auto flex-0 md:w-8/12 lg:w-6/12 xl:w-5/12">
                <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none dark:bg-gray-950 rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0">
                    <h3 className="relative text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-cyan-400 z-1 text-8 font-bold ">
                      Welcome Back
                    </h3>
                    <p className="mb-0">
                      Enter your email and password to sign in
                    </p>
                  </div>

                  <div className="flex-auto p-6">
                    <LoginForm />
                  </div>
                  <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                    <p className="mx-auto mb-4">
                      {"Don't remember your password ? "}
                      <Link
                        to="/resetPassword"
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-cyan-400"
                      >
                        forgot Password
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 my-auto shrink-0 md:flex-0 md:w-6/12">
                <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block ">
                  <div className="skew-x-10 bg-cover -ml-16 h-full absolute inset-x-0 top-0 bg-[url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_640.png')]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
