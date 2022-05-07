import { H3, P } from 'components/typography/basic.styles'
import React from 'react'

import styled from 'styled-components'

interface CardProps {
    attributes: {
        thumbnail: string,
        author_name: string,
        title: string
    },
}

type StyledHeroCardTypes = {
    imgUrl: string
}

const HeroCard = ({ attributes }: CardProps) => {
  return (
    <StyledHeroCard imgUrl={attributes.thumbnail}>
        <div className='overlay'>
            <H3 size="1.6rem" color='#fff' align='center'>{attributes.title}</H3>
            <P color="#fff" align='center' margin='1.5rem 0 0 0'>{`By ${attributes.author_name}`}</P>
        </div>
    </StyledHeroCard>
  )
}

export default HeroCard

const StyledHeroCard= styled.div<StyledHeroCardTypes>`
    width: 100%;
    height: 100%;
    min-height: 28.531rem;
    background: url(${({ imgUrl }) => imgUrl}) no-repeat center center;
    background-size: cover;

    .overlay {
        width: 100%;
        height: 100%;
        min-height: 28.531rem;
        background: rgb(23 23 23 / 50%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        flex-direction: column;
    }
`