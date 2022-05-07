export const SETSTORIES = 'SET_STORIES';
export const SETSTORY = 'SETSTORY'; 

export type StoriesActionTypes = { type: typeof SETSTORIES; payload: []; } | { type: typeof SETSTORY; payload: []; }