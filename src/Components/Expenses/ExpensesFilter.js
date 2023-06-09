import React from "react";
import styles from './ExpensesFilter.module.css';

const ExpensesFilter = (props) =>{
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    const itemsYears = props.items.map(item=> {
        return new Date(item.date).getFullYear()
    })

    const yearsSet = new Set(itemsYears)

    const years = [...yearsSet]

    return(
        <div className={styles['expenses-filter']}>
            <div className={styles['expenses-filter_control']}>
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value=''>select year</option>
                    {years.map(year=> <option key={year} value={year}>{year}</option> )}
                    {/* <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option> */}
                </select>
            </div>
        </div>
    )
};

export default ExpensesFilter;