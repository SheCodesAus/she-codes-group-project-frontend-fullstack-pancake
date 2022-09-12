import React, { useState, useEffect } from "react";
import Input from "../../../common/Input";
import "./style.css";

const options = [
  "HTML",
  "CSS",
  "Python",
  "Django",
  "DRF",
  "React",
  "PHP",
  "AWS",
  "Testing",
  "Other",
];

export default function FilterDropdown({ data, setFilteredData }) {
  const [values, setValues] = useState([]);

  const handleChange = e => {
    if (values.includes(e.target.value)) {
      if (values[0] === e.target.value) {
        setValues(options);
      }
      const newTopics = values.filter(val => val !== e.target.value);
      setValues(newTopics);
    } else {
      setValues([...values, e.target.value]);
    }
  };

  useEffect(() => {
    const newData = [];
    data.forEach(item => {
      if (item.topics.filter(topic => values.includes(topic)).length > 0) {
        newData.push(item);
      }
    });
    setFilteredData(newData);
  }, [values]);

  return (
    <div className="filter-dropdown">
      <p>Filter by topics</p>
      <Input
        type="select"
        width="w-content"
        multiple={true}
        onChange={handleChange}
        value={values}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Input>
    </div>
  );
}
