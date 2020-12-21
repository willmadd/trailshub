import React, {useEffect} from 'react';
import SearchBar from './SearchBar';
import {useHistory, useLocation} from 'react-router-dom';
import {useParams} from 'react-router';


const SearchModal = (props) => {
  console.log('dddd');
  console.log(props);
  // let location = useLocation();
  // let history = useHistory();
  let {location} = useParams();

  // console.log(location)
  // console.log(history)
  console.log(location);
  console.log('ddddd');
const { submitLocation } = props;
  useEffect(()=>{
    // let location = new URLSearchParams(location.search).get("location")
    console.log(location);
  },[])

  return (
    <div className={`searchModal`}>
      <h2 className="mob-hide">Search for Mountain Bike Trails in Your Area</h2>
      <SearchBar submitLocation={submitLocation} />
    </div>
  );
};

export default SearchModal;