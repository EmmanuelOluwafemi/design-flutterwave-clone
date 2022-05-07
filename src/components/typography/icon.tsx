import { Link } from "react-router-dom";
import styled from "styled-components";

type componentProps = {
    link: string,
    size?: string,
    children: any
}

interface styledProps {
    color?: string;
    size?: string;
}

const AnimatedLinkedIcon = ({ children, link, size }: componentProps) => {
    return (
        <StyledAnimatedLinkedIcon size={size}>
            <Link to={link}>{children}</Link>
        </StyledAnimatedLinkedIcon>
    )
}

export default AnimatedLinkedIcon;

const StyledAnimatedLinkedIcon = styled.div<styledProps>`
    width: auto;

    a {
        text-decoration: none;

        .icon {
            font-size: ${({ size }) => size ? size : "2rem"};
            color: ${({ color }) => color ? color : "#454545"};
        }
    }
`