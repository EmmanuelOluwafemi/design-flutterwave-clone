import { ThemeActionTypes, SETTHEME } from './model/actions'

import { Theme } from './model/theme'

//TODO: get default state from local storage if exist 
const defaultState: Theme = {
    theme: 'light'
}

export const ThemeReducer = (state: Theme = defaultState, action: ThemeActionTypes) => {
    
    const nextState = {
        theme: state.theme
    }

    switch(action.type) {
        case SETTHEME:
            console.log("payload", action.payload)
            nextState.theme = action.payload;
            return nextState

        default:
            return state
    }
}