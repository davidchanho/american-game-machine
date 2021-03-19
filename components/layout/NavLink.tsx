import { useRouter } from "next/router";
import { MouseEvent } from "react";
import styled from "styled-components";
import { primary } from "../../utils";

interface Props {
  isActive: boolean;
}

export const Anchor = styled.a<Props>`
  margin: 0 5px;

  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${primary[100]}` : ""};
  color: ${({ isActive }) => (isActive ? primary[100] : "")};

  &:hover {
    text-decoration: none;
    border-bottom: 3px solid ${primary[100]};
    color: ${primary[100]};
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