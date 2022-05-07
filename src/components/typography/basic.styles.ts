import styled from 'styled-components'

/* --------- TYPES -------------- */

// FIXME: Make typography responsive

// H1 types

type TypeProps = {
    size?: string;
    color?: string;
    weight?: string;
    align?: string;
    lineHeight?: string;
    padding?: string;
    margin?: string;
    textTransform?: string;
    maxW?: string;
}

// H1 styled component
export const H1 = styled.h1<TypeProps>`
    font-size: ${({ size }) => size ? size : "4rem" };
    font-weight: ${({ weight, theme }) => weight ? weight : theme.fontWeights.bold};
    color: ${({ color, theme }) => color ? color : theme.colors.Content};
    text-align: ${({ align }) => align ? align : "left"};
    line-height: ${({ lineHeight }) => lineHeight ? lineHeight : "1.2"};
    padding: ${({ padding }) => padding ? padding : "0"};
    margin: ${({ margin }) => margin ? margin : "0"};
`

export const H3 = styled.h3<TypeProps>`
    font-size: ${({ size }) => size ? size : "2rem" };
    font-weight: ${({ weight, theme }) => weight ? weight : theme.fontWeights.bold};
    color: ${({ color, theme }) => color ? color : theme.colors.Content};
    text-align: ${({ align }) => align ? align : "left"};
    line-height: ${({ lineHeight }) => lineHeight ? lineHeight : "1.5"};
    padding: ${({ padding }) => padding ? padding : "0"};
    margin: ${({ margin }) => margin ? margin : "0"};
`

export const H5 = styled.h5<TypeProps>`
    font-size: ${({ size }) => size ? size : "1.3rem" };
    font-weight: ${({ weight, theme }) => weight ? weight : theme.fontWeights.bold};
    color: ${({ color, theme }) => color ? color : theme.colors.Content};
    text-align: ${({ align }) => align ? align : "left"};
    line-height: ${({ lineHeight }) => lineHeight ? lineHeight : "1.5"};
    padding: ${({ padding }) => padding ? padding : "0"};
    margin: ${({ margin }) => margin ? margin : "0"};
`

export const P = styled.p<TypeProps>`
    font-size: ${({ size }) => size ? size : "1rem" };
    font-weight: ${({ weight, theme }) => weight ? weight : theme.fontWeights.normal};
    color: ${({ color, theme }) => color ? color : theme.colors.Content};
    text-align: ${({ align }) => align ? align : "left"};
    line-height: ${({ lineHeight }) => lineHeight ? lineHeight : "1.5"};
    padding: ${({ padding }) => padding ? padding : "0"};
    margin: ${({ margin }) => margin ? margin : "0"};
    text-transform: ${({ textTransform }) => textTransform ? textTransform : "none"};
    max-width: ${({ maxW }) => maxW ? maxW : "100%"};
`