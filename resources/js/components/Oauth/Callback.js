import React, {useEffect} from 'react';

export default () => {
  console.log('callback');
    useEffect(() => {
      console.log('useeffect hit');
     // get the URL parameters which will include the auth token
      const params = window.location.search;
      if (window.opener) {
        // send them to the opening window
        window.opener.postMessage(params);
        // close the popup
        window.close();
      }
    });
    // some text to show the user
    return <p>Please wait...Redirecting</p>;
   };