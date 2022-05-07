const themeStyle = {
    colors: {
       primary: "#F5A623",
       secondary: "",
       accent: "#FCD2BA",
       background: "#fff",
       Content: "#171717",
       gray: "#ccc",
    },
    fontSizes: {
        xs: ".75rem",
        sm: ".875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
    },
    fontWeights: {
        light: 300,
        normal: 400,
        semiBold: 600,
        bold: 700,
        black: 900
    },
    lineHeights: {
        none: 1,
        tight: 1.25,
        normal: 1.5,
        loose: 2,
    },
    letterSpacings: {
        normal: "normal",
        caps: "0.25em",
    }
 }

 export const lightTheme = {
    ...themeStyle,
    colors: {
        ...themeStyle.colors,
        background: "#fff",
        Content: "#171717",
    }
}

export const darkTheme = {
    ...themeStyle,
    colors: {
        ...themeStyle.colors,
        Content : "#fff",
        background: "#171717",
    }
}
 
export default themeStyle;