import EventCard from "components/event/EventCard"
import StyledContainer from "components/layout/Container"
import { Flex } from "components/layout/Flex"
import { H1, H5, P } from "components/typography/basic.styles"

const Events = () => {
  return (
    <StyledContainer>
      <Flex
        direction="column" items="center" 
        justify="center"
        margin="6rem 0"
      >
        <H1 weight="700" margin="0 0 2rem 0">Events</H1>
        <P
          maxW="650px"
          margin="0 auto"
          align="center"
        >
          Here, you will find our friendly one on one sessions with different designers 
          in our ecosystem, working on different products, either independently, or on teams.
        </P>
      </Flex>

      <Flex
        maxw="550px"
        margin="0 auto"
        direction="column"
        items="center"
      >
        <EventCard />
        <P 
          size=".75rem" textTransform="uppercase" 
          weight="700" align="center"
        >
          BUSINESS AND ARTBOARDS EP 1
        </P>

        <H5 align="center" margin=".35rem 0">
          Jason Pearson, Head of Product Support at Figma
        </H5>
        
        <H5 align="center" weight="400">
          FLW Design x Figma
        </H5>
        
        <P 
          size=".75rem" textTransform="uppercase" 
          weight="500" align="center" margin="1rem 0 0 0"
        >
          FEB 27, 2020
        </P>
      </Flex>


    </StyledContainer>
  )
}

export default Events