// export const authConfig = (method, data) => {
//   return {
//     prepareHeaders: (headers) => {
//       headers.set("Content-Type", "application/json");
//       if (localStorage.getItem("token")) {
//         headers.set("Authorization", "Bearer " + localStorage.getItem("token"));
//       }
//       return headers;
//     },
    
//     method: method,
//     url: "/",
//     body: data,
//   };
// };
export const config = (method, url, data) => {
  return {
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    method: method,
    url: url,
    body: data,
  };
};
