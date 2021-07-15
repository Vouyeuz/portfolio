import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { DiJsBadge } from "react-icons/di";

import {
  CloseMenu,
  ContactDropDown,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  NavProductsIcon,
  SocialIcons,
  Span,
  ToggleMenu,
} from "./HeaderStyles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontWeight: "bolder",
            }}
          >
            <DiJsBadge size="2.3rem" />
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2 isOpen={isOpen}>
        <CloseMenu onClick={() => setIsOpen(false)}>
          <AiOutlineClose size="3rem" />
        </CloseMenu>
        <li>
          <Link href="#projects">
            <NavLink onClick={() => setIsOpen(false)}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink onClick={() => setIsOpen(false)}>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink onClick={() => setIsOpen(false)}>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/Vouyeuz">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.instagram.com/dirgtd/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons
          target="_blank"
          href="https://www.linkedin.com/in/fahrizal-indi-dirgantara-a9b398b4/"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
      <ToggleMenu onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu size="3rem" />
      </ToggleMenu>
    </Container>
  );
};

export default Header;
