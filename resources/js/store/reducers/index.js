import { combineReducers } from "redux";
import { trails } from './trailsReducer';
import {config} from '../appLoad/reducers';

export const rootReducer = combineReducers({config, trails })