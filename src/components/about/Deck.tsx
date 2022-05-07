import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useState } from 'react'

import styled from 'styled-components'

const images = [
    "https://design.flutterwave.com/_nuxt/img/iteration.2915f6e.png",
    "https://design.flutterwave.com/_nuxt/img/collaboration.675f917.png",
    "https://design.flutterwave.com/_nuxt/img/growth.c8b3715.png",
    "https://design.flutterwave.com/_nuxt/img/quality.c435fdb.png",
    "https://design.flutterwave.com/_nuxt/img/ownership.a51536f.png",
    "https://design.flutterwave.com/_nuxt/img/friendship.1875ec8.png"
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1000px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


const Deck = () => {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out

  const [props, api] = useSprings(images.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
    if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = active ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!active && gone.size === images.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })

  return (
    <StyledDeckContainer>
        {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.img
            {...bind(i)}
            src={images[i]}
            style={{
              transform: interpolate([rot, scale], trans)
            }}
          />
        </animated.div>
      ))}
    </StyledDeckContainer>
  )
}

export default Deck

const StyledDeckContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .deck {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 450px;
        max-height: 450px;
        will-change: transform;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .deck > img {
        touch-action: none;
        background-color: white;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
        height: 100%;
        will-change: transform;
        border-radius: 10px;
        box-shadow: 0 12.5px 40px -10px rgba(50, 50, 73, 0.2), 0 10px 10px -10px rgba(50, 50, 73, 0.1);
    }
`