export const dateFunction = (value) => {
  const dateValue = value;
  return new Date(Number(dateValue)).toLocaleDateString("en-US");
};
export const timeFunction = (value) => {
  const dateValue = value;
  return new Date(Number(dateValue)).toLocaleTimeString("en-US");
};
// function for getting first letter capital in string
export const capitalizeFirstLetter = (str) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};
