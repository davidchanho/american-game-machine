import { useRouter } from "next/router";
import styled from "styled-components";
import {MouseEvent} from 'react'

interface Props {
  isActive: boolean;
}

export const Anchor = styled.a<Props>`
  margin: 0 5px;
  border-bottom: ${({ isActive }) => (isActive ? "3px solid red" : "")};
  color: ${({ isActive }) => (isActive ? "red" : "")};

  &:hover {
    text-decoration: none;
    border-bottom: 3px solid red;
    color: red;
  }
`;

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
