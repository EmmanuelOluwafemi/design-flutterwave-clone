import styled from "styled-components"
import { H5, P } from "./typography/basic.styles"

import moment from "moment"

import { useReadingTime } from "react-reading-time-estimator";
import { Link } from "react-router-dom";

interface Props {
    id: string,
    attributes: {
        thumbnail: string
        title: string
        createdAt: string
        content: string
    }
}

const StoryCard = ({ attributes, id }: Props) => {
    const { text } = useReadingTime(attributes.content)

  return (
      <Link style={{ textDecoration: "none" }} to={`/stories/${id}`}>
        <StyledStoryCard>
            <div className="imgWrapper">
                <img src={attributes.thumbnail} alt={attributes.title} />
            </div>

            <P
                margin="1rem 0 0 0"
                weight="500"
                textTransform="uppercase"
            >
                Category
            </P>

            <H5 margin="1rem 0 0 0">{attributes.title}</H5>

            <P margin=".75rem 0 0 0">
                {moment(attributes.createdAt).format("MMM Do, YYYY")} - 
                <span 
                    style={{ 
                        textTransform: "uppercase",
                        fontWeight: "500"
                    }}
                >
                    {text}
                </span>
            </P>
        </StyledStoryCard>
      </Link>
  )
}

export default StoryCard

const StyledStoryCard = styled.div`
    width: 100%;
    height: auto;
    
    .imgWrapper {
        width: 100%;
        height: 290px;
        border-radius: .5rem;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 1024px) {
            height: 280px;
        }

        @media (max-width: 1440px) {
            height: 250px;
        }
    }
`