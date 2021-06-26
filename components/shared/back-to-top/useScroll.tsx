import { useEffect, useState } from "react";

interface Props {
  scrollpos: number;
  visible: boolean;
}

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const useScroll = () => {
  const [scrollState, setScrollState] = useState<Props>({
    scrollpos: 0,
    visible: false,
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos > 1000;

    setScrollState({
      scrollpos: currentScrollPos,
      visible,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { visible: scrollState.visible, scrollTop };
};

export default useScroll;
