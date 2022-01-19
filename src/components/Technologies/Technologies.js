import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="techs" >
      <SectionDivider/>
      <br/>
      <SectionTitle> Technologies </SectionTitle>
      <SectionText>
      I´ve used with a range a technologies in the web development world From Back-end to Front-End
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle> Front-End </ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle> Back-End </ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
    
      </List>
      
  </Section>
);

export default Technologies;
