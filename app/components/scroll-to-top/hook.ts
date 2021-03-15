import { useEffect, useState } from "react";
import { IScrollToTop } from "./types";

const useScroll = () => {
  const [scrollState, setScrollState] = useState<IScrollToTop>({
    scrollpos: null,
    visible: false,
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos > 250;

    setScrollState({
      scrollpos: currentScrollPos,
      visible,
    });
  };

  useEffect(() => {
    setScrollState({ ...scrollState, scrollpos: window.pageYOffset });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { visible } = scrollState;

  return { visible, scrollTop };
};

export default useScroll;
