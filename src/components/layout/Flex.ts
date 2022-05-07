import styled from "styled-components";

type FlexProps = {
    items?: string;
    direction?: string;
    justify?: string;
    gap?: string;
    wrap?: string;
    width?: string;
    height?: string;
    maxw?: string;
    padding?: string;
    margin?: string;
    minh?: string;
    position?: string;
    zIndex?: string;
    top?: string;
    bT?: string;
    bg?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    align-items: ${({ items }) => items ? items : 'flex-start' };
    justify-content: ${({ justify }) => justify ? justify : "flex-start"};
    flex-direction: ${({ direction }) => direction ? direction : "row"};
    gap: ${({ gap }) => gap ? gap : "0"};
    flex-wrap: ${({ wrap }) => wrap ? wrap : "nowrap"};
    width: ${({ width }) => width ? width : "auto"};
    height: ${({ height }) => height ? height : "100%"};
    min-height: ${({minh}) => minh ? minh : "0"};
    max-width: ${({ maxw }) => maxw ? maxw : "auto"};
    padding: ${({ padding }) => padding ? padding : "0"};
    margin: ${({ margin }) => margin ? margin : "0"};
    position: ${({ position }) => position ? position : "relative"};
    top: ${({ top }) => top ? top : "0"};
    z-index: ${({ zIndex }) => zIndex ? zIndex : "0"};
    border-top: ${({ bT }) => bT ? bT : "none"};
    background: ${({ bg }) => bg ? bg : "none"}
`