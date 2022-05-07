import { useEffect, useRef } from 'react'

import ArrowBtn from 'components/ArrowBtn'
import { Flex } from 'components/layout/Flex'
import { useSelector } from 'react-redux'

import Slider from 'react-slick'
import { RootState } from 'state/reducers'
import styled from 'styled-components'
import HeroCard from './HeroCard'
import gsap from 'gsap'

const HeroSlider = () => {

    const sliderRef = useRef<any | null>(null);
    const stories = useSelector((state: RootState) => state.stories.stories)

    const next = () => {
        sliderRef.current.slickNext();
    }
    const previous = () => {
        sliderRef.current.slickPrev();
    }

    useEffect(() => {
        gsap.from(".slider",
            { 
                opacity: 0,
                x: 1400,
                duration: 2,
                delay: 1.5,
                ease: "easeInOut",
            }
        )
    }, [])

    // FIXME: make slider responsive

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
  return (
    <SliderContainer>
        <Slider className='slider' ref={sliderRef} {...settings}>
            {
                stories.map(({ id, attributes }) => (
                    <HeroCard 
                        key={id}
                        attributes={attributes}
                    />
                ))
            }
        </Slider>
        <Overlay />
        <Overlay className='bottom' />

        <Flex
            items="center"
            justify="center"
            gap="2rem"
            position="absolute"
            width="100%"
            height='auto'
            top="85%"
            zIndex="2"
        >
            <ArrowBtn 
                back
                onClick={previous}
            />
            <ArrowBtn 
                onClick={next}
            />
        </Flex>
    </SliderContainer>
  )
}

export default HeroSlider



const SliderContainer = styled.div`
    width: 100%;
    height: 28.531rem;
    position: relative;
    overflow: hidden;

    .slick-track {
        display: flex;
        gap: 1rem;
    }
`

const Overlay = styled.div`
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 123%;
    height: 20rem;
    background: ${({ theme }) => theme.colors.background};
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
    
    &.bottom {
        top: 80%;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 100%;
        border-top-left-radius: 100%;
    }
`