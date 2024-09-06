import Dropdown from "Components/DropDown/customDropdown";
import { useLoggerFilterQuery } from "store/Actions/loggerData";
const FilterForm = ({ handleChange, pageFilter }) => {
  const { data: loggerFilter } = useLoggerFilterQuery();
  return (
    <div className="flex justify-between gap-4  w-full">
      <div className="w-1/2">
        <Dropdown
          name="filter_channel"
          value={pageFilter?.channels?.selectedKey}
          options={loggerFilter?.channels}
          onChange={handleChange}
          label="All Channels"
        />
      </div>
      <div className=" w-1/2">
        <Dropdown
          name="filter_level"
          value={pageFilter?.levels?.selectedKey}
          options={loggerFilter?.levels}
          onChange={handleChange}
          label="All Levels"
        />
      </div>
      <div className=" w-1/2">
        <Dropdown
          name="filter_level_name"
          value={pageFilter?.level_names?.selectedKey}
          options={loggerFilter?.level_names}
          onChange={handleChange}
          label="All Level Names"
        />
      </div>
    </div>
  );
};

export default FilterForm;
