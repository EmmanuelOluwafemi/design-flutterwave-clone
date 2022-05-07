import StyledContainer from "components/layout/Container"
import { Flex } from "components/layout/Flex"
import Grid from "components/layout/Grid"
import StoryCard from "components/StoryCard"
import { H1, P } from "components/typography/basic.styles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getStories } from "services/requests/stories"
import { RootState } from "state/reducers"
import { setStories } from "state/stories/storyAction"

const Stories = () => {

  const dispatch = useDispatch()

  // get stories from redux store
  const stories = useSelector((state: RootState) => state.stories.stories)

  useEffect(() => {
    getStories().then<any>(res => {
      dispatch(setStories(res.data.data))
    })
    
  }, [dispatch])

  return (
    <StyledContainer>
      <Flex 
        direction="column" items="center" 
        justify="center"
        margin="6rem 0"
      >
        <H1 weight="700" margin="0 0 2rem 0">Stories</H1>
        <P
          maxW="650px"
          margin="0 auto"
          align="center"
        >
          Here, we write about everything we design and ship; we write case studies, 
          new releases and updates, our design process and anything else that inspires us.
        </P>
      </Flex>

      <Grid
        tempCol="repeat(auto-fit, minmax(350px, 1fr))"
        gap="2rem"
        margin="0 0 4rem 0"
      >  
        {
          stories.map(({ id, attributes }) => (
            <StoryCard 
              id={id}
              key={id}
              attributes={attributes}
            />
          ))
        }
      </Grid>
    </StyledContainer>
  )
}

export default Stories