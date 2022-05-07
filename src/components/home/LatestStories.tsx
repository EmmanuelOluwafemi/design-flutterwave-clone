
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import AnimatedLink from "components/typography/links.styles"
import ArrowBtn from "components/ArrowBtn"
import { Flex } from "components/layout/Flex"
import { H3 } from "components/typography/basic.styles"
import StyledContainer from "components/layout/Container"
import { RootState } from "state/reducers"
import StoryCard from "components/StoryCard"
import Grid from "components/layout/Grid"

const LatestStories = () => {
    const navigate = useNavigate()

    const stories = useSelector((state: RootState) => state.stories.stories)

  return (
    <StyledContainer>
        {/* //ANCHOR: Latest Stories Heading Section */}
        <Flex
            items="center"
            justify="space-between"
            margin="6rem 0 4rem 0"
        >
            <H3>Latest Stories</H3>

            <Flex
                items="center"
                gap="1rem"
            >
                <AnimatedLink 
                    link="/stories"
                    text="VIEW ALL STORIES"
                />

                <ArrowBtn
                    size="1.5rem"
                    onClick={() => navigate("/stories")}
                />
            </Flex>
        </Flex>

        {/* //ANCHOR: Latest stories list */}
        <Grid
            tempCol="repeat(auto-fit, minmax(300px, 1fr))"
            gap="2rem"
            margin="0 0 4rem 0"
        >
            {
                stories.slice(0, 3).map(({ id, attributes }) => (
                    <StoryCard 
                        key={id}
                        id={id}
                        attributes={attributes}
                    />
                ))
            }
        </Grid>
    </StyledContainer>
  )
}

export default LatestStories