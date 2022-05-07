import LatestStories from 'components/home/LatestStories'
import Vibes from 'components/home/Vibes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getStories } from 'services/requests/stories'
import { getVibes } from 'services/requests/vibes'
import { setStories } from 'state/stories/storyAction'
import { setVibes } from 'state/vibes/vibeAction'
import Hero from '../components/home/Hero'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getStories().then<any>(res => {
      dispatch(setStories(res.data.data))
    })

    getVibes().then<any>(res => {
      dispatch(setVibes(res.data.data))
    })
    
  }, [dispatch])
  return (
    <>
      <Hero />
      <LatestStories />
      <Vibes />
    </>
  )
}

export default Home