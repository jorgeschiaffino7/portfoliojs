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
    <LeftSection main center>
      <SectionTitle>
        Hi! <br />
        Im Jorge Schiaffino
      </SectionTitle>
      <SectionText>Data Analyst -Software Developer</SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Data Analyst Blog
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
