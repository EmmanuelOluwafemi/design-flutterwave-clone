import { useEffect } from 'react'
import gsap from 'gsap'

import StyledContainer from 'components/layout/Container'
import StyledRelative from 'components/layout/Relative'
import { Flex } from '../layout/Flex'
import { H1, P } from '../typography/basic.styles'
import HeroSlider from './HeroSlider'

const Hero = () => {
    useEffect(() => {
        // create gsap timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

        tl.from(".heading", { y: 100, opacity: 0, duration: 1, stagger: .65 })
        tl.from(".paragragh", { opacity: 0, duration: 1 })
    }, [])
  return (
    <Flex 
        height="100%"
        minh='calc(100vh - 5rem)'
        items="center"
        justify='center'
        direction='column'
        margin='4rem 0 0 0'
        position='relative'
    >
        <StyledContainer>
            <StyledRelative>
                <H1 
                    align="center"
                    className='heading'
                >
                    Hello! 👋🏾 We’re the
                </H1>
            </StyledRelative>
            <StyledRelative>
                <H1 
                    align="center"
                    className='heading'
                >
                    Flutterwave Design team
                </H1>
            </StyledRelative>

            <P
                align="center"
                margin="1.5rem 0 0 0"
                className="paragragh"
            >
                We are the designers at Flutterwave, aka FWDT. We enjoy creating beautiful <br />
                product experiences, writing, photography and just general vibes.
            </P>
        </StyledContainer>
        <HeroSlider />
    </Flex>
  )
}

export default Hero