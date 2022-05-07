// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string,
            accent: string,
            background: string,
            Content: string,
         };
         fontSizes: {
             xs: string,
             sm: string,
             md: string,
             lg: string,
             xl: string,
             "2xl": string,
             "3xl": string,
         },
         fontWeights: {
             light: number,
             normal: number,
             semiBold: number,
             bold: number,
             black: number
         },
         lineHeights: {
             none: number,
             tight: number,
             normal: number,
             loose: number,
         },
         letterSpacings: {
             normal: string,
             caps: string,
         }
    }
}