import React, { MouseEventHandler } from "react";

interface Props {
  isActive: boolean;
  handleClick: MouseEventHandler<HTMLAnchorElement>;
  link: string;
}

function NavLink({ isActive, handleClick, link }: Props) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? "active" : ""} text-capitalize`}
        onClick={handleClick}
        href={`/#${link}`}
      >
        {link}
      </a>
    </li>
  );
}

export default NavLink;
