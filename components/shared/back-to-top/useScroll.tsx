import { useEffect, useState } from "react";

interface Props {
  scrollpos: number;
}

const useScroll = () => {
  const [scrollState, setScrollState] = useState<Props>({
    scrollpos: 0,
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollState({
      scrollpos: currentScrollPos,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollTop };
};

export default useScroll;
