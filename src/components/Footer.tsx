import styled from 'styled-components'
import StyledContainer from './layout/Container'
import { Flex } from './layout/Flex'
import { H3, H5, P } from './typography/basic.styles'
import AnimatedLinkedIcon from './typography/icon'
import AnimatedLink from './typography/links.styles'

// icons
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillDribbbleCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <StyledContainer>
      <Flex
        padding="8rem 0 4rem 0"
        items="center"
        justify='center'
        direction='column'
      >
        <H3 align='center'>Stay up to date with Flutterwave’s design team</H3>
        <P 
          align='center' 
          margin='.75rem 0 0 0'
        >
          Subscribe to our newsletter for latest news, projects and updates
        </P>

        <StyledForm>
          <input placeholder='We saved a nice spot for your email' />
          <button type='submit'>Subscribe</button>
        </StyledForm>
      </Flex>

      <Flex
        items="center"
        justify='space-between'
        padding="3rem 0"
        bT="1px dashed #17171733"
      >
        <Flex
          items="center"
          gap="2rem"
        >
          <H5>© 2022</H5>
          <AnimatedLink text="flutterwave.com" link="https://flutterwave.com/" />
        </Flex>

        <Flex
          items="center"
          gap="1.5rem"
        >
          {/* twitter */}
          <AnimatedLinkedIcon 
            size="1.5rem"
            link="https://twitter.com/flutterwavedsgn">
              <BsTwitter className='icon' />
          </AnimatedLinkedIcon>

          {/* Instagram */}
          <AnimatedLinkedIcon 
            size="1.5rem"
            link="https://www.instagram.com/flutterwave.design/">
              <BsInstagram className='icon' />
          </AnimatedLinkedIcon>

          {/* Dribble */}
          <AnimatedLinkedIcon 
            size="1.5rem"
            link="https://dribbble.com/flutterwave">
              <AiFillDribbbleCircle className='icon' />
          </AnimatedLinkedIcon>
        </Flex>
      </Flex>
    </StyledContainer>
  )
}

export default Footer

const StyledForm = styled.form`
  width: 100%;
  max-width: 600px;
  height: 5rem;
  margin-top: 2.5rem;
  display: flex;
  
  
  input {
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.Content};
    border: none;
    outline: none;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.Content};
    border-right: none;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    transition: border .3s ease-in-out;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-right: none;
    }
  }

  button {
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    padding: 0 3rem;
    color: #1a1a1a;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 0;
    border-radius: .3rem;
    font-weight: 500;
  }
`