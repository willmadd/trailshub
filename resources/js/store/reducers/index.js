import { combineReducers } from "redux";
import { trails } from './trailsReducer';
import {config} from '../appLoad/reducers';
import {userData} from '../Login/reducers';
import {user} from '../Load/reducers';

export const rootReducer = combineReducers({config, trails, user })