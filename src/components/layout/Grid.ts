import styled from "styled-components";

type GridProps = {
    gap?: string;
    size?: string;
    margin?: string;
    tempCol?: string;
}

const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${({ tempCol }) => tempCol};
    gap: ${({ gap }) => gap ? gap : "1rem"};
    margin: ${({ margin }) => margin ? margin : "0"} 
    grid-auto-rows: 10px;
    justify-content: center;
`

export default Grid;