import styled from "styled-components"

const EventCard = () => {
  return (
    <StyledCard>
        <img 
            src="https://design.flutterwave.com/_nuxt/img/figma-event.4c60e67.png" 
            alt="BUSINESS AND ARTBOARDS EP 1" loading="lazy" 
        />

        <div className="overlay"></div>
    </StyledCard>
  )
}

export default EventCard

const StyledCard = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 2rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);

        display: flex;
        align-items: center;
        justify-content: center;
    }
`