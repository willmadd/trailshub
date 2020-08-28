import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getTrailsOverview} from '../redux/actions'

import Header from './header';
import Map from './map';

const App = () => {
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getTrailsOverview());
    },[])

    return (
        <div className="App">
            <Header/>
           <Switch>

                <Route
                    exact
                    path="/"
                    render={routerProps => (
                    <Map
                        {...routerProps}
                    />
                    )}
                />
                </Switch>
        </div>
    );
};

export default App;