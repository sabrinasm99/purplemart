import React from "react";
import usePageResponsive from "../hooks/usePageResponsive";
import dynamic from "next/dynamic";

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
    itemWidth: size * 0.8,
    centered: true,
    slidesPerPage: 2,
    arrowRight: hover ? (
      <i
        className="fas fa-chevron-circle-right text-xl text-white cursor-pointer absolute z-10"
        style={{ right: "25px" }}
      ></i>
    ) : (
      ""
    ),
    arrowLeft: hover ? (
      <i
        className="fas fa-chevron-circle-left text-xl text-white cursor-pointer absolute z-10"
        style={{ left: "25px" }}
      ></i>
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
      className="mt-px62 pt-5 px-5 rounded-lg"
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
