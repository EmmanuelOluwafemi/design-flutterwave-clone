import React from 'react'

import styled from 'styled-components'

type TogglerType = {
    dark: boolean;
    onToggle: () => void;
}

const ThemeToggler = ({ dark, onToggle } : TogglerType) => {
  return (
    <StyledThemeToggler onClick={onToggle} className={dark ? 'active' : ''} />
  )
}

export default ThemeToggler

const StyledThemeToggler = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: #fff;
    border: 1px dashed #171717;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &.active {
        background: #171717;
        border: 1px solid #fff;
    }

    &:hover {
        transform: scale(1.15);
    }
`