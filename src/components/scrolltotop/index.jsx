// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // top-left corner
  }, [pathname]); // jab bhi route change hoga, scroll reset hoga

  return null;
};

export default ScrollToTop;
