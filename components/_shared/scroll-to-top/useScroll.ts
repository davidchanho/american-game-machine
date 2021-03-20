import { useEffect, useState } from "react";

interface Props {
  scrollpos: number;
  hidden: boolean;
}

const useScroll = () => {
  const [scrollState, setScrollState] = useState<Props>({
    scrollpos: 0,
    hidden: false,
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const hidden = currentScrollPos > 250;

    setScrollState({
      scrollpos: currentScrollPos,
      hidden,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { hidden } = scrollState;

  return { hidden, scrollTop };
};

export default useScroll;
