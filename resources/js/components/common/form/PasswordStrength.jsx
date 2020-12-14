import React, {useState, useEffect} from "react";

const PasswordStrength = ({ password }) => {
console.log(password);
const [level, setLevel]= useState(0)

useEffect(()=>{
    console.log('useeffect hit');
const rating = RenderWordMeter(password);
console.log(rating);
setLevel(rating);
},[password])

    const RenderWordMeter = pw => {
        console.log(pw);
        const lv1RegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const lv2RegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const lv3RegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const lv4RegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const lv5RegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
console.log(lv1RegEx.test(pw));
console.log(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pw));
        switch (true) {
            case lv5RegEx.test(pw):
                return 5;
            case lv4RegEx.test(pw):
                return 4;
            case lv3RegEx.test(pw):
                return 3;
            case lv2RegEx.test(pw):
                return 2;
            case lv1RegEx.test(pw):
                return 1;
            default:
                return 0;
        }
    };
return <div>{`${level}`}</div>;
};

export default PasswordStrength;
