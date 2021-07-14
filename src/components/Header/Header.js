import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import { DiJsBadge } from "react-icons/di";

import {
  ContactDropDown,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  NavProductsIcon,
  SocialIcons,
  Span,
  ToggleButton,
} from "./HeaderStyles";

const Header = () => (
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
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#enlightenment">
          <NavLink>Experimental Projects</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
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
      <ToggleButton>
        <AiOutlineMenu size="3rem" />
      </ToggleButton>
  </Container>
);

export default Header;
