import React, { useState, useEffect } from "react";
import Input from "../../../common/Input";

export default function SortDropdown({ data, setFilteredData }) {
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const sortArray = type => {
      let newData;
      if (type === "earliest") {
        newData = [...data].sort(
          (a, b) =>
            new Date(a.date_and_time).getTime() -
            new Date(b.date_and_time).getTime()
        );
      }
      if (type === "latest") {
        newData = [...data].sort(
          (a, b) =>
            new Date(b.date_and_time).getTime() -
            new Date(a.date_and_time).getTime()
        );
      }
      if (type === "") {
        newData = data;
      }
      setFilteredData(newData);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <Input
      type="select"
      width="w-content"
      onChange={event => {
        setSortType(event.target.value);
      }}
    >
      <option value="">Sort by time</option>
      <option value="earliest">Earliest first</option>
      <option value="latest">Latest first</option>
    </Input>
  );
}
