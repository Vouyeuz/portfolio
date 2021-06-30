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
      <SectionText>Let me show you our purpose in life</SectionText>
      <Button
        onClick={() =>
          (window?.open("https://www.youtube.com/watch?v=VdUhu0SXw60"))
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
