import React, {useState} from 'react';

const UnitsToggle = (props) => {

const {imperial, toggleUnits} = props;

    return (
        <div>
            <button type="button" onClick={()=>toggleUnits(!imperial)}>Change Units</button>
            {imperial?"imperial":"metric"}
        </div>
    );
};

export default UnitsToggle;