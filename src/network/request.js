import axios from "axios";
// import { get } from "core-js/fn/dict";

export function request(config) {
  const instance = axios.create({
    baseURL: "/",
    timeout: 5000,
  });
  return instance(config);
}
// let baseURL = "/";
// export const myRequest = (option) => {
//   return new Promise((resolve, reject) => {
//     const instance = axios
//       .create({
//         timeout: 5000,
//         url: baseURL + option.url,
//         method: option.method || get,
//         data: option.data || {},
//       })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
