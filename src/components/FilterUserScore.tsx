import React, { useState } from "react";

function FilterUserScore() {
    const [value, setValue] = useState(10);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(parseInt(e.target.value))
    }
    return (
        <div>
            <label>User Score</label>
            <div>
                <input list="ticks" type="range" min="0" max="10" value={value} className="Slider" id="myRange" name="slider" onChange={handleChange} />
                <datalist id="ticks">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </datalist>
            </div>
        </div>
    )
}
export default FilterUserScore;
