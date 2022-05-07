import styled from 'styled-components'

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';

type Props = {
    size?: string,
    bg?: string
}

interface componentProps {
    back?: boolean,
    onClick: () => void,
    size?: string,
    bg?: string
}

const ArrowBtn = ({ back, onClick, size, bg }: componentProps) => {
  return (
    <StyledArrowBtn
        size={size}
        bg={bg}
        onClick={onClick}
    >
        {
            back ?
            <IoIosArrowRoundBack className="icon" />:
            <IoIosArrowRoundForward className='icon' />
        }
    </StyledArrowBtn>
  )
}

export default ArrowBtn

const StyledArrowBtn = styled.button<Props>`
    width: ${({ size }) => size ? size : '3rem'};
    height: ${({ size }) => size ? size : '3rem'};
    border-radius: 50%;
    background: none;
    outline: none;
    border: 1px solid ${({ theme, bg }) => bg ? bg : theme.colors.Content};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    .icon {
        color: ${({ theme, bg }) => bg ? bg : theme.colors.Content};
        font-size: 1rem;
    }

    &:hover {
        background: ${({ theme, bg }) => bg ? bg : theme.colors.Content};

        .icon {
            color: ${({ theme }) => theme.colors.background};
        }
    }
`