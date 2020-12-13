import React, {useState} from 'react';
import './unitsToggle.scss'

const UnitsToggle = (props) => {

const {imperial, toggleUnits} = props;

// const [checked, setChecked] = useState(!!imperial)

    return (
        <div>
            {'m'}
            <label className="switch">
                
            <input type="checkbox" onChange={()=>toggleUnits(!imperial)} checked={imperial}/>
            
            <span className="slider round"></span>
            </label>
            {'ft'}

        </div>
    );
};

export default UnitsToggle;
