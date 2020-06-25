import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color:'red' }}
        onClick={onClick}
      />
    );
  }

export default class SliderPict extends Component {
  render() {
    return (
        <div className="w-4/5 mx-auto">
          <Slider
            {...{
              dots: true,
              infinite: true,
              arrows: true,
              lazyLoad: true,
              initialSlide: 2,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
            }}
          >
            <img src="/electronic.jpg" width="100%" />
            <img src="/momnkids.jpg" width="100%" />
            <img src="/healthbeauty.jpg" width="100%" />
          </Slider>
        </div>
    );
  }
}
