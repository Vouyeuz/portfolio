import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiTwotoneHeart,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:085157607057">+62-851-5760-7057</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:fahrizal.indi@gmail.com">
            fahrizal.indi@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Slogan>
              Craft with{" "}
              <AiTwotoneHeart style={{ marginBottom: "-5px" }} size="2rem" /> by
              Fahrizal ID
            </Slogan>
          </div>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
