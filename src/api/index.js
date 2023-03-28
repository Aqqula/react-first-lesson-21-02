import queryString from "query-string";

export const getRandomUser = (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: "json",
    nat: "gb",
    results: 10,
    gender: "male",
    seed: "fd2022-2-ajax",
    inc: "gender,name,nat,login,email",
  };
  const resOptions = {
    ...defaultOptions,
    ...options,
  };
  console.log(queryString.stringify(resOptions));
  return fetch(
    `https://randomuser.me/api/?${queryString.stringify(resOptions)}`
  ).then((response) => response.json());
};
