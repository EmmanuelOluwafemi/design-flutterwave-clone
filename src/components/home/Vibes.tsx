import ArrowBtn from 'components/ArrowBtn'
import StyledContainer from 'components/layout/Container'
import { Flex } from 'components/layout/Flex'
import { H5 } from 'components/typography/basic.styles'
import AnimatedLink from 'components/typography/links.styles'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import VibesSlider from './VibesSlider'

const Vibes = () => {

    const navigate = useNavigate();

  return (
    <StyledVibes>
        {/* //ANCHOR: vibes heading section */}
        <StyledContainer>
            <Flex
                items="center"
                justify='space-between'
            >
                <H5 color="#171717">Vibes</H5>

                <Flex
                    items="center"
                    gap="1rem"
                >
                    <AnimatedLink
                        link="/stories"
                        text="VIEW ALL STORIES"
                        color="#171717"
                    />

                    <ArrowBtn
                        size="1.5rem"
                        onClick={() => navigate("/stories")}
                        bg="#171717"
                    />
                </Flex>
            </Flex>
        </StyledContainer>

        {/* //ANCHOR: vibes slider section */}
        <VibesSlider />
    </StyledVibes>
  )
}

export default Vibes

const StyledVibes = styled.section`
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.accent};
    padding: 4rem 0;
    margin-top: 4rem;
`