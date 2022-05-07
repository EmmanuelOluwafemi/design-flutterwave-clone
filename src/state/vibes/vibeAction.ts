import { SETVIBES } from './model/actions';

export const setVibes = (vibes: []) => {
    return {
        type: SETVIBES,
        payload: vibes,
    }
}