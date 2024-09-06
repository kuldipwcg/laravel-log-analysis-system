import { Formik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "store/Actions/authAction";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email format!!")
    .required("Registered mail is required!!"),
});

export default function ResetPasswordForm() {
  const nav = useNavigate();
  const [resetPassword] = useResetPasswordMutation();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values) => {
          //   console.log(values);
          resetPassword(values).then((res) => {
            if (res.error) {
              toast.error(res.error.data.message);
            } else {
              toast.success(res.data?.message);
              nav("/login");
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
                <div className="flex justify-between">
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

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                >
                  Send Mail
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}