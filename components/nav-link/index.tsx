import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import { Anchor } from "./styles";

function NavLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Anchor
      href={href}
      onClick={handleClick}
      isActive={router.pathname === href}
    >
      {children}
    </Anchor>
  );
}

export default NavLink;
