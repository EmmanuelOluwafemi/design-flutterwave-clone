import useCursorHandlers from 'hooks/useCursorHandler';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LinkType = {
    link: string;
    text: string;
    color?: string;
}

interface StyledProps {
    color?: string
}

const AnimatedLink = ({ link, text, color } : LinkType) => {
    const cursorHandlers = useCursorHandlers(this);
    return (
        <StyledAnimatedLink {...cursorHandlers} color={color}>
            <Link to={link}>{text}</Link>
        </StyledAnimatedLink>
    )
}

export default AnimatedLink;

const StyledAnimatedLink = styled.div<StyledProps>`
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1.5px;
        background: ${({ theme }) => theme.colors.Content};
        transition: width 0.3s ease-in-out;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
    
    a {
        font-size: ${props => props.theme.fontSizes.md};
        font-weight: ${props => props.theme.fontWeights.normal};
        text-decoration: none;
        color: ${({ theme, color }) => color ? color : theme.colors.Content};
    }
`