import { useSelector } from 'react-redux';
import Slider from 'react-slick'
import { RootState } from 'state/reducers';
import styled from 'styled-components';
import VibeCard from './VibeCard';

const VibesSlider = () => {

    const vibes = useSelector((state: RootState) => state.vibes.vibes)

    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1
    };
  return (
    <SliderContainer>
        <Slider {...settings}>
            {
                vibes.slice(0, 10).map(({ id, attributes }) => (
                    <VibeCard
                        key={id}
                        attributes={attributes}
                    />
                ))
            }
        </Slider>
    </SliderContainer>
  )
}

export default VibesSlider

const SliderContainer = styled.div`
    width: 100%;
    margin-top: 2.5rem;

    .slick-track {
        display: flex;
        gap: 1.5rem;
    }
`