import styled from 'styled-components'

interface ContainerProps {
    percent?: string;
}

const StyledContainer = styled.div<ContainerProps>`
    width: 100%;
    padding: 0 ${({ percent }) => percent ? percent : "8%"};
`

export default StyledContainer