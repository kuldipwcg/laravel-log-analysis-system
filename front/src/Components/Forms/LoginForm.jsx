import { Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "store/Actions/authAction";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email format!!")
    .required("Mail is required!!"),
  password: Yup.string().required("Password required!"),
});

export default function LoginForm() {
  const nav = useNavigate();
  const [remember, setRemember] = useState(false);

  const [login] = useLoginMutation();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember: false,
        }}
        onSubmit={async (values) => {
          const payload = { ...values, remember: remember };
          login(payload).then((res) => {
            if (res.error) {
              toast.error(res.error.data.message);
            } else {
              localStorage.setItem("token", res.data?.data?.token);
              toast.success(res?.data?.message);
              nav("/");
            }
          });
        }}
        validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label className="inline-block w-full mb-2 ml-1 font-bold text-slate-700 text-xs">
                <div className=" flex justify-between">
                  <span className="font-semibold tracking-wide text-sm">
                    Email Address
                  </span>
                  <span className="text-sm font-medium text-red-500">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
              </label>
              <div className="mb-4">
                <input
                  autoComplete="true"
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder={"Email"}
                  className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                />
              </div>
              <label className="inline-block w-full mb-2 ml-1 font-bold text-slate-700 text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold tracking-wide text-sm">
                    Password
                  </span>
                  <span className="text-sm font-medium text-red-500">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
              </label>
              <div className="mb-4">
                <input
                  placeholder={"Password"}
                  autoComplete="true"
                  type={"password"}
                  id="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                />
              </div>
              <div className="min-h-6 mb-0.5 block pl-12 text-left">
                <input
                  id="rememberMe"
                  className="mt-0.5 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                  type="checkbox"
                  onChange={(e) => {
                    setRemember(e.target.checked);
                  }}
                />
                <label
                  className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                >
                  Sign In
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
