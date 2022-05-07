import { StoriesActionTypes, SETSTORIES, SETSTORY } from './model/actions';
import { STORY } from "./model/story";


const defaultState: STORY = {
    stories: [],
    story: []
}

export const StoryReducer = (state: STORY = defaultState, action: StoriesActionTypes) => {
    
    const nextState = {
        stories: state.stories,
        story: state.story
    }

    switch(action.type) {
        case SETSTORIES:
            nextState.stories = action.payload;
            return nextState

        case SETSTORY:
            nextState.story = action.payload
            return nextState

        default:
            return state
    }
}