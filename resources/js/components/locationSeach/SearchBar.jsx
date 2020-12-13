import React, { useRef, useEffect } from 'react';
import Geosuggest from "react-geosuggest";

const SearchBar = ({ submitLocation }) => {

    const searchSuggest = useRef();

    const animate = (e) =>{
        requestAnimationFrame(()=>{
            searchSuggest.current.transform = `translateX(40px)`;
            searchSuggest.current.transition = `transform 2s`;
        })
    }

useEffect(()=>{

})



    return (
        <div className="searchBar">
            <Geosuggest ref={searchSuggest} onUpdateSuggests={(e)=>animate(e)} onSuggestSelect={submitLocation} placeholder={'Find Mountain Bike Trails in Your Area'}/>
            <button className="submit-location mob-hide"></button>
        </div>
    );
};

export default SearchBar;