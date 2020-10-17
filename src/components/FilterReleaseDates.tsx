import React from "react";
import styles from './FilterReleaseDates.module.css';

function FilterReleaseDates() {

    return (
        <div>
            <label>Release Dates</label>
            <div className={styles.SubFilterContainer}>
                <div className={styles.ReleaseDatesField}>
                    <label htmlFor="from">from</label>
                    <input type="date" id="from" name="from" className={styles.Input}></input>
                </div>
                <div className={styles.ReleaseDatesField}>
                    <label htmlFor="to">to</label>
                    <input type="date" id="to" name="to" className={styles.Input}></input>
                </div>
            </div>
        </div>
    )
}
export default FilterReleaseDates;
