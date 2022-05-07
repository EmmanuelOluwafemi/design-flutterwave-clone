import { H5, P } from "components/typography/basic.styles"
import styled from "styled-components"

interface componentProps {
    imgUrl: string
    title: string
    desc: string
    color: string
}

type styledProps = {
    color: string
}

const DisciplineCard = ({ imgUrl, title, desc, color }: componentProps) => {
  return (
    <StyledCard color={color}>
        <img src={imgUrl} alt={title} />

        <div className="card_content">
            <H5>{title}</H5>
            <P>{desc}</P>
        </div>
    </StyledCard>
  )
}

export default DisciplineCard

const StyledCard = styled.div<styledProps>`
    width: 100%;
    border-radius: .5rem;
    overflow: hidden;
    background: ${({ color }) => color};

    img {
        width: 100%;
        height: auto;
    }

    .card_content {
        padding: 2.5rem 3rem;
    }
`