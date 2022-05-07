import React from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { Flex } from './layout/Flex'
import ThemeToggler from './ThemeToggler'
import AnimatedLink from './typography/links.styles'
import StyledContainer from './layout/Container'

import { setTheme } from '../state/theme/ThemeAction'

const Header = () => {

  const dispatch = useDispatch()
  // TODO: set theme to localstorage to make it persistent
  return (
    <StyledContainer>
      <StyledHeader>
        <div className='logo'>Design</div>

        <Flex items="center" justify="flex-start" gap="3rem" wrap="no-wrap" >
          <AnimatedLink link="/stories" text="Stories" />
          <AnimatedLink link="/vibes" text="Vibes" />
          <AnimatedLink link="/about" text="About Us" />
          <AnimatedLink link="/events" text="Events" />

          <Flex items="center" justify="flex-start" gap="1rem" wrap="no-wrap" >
            <ThemeToggler onToggle={() => dispatch(setTheme("light"))} dark={false} />
            <ThemeToggler onToggle={() => dispatch(setTheme("dark"))} dark={true} />
          </Flex>
        </Flex>
      </StyledHeader>
    </StyledContainer>
  )
}

export default Header

// TODO: add mobile responsiveness implementation
const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .logo {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.Content};
  }
`