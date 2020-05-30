import { combineReducers } from "redux";
import clues from "./clues";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({ clues, visibilityFilter })