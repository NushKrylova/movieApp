import React from "react";

function FilterReleaseDates() {

    return (
        <div>
            <label>Release Dates</label>
            <div className="SubFilterContainer">
                <div className="ReleaseDatesField">
                    <label htmlFor="from">from</label>
                    <input type="date" id="from" name="from" className="Input"></input>
                </div>
                <div className="ReleaseDatesField">
                    <label htmlFor="to">to</label>
                    <input type="date" id="to" name="to" className="Input"></input>
                </div>
            </div>
        </div>
    )
}
export default FilterReleaseDates;
