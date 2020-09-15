import React from 'react';
import { sortTitleAZ, sortTitleZA } from '../constants'

function Sort() {
    return (
        <div className="Border">
            <h3>Sort</h3>
            <hr />
            <label htmlFor="sort">Sort Results By</label>
            <div className="SubFilterContainer">
                <select name="sort" id="sort" className="Input">
                    <option value="">no sorting</option>
                    <option value="original_title.asc">Title[A-Z]</option>
                    <option value="original_title.desc">Title[Z-A]</option>
                </select>
            </div>
        </div>
    )
}
export default Sort;
