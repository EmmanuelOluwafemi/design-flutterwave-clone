import { Flex } from 'components/layout/Flex'
import { P } from 'components/typography/basic.styles'

import styled from 'styled-components'

interface vibeCardProps {
    attributes: {
        imgUrl: string
        posted_by: string
        type: string
        illustrated_by?: string
        link: string
    },
    noHeight?: boolean,
    maxWidth?: string
}

type StyledProps = {
    noHeight?: boolean,
    imgHeight?: any,
    maxWidth?: string
}

const VibeCard = ({ attributes, noHeight, maxWidth }: vibeCardProps) => {
    
  return (
    <StyledVibeCard noHeight={noHeight} maxWidth={maxWidth}>
        {
            !attributes.link || attributes.link === "" ?
            <div className='img_container'>
                <img loading='lazy' src={attributes.imgUrl} alt={attributes.posted_by} />
            </div>:
            <a href={attributes.link}>
                <div className='img_container'>
                    <img src={attributes.imgUrl} alt={attributes.posted_by} />
                </div>
            </a>
        }

        <Flex
            items="center"
            margin=".875rem 0 0 0"
            gap=".5rem"
            height='auto'
        >
            <P color="#171717" weight='500'>{`${attributes.type}`}{attributes.illustrated_by && `(by ${attributes.illustrated_by})`}</P>
            <P color="#17171785" weight='400'>|</P>
            <P color="#17171785" weight='400'>Posted by {attributes.posted_by}</P>
        </Flex>
    </StyledVibeCard>
  )
}

export default VibeCard

const StyledVibeCard = styled.div<StyledProps>`
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '100%'};
    grid-row-end: span auto;
    
    .img_container {
        width: 100%;
        height: ${({ noHeight }) => noHeight ? "auto" : "70vh"};
        border-radius: .5rem;
        transition: transform .5s ease-in-out;
        overflow:hidden;

        &:hover {
            transform: scale(.98);
        }

        img {
            width: 100%;
            height: ${({ noHeight }) => noHeight ? "auto" : "100%"};
        }
    }
`;