'use client';

import Dropdown from 'react-dropdown';
import React, { useState } from 'react';
import Select from 'react-dropdown-select'
import styles from './droplist.module.css';
import 'react-dropdown/style.css';

const Droplist = ({options}) => {

    const [value, setValue] = useState();
    const defaultOption = options[0];
    return (
        <>
            <div className={styles.box}>
            <Select
                options={options}
                labelField="name"
                valueField="id"
                onChange={value => setValue(value)}
                className={styles.select}
            >
            </Select>
            </div>
        </>
    );
};

export default Droplist;
