import React from 'react';

const breakpoint = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

function usePageResponsive() {
  const isWindowClient = typeof window === "object";
  const [windowSize, setWindowSize] = React.useState(
    isWindowClient ? window.innerWidth : undefined
    );
    
  const orientation = typeof window === "object" ? 
  window.innerWidth > window.innerHeight ? 'landscape' : 'potrait'
  : undefined;

  const screenIsAtLeast = (type) => windowSize > breakpoint[type]
  const screenIsAtMost = (type) => windowSize < breakpoint[type]
  

  React.useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //unregister the listerner
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return {size:windowSize, orientation, screenIsAtLeast, screenIsAtMost};
}
export default usePageResponsive;