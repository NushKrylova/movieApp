import React from 'react';
import styles from './Sort.module.css';

function Sort() {
    return (
        <div className={styles.Border}>
            <h3 className={styles.Title}>Sort</h3>
            <hr className={styles.Divider}/>
            <label htmlFor="sort">Sort Results By</label>
            <div className={styles.SubFilterContainer}>
                <select name="sort" id="sort" className={styles.Input}>
                    <option value="">no sorting</option>
                    <option value="original_title.asc">Title[A-Z]</option>
                    <option value="original_title.desc">Title[Z-A]</option>
                </select>
            </div>
        </div>
    )
}
export default Sort;
