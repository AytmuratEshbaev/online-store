import Select from "react-select";
import './SearchByCategory.css';
const options = [
  { value: "chocolate", label: "Телефон" },
  { value: "strawberry", label: "Ноутбукы" },
  { value: "vanilla", label: "Телевизоры" },
];

const customStyles = {
  option: (defaultStyles: any, state: any) => ({
    ...defaultStyles,
    fontWeight: state.isSelected ? "bold" : "normal",
    backgroundColor: state.isSelected ? "#fed700" : "#fff",
  }),
};

const SearchByCategory = () => (
  <Select
    options={options}
    styles={customStyles}
    className="react-select-container"
    classNamePrefix="react-select"
    defaultValue={options[0]}
  />
);
export default SearchByCategory;
