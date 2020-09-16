import React from "react";

function FilterUserScore() {

    return (
        <div>
            <label>User Score</label>
            <div class="slidecontainer">
                <input type="range" min="0" max="10" value="3" class="slider" id="userScore" />
            </div>
        </div>
    )
}
export default FilterUserScore;
