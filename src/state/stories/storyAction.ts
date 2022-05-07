import { SETSTORIES, SETSTORY } from './model/actions';

export const setStories = (stories: []) => {
    return {
        type: SETSTORIES,
        payload: stories,
    }
}

export const setStory = (story: []) => {
    return {
        type: SETSTORY,
        payload: story
    }
}