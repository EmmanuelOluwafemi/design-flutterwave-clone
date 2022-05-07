import { combineReducers } from "redux";
import { StoryReducer } from "./stories/storyReducer";
import { ThemeReducer } from "./theme/ThemeReducer";
import { VibeReducer } from "./vibes/vibeReducer";

export const reducers = combineReducers({
    theme: ThemeReducer,
    stories: StoryReducer,
    vibes: VibeReducer
})

export type RootState = ReturnType<typeof reducers>