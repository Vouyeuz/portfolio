import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

// also can be added to constants component
const data = [
  { number: 0, text: "Projects" },
  { number: 1, text: "Open Source Projects" },
  { number: 3, text: "Experimental Projects" },
  { number: '~1', text: "Years of Experience" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My Humble Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
