import { SETTHEME } from './model/actions'

export const setTheme = (theme: string) => {
    return {
        type: SETTHEME,
        payload: theme,
    }
}