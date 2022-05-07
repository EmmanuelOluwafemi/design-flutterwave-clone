import { useParams } from 'react-router-dom';

import HeroSection from 'components/singleStory/HeroSection'
import StoryContent from 'components/singleStory/StoryContent'
import { useEffect } from 'react';
import { getStory } from 'services/requests/story';


export default function SingleStory() {
  let { id } = useParams(); 

  async function getData () {
    try {
      const data = await getStory("1")
      console.log(data)
    }
    catch(err) {
      console.log(err)
    }
  } 

  useEffect(() => {
    getData()
  }, [])
  console.log("id", id)
  return (
    <>
      <HeroSection />
      <StoryContent />
    </>
  )
}
