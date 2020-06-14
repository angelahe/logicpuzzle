import { combineReducers } from "redux";
import clues from "./clues";
import grids from "./grids";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({ clues, visibilityFilter, grids })