import React from "react";
import usePageResponsive from "../hooks/usePageResponsive";
import dynamic from "next/dynamic";
import {FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa';

const Carousel = dynamic(
  () => import("@brainhubeu/react-carousel"),
  { ssr: false }
);

function ReactCarousel() {
  const [hover, setHover] = React.useState(false);
  const {
    size,
    orientation,
    screenIsAtLeast,
    screenIsAtMost,
  } = usePageResponsive();

  let carouselConfig = {
    itemWidth: size * 0.7,
    centered: true,
    slidesPerPage: 2,
    arrowRight: hover ? (
      <FaChevronCircleRight
        className="text-xl text-white cursor-pointer absolute z-10"
        style={screenIsAtMost('lg') ? {right: '43px'} : screenIsAtMost('xl') ? {right: '67px'} : {right: '83px'}}
      />
    ) : (
      ""
    ),
    arrowLeft: hover ? (
      <FaChevronCircleLeft
        className="text-xl text-white cursor-pointer absolute z-10"
        style={screenIsAtMost('lg') ? {left: '43px'} : screenIsAtMost('xl') ? {left: '67px'} : {left: '83px'}}
      />
    ) : (
      ""
    ),
  };
  if (screenIsAtMost("sm")) {
    carouselConfig = {};
  }

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="mt-px62 pt-5 px-5 sm:px-10 lg:px-16 xl:px-20 rounded-lg"
    >
      <Carousel
        addArrowClickHandler
        autoPlay={5000}
        animationSpeed={1000}
        infinite
        {...carouselConfig}
      >
        <img src="/promo1.png" className="rounded-lg p-1" />
        <img src="/promo3.png" className="rounded-lg p-1" />
        <img src="/promo4.png" className="rounded-lg p-1" />
      </Carousel>
    </div>
  );
}

export default ReactCarousel;
