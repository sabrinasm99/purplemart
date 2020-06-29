import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

function Keen(props) {
    const [pause, setPause] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    }
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, props.timer || 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

    return (
        <>
          <div 
          onMouseEnter={() => {
              setHover(true);
          }}
          onMouseLeave={() => {
              setHover(false);
          }} 
          
          className={`navigation-wrapper ${props.className ? props.className : ''}`}>
            <div ref={sliderRef} className={`keen-slider h-full`}>
              {props.children}
              </div>
            {slider && (
              <>
                <ArrowLeft
                  hover={hover}
                  onClick={e => e.stopPropagation() || slider.prev()}
                  disabled={currentSlide === 0}
                />
    
                <ArrowRight
                  hover={hover}
                  onClick={e => e.stopPropagation() || slider.next()}
                  disabled={currentSlide === slider.details().size - 1}
                />
              </>
            )}
          </div>
          {slider &&  (
            <div className="dots">
              {[...Array(slider.details().size).keys()].map(idx => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      slider.moveToSlideRelative(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  />
                );
              })}
            </div>
          )}
        </>
      );
}


function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    if (!props.hover) return null;
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    );
  }
  
  function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    if (!props.hover) return null;
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    );
  }

export default Keen

