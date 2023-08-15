export const filterValues = function (arr, filterProp, str) {
  return arr.filter((obj) => obj[filterProp] === str);
};

export const filterTypes = function (arr, filterProp, str) {
  return arr.filter((obj) => obj[filterProp].toLowerCase() === str.toLowerCase());
};

export const filterLaunches = function (arr, filterProp, n) {
  return arr.filter((obj) => formatDate(obj[filterProp]) === n);
};

export const formatDate = function (date) {
  return new Date(date).toLocaleDateString();
};

export const capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
