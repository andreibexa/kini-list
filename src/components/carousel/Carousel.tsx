// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide } from '@splidejs/react-splide';
import CarouselTitle from './CarouselTitle';
import CarouselWrapper from './CarouselWrapper';

const options = {
  perPage: 6,
  perMove: 6,
  breakpoints: {
    2400: { perPage: 6, perMove: 6 },
    1378: { perPage: 6, perMove: 6 },
    998: { perPage: 4, perMove: 4 },
    625: { perPage: 3, perMove: 3 },
    330: { perPage: 2, perMove: 2 },
    0: { perPage: 1.5, perMove: 1.5 },
  },
  lazyLoad: 'nearby' as const,
  type: 'slide',
  focus: 0,
  rewind: true,
  gap: '.5em',
  arrows: true,
  updateOnMove: false,
  pagination: false,
};

const toggleLeftArrow = (index = 0) => {
  const leftArrowCollection: HTMLCollectionOf<Element> = document.getElementsByClassName(
    'splide__arrow splide__arrow--prev',
  );

  const leftArrow = leftArrowCollection[0];
  if (leftArrow instanceof HTMLElement) {
    leftArrow.style.display = index === 0 ? 'none' : 'block';
  }
};

type Props = {
  carouselTitle: string;
  children: JSX.Element;
};

export default function Carousel({ carouselTitle, children }: Props) {
  return (
    <CarouselWrapper>
      <CarouselTitle carouselTitle={carouselTitle} />
      <Splide
        options={options}
        onMove={(_splide, index) => {
          toggleLeftArrow(index);
        }}
        onMounted={() => {
          toggleLeftArrow();
        }}
      >
        {children}
      </Splide>
    </CarouselWrapper>
  );
}
