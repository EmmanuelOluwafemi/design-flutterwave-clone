import { VibesActionTypes, SETVIBES } from './model/actions';
import { VIBE } from "./model/vibe";


const defaultState: VIBE = {
    vibes: []
}

export const VibeReducer = (state: VIBE = defaultState, action: VibesActionTypes) => {
    
    const nextState = {
        vibes: state.vibes
    }

    switch(action.type) {
        case SETVIBES:
            nextState.vibes = action.payload;
            return nextState

        default:
            return state
    }
}