import { serverApi } from "store/serverApi";

const authAction = serverApi
  .enhanceEndpoints({ tagTypes: ["users"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation({
        query(body) {
          return {
            url: `login`,
            method: "POST",
            body: body,
          };
        },
      }),
      resetPassword: builder.mutation({
        query(body) {
          return {
            url: `forgotpassword`,
            method: "POST",
            body: body,
          };
        },
      }),
      changePassword: builder.mutation({
        query(body) {
          return {
            url: `changepassword`,
            method: "POST",
            body: body,
          };
        },
      }),
    }),
  });
export const {
  useLoginMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authAction;
