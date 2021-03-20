import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import { Anchor } from "./styles";

function NavLink({ children, href }) {
  const router = useRouter();
  let isHomePage = router.pathname === "/";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Anchor
      href={href}
      onClick={handleClick}
      isActive={router.pathname === href}
      isHomePage={isHomePage}
    >
      {children}
    </Anchor>
  );
}

export default NavLink;
