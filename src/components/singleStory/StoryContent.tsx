import StyledContainer from "components/layout/Container"
import { Flex } from "components/layout/Flex"
import { H3, P } from "components/typography/basic.styles"
import styled from "styled-components"
import Content from "./Content"
import ContentSidebar from "./ContentSidebar"

const StoryContent = () => {
  return (
    <StyledStoryContent>
        <StyledContainer percent="18%">
            <P margin=".75rem 0 0 0" weight="500">
                DEC 07, 2021 - 
                <span 
                    style={{ 
                        textTransform: "uppercase",
                        fontWeight: "300"
                    }}
                >
                    3 MIN READ
                </span>
            </P>
            <H3 size="2.15rem" lineHeight="1.2" margin=".5rem 0 .75rem 0">
                Storyboarding, an essential step to a flawless motion design
            </H3>
            <P size="1.3rem">
                Storyboarding simply means making a board of stories. It’s a step in the motion 
                design process where designers make visual representations of ideas bouncing around 
                their heads in order to build a frame-by-frame flow of a motion, a scene-by-scene 
                flow of a story, or both.
            </P>

            {/* grid Section */}
            <Flex margin="3rem 0" gap="2rem">
                <ContentSidebar />
                <Content />
            </Flex>
        </StyledContainer>
    </StyledStoryContent>
  )
}

export default StoryContent

const StyledStoryContent = styled.section`
    margin-top: 100vh;
    width: 100%;
`