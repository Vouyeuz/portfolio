import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Welcome To <br />
        My Portfolio!
      </SectionTitle>
      <SectionText></SectionText>
      <Button
        onClick={() =>
          (window?.open("https://www.youtube.com/user/khalidbasalamah"))
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
