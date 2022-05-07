import Deck from 'components/about/Deck'
import OurDiscipline from 'components/about/OurDiscipline'
import StyledContainer from 'components/layout/Container'
import { Flex } from 'components/layout/Flex'
import { H1, P } from 'components/typography/basic.styles'
import React from 'react'

const About = () => {
  return (
    <StyledContainer>
      <Flex
        direction="column" items="center" 
        justify="center"
        margin="6rem 0"
      >
        <H1 weight="700" margin="0 0 2rem 0">Who we are</H1>
        <P
          maxW="650px"
          margin="0 auto"
          align="center"
        >
          Flutterwave design is a cross-disciplinary team of UX Researchers, 
          Product and Web Experience Designers building great payment solutions 
          and delightful experiences for businesses and individuals.
        </P>
      </Flex>
      

      {/* Our Discipline Section */}

      <Flex
        direction="column" items="center" 
        justify="center"
        margin="6rem 0"
      >
        <H1 weight="700" margin="0 0 2rem 0">Our disciplines</H1>
        <P
          maxW="650px"
          margin="0 auto"
          align="center"
        >
          We like to imagine the team as a Swiss Army knife of sorts; our different 
          skillsets come in handy in building products people love.
        </P>
      </Flex>

      <OurDiscipline />

      {/* Our team values section */}
      <Flex
        direction="column" items="center" 
        justify="center"
        margin="6rem 0"
      >
        <H1 weight="700" margin="0 0 2rem 0">Our team values</H1>
        <P
          maxW="650px"
          margin="0 auto"
          align="center"
        >
          At Flutterwave, we believe that a cross-disciplinary team is what it takes 
          to build a wholesome and delightful product experience.
        </P>
      </Flex>

      <Deck />
    </StyledContainer>
  )
}

export default About