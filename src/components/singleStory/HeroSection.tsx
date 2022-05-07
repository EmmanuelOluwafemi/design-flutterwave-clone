import React from 'react'

import styled from 'styled-components'

const HeroSection = () => {
  return (
    <StyledHeroSection />
  )
}

export default HeroSection

const StyledHeroSection = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url("https://images.ctfassets.net/xhswfsq0uu51/6k5mEpUXlP4WQMWU9BruHh/61ec10000c7804ffc3264a84e11d4208/Storyboarding_0.1.png");
    background-size: cover;
    z-index: -1;
`