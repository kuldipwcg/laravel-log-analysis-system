import { useEffect, useState } from "react";

export default function Dropdown({ name, value, options, onChange, label }) {
  const [data, setData] = useState([]);
  // useeffect for getting key from option data
  useEffect(() => {
    if (options) {
      setData(Object.keys(options));
    }
  }, [options]);
  return (
    <>
      {/* define dropdown selection */}
      <select
        className="w-full bg-white p-1.5 shadow-md outline-none rounded transition-all duration-600"
        name={label}
        value={value}
        placeholder={label}
        onChange={(e) => onChange(e?.target?.value, name)}
      >
        <option value={""}>{label}</option>
        {data.map((option, optionIndex) => (
          <option key={optionIndex} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
