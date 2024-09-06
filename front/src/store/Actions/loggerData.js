import { serverApi } from "store/serverApi";
import { config } from "./Config/authConfig";

const loggerAction = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    logger: builder.mutation({
      query: (payload) => {
        if (payload) {
          const convertedObject = [
            {
              key : "filter_level_name", 
              value: payload?.filter_level_name?.selectedKey
            }, {
              key : "filter_channel", 
              value : payload?.filter_channel?.selectedKey
            }, {
              key : "filter_level", 
              value: payload?.filter_level?.selectedKey
            }
          ];

          const resultString = convertedObject.filter((item)=>{ return !!item.value })
          .map((item) => `${item.key}=${item.value}`);
          console.log(resultString)

          return config(
            "GET",
            `/logger?${resultString.join('&')}&page=${payload?.page ?? 1}`
          );

        } else {
          return config("GET", `/logger?page=${payload?.page ?? 1}`);
        }
      },
      transformResponse: (data) => {
        // You can add a delay here, for example, 2 seconds
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, 500); // 2000 milliseconds = 2 seconds
        });
      },
    }),
    singleLogger: builder.query({
      query: (data) => {
        return config("GET", `/logger/${data}/show`);
      },
    }),
    loggerFilter: builder.query({
      query: (data) => {
        return config("GET", `/logger/filters`);
      },
      transformResponse: (data) => {
        // You can add a delay here, for example, 2 seconds
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, 1000); // 2000 milliseconds = 2 seconds
        });
      },
    }),
  }),
});
export const { useLoggerMutation, useSingleLoggerQuery, useLoggerFilterQuery } =
  loggerAction;
