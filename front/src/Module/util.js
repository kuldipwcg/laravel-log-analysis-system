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
// function for getting first letter capital in string
export const renderMessage = (jsonObject) => {
  if (typeof jsonObject === 'string') {
    return `${jsonObject.slice(0, 300)}...`;
  }
  let r = [],index = 0;
  for (var prop in jsonObject) {

    let text = [];
    if(typeof jsonObject[prop] ==='string'){
      text.push(<div><strong>{prop} :</strong><span>{jsonObject[prop]}</span></div>);
    }else{
      for (var subprop in jsonObject[prop]) {
        text.push(<div key={subprop}><strong>{prop}:: {subprop} :</strong><span>{jsonObject[prop][subprop]}</span></div>);
      }
    }
    r.push(<div key={index}>{text}</div>);
    index++;
  }
  return r;
};
