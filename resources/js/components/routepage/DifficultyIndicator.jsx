import React from 'react';

const DifficultyIndicator = ({diff}) => {
    return (
        <div className={`difficulty-indicator difficulty-${diff}`}>
            <span>{diff===1?"easy":diff===2?"intermediate":diff===3?"hard":"extreme"}</span>
        </div>
    );
};

export default DifficultyIndicator;