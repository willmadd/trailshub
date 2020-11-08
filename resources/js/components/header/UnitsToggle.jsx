import React, {useState} from 'react';
import './unitsToggle.scss'

const UnitsToggle = (props) => {

const {imperial, toggleUnits} = props;

// const [checked, setChecked] = useState(!!imperial)

    return (
        <div>
            {'m'}
            <label class="switch">
                
            <input type="checkbox" onClick={()=>toggleUnits(!imperial)} checked={imperial}/>
            
            <span class="slider round"></span>
            </label>
            {'ft'}

        </div>
    );
};

export default UnitsToggle;
