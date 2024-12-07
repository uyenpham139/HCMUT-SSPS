import React, { useState } from "react";
import Select from "react-dropdown-select";
import styles from "./droplist.module.css";

const Droplist = ({ options, onChange }) => {
  const [value, setValue] = useState([]);

  const handleChange = (selected) => {
    setValue(selected);
    if (onChange) onChange(selected);
  };

  return (
    <div className={styles.box}>
      <Select
        options={options}
        labelField="name"
        valueField="id"
        onChange={handleChange}
        className={styles.select}
        values={value}
      />
    </div>
  );
};

export default Droplist;
