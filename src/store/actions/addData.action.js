import { ADD_DATA, ADD_DATA_SUCCESS } from "../action.types";

export const addData = values => ({
    type: ADD_DATA,
    values
});
export const addDataSuccess = values => ({
    type: ADD_DATA_SUCCESS,
    values
});
