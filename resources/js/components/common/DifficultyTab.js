import React from "react";
import "./difficultyTab.scss";

const DifficultyTab = ({ level }) => {

const grade = level === 1
? "easy"
: level === 2
? "intermediate"
: level === 3
? "hard"
: "extreme"

    return (
        <div className={`difficulty-indicator ${grade}`}>
            <h5>
                {grade}
            </h5>
        </div>
    );
};

export default DifficultyTab;
