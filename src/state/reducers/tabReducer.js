import React from 'react';
import { SET_TAB } from "../actions";

const initState = {
    tabState: false,
}

const tabReducer = (state=initState, actions) => {
    const { type, payload } = actions;
    
    switch (type) {
        case SET_TAB:
            return {
                tabState: payload.tabState,
            };

        default:
            return state;
    }
};

export default tabReducer;