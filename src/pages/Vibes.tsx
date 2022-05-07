import VibeCard from 'components/home/VibeCard'
import StyledContainer from 'components/layout/Container'
import { Flex } from 'components/layout/Flex'
import Grid from 'components/layout/Grid'
import { H1, P } from 'components/typography/basic.styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVibes } from 'services/requests/vibes'
import { RootState } from 'state/reducers'
import { setVibes } from 'state/vibes/vibeAction'

const Vibes = () => {

  const dispatch = useDispatch()
  const vibes = useSelector((state: RootState) => state.vibes.vibes)

  useEffect(() => {
    getVibes().then<any>(res => {
      dispatch(setVibes(res.data.data))
    })
  }, [dispatch])

  return (
    <StyledContainer>
      <Flex
        direction="column" items="center" 
        justify="center"
        margin="6rem 0"
      >
        <H1 weight="700" margin="0 0 2rem 0">Vibes</H1>
        <P
          maxW="685px"
          margin="0 auto"
          align="center"
        >
          Besides designing beautiful products & delightful web experiences, 
          we're also a team with diverse interests. This page highlights 
          things that capture our interests. While we own some images, 
          some others are just really nice things we find on the internet 
          & love 🧡.
        </P>
      </Flex>

      <Grid
            tempCol="repeat(auto-fit, minmax(600px, 1fr))"
            gap="3rem"
            margin="0 0 4rem 0"
        >
            {
                vibes.map(({ id, attributes }) => (
                    <VibeCard 
                        noHeight
                        key={id}
                        attributes={attributes}
                    />
                ))
            }
        </Grid>
    </StyledContainer>
  )
}

export default Vibes