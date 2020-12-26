import React from 'react';
import DifficultyTab from '../common/DifficultyTab';

const SummaryModal = ({summary}) => {
    return (
        <div className="summary">
            <h4>{decodeURIComponent(summary.title)}</h4>
            <DifficultyTab level={summary.difficulty}/>
            {/* <img src={summary.images[0]}/> */}
        </div>
    );
};

export default SummaryModal;