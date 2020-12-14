import React, {useState, useEffect} from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './test.scss';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

const index = () => {
    const user = useSelector(state=>state.user);
//     console.log('test component');
console.log(user)
useEffect(()=>{
    // if(Object.keys(userDetails).length===0){
    //     // history.push('/notloggedin')
    // }
},[])

// 

    return user.loading ?<p>Loading</p> :(
        <div>
            <h1>Member Area</h1>
            <p>Your User name is</p>
            {user.username}
            ...
        </div>
    );
};

export default index;

// import React, { Component } from 'react';

// class index extends Component {
//     state={
//         toggle:true,
//     }

// setToggle = () => {
//     this.setState({
//         toggle: !this.state.toggle
//     })
// }

//     render() {
//         let {toggle} = this.state;
//         return (
//                     <div>
//                         <h1>Test</h1>
//                         <button type="button" onClick={()=>this.setToggle(!toggle)}>Click me</button>
//                         {toggle?"on":"off"}
                        
//                     <SwitchTransition className={'xxxxxxx'}>
//                       <CSSTransition
//                         key={toggle ? "Goodbye, world!" : "Hello, world!"}
//                         addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
//                         classNames='fade'
//                       >
//                         <button onClick={() => this.setToggle(toggle => !toggle)}>
//                           {toggle ? "Goodbye, world 12!" : "Hello, world! 32"}
//                         </button>
//                       </CSSTransition>
//                     </SwitchTransition>
                  
//                     </div>
//                 );
//     }
// }

// export default index;