import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          
          <LinkItem href='tel: +54-3764-543198'>+54-3764-543198</LinkItem>
        
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          
          <LinkItem href='mailto:jorgeschiaffino7@gmail.com'>jorgeschiaffino7@gmail.com</LinkItem>
        
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Enthusiasm and Innovation </Slogan>
        </CompanyContainer>
          <SocialContainer>
              <SocialIcons href="https://github.com/jorgeschiaffino7">
              <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://linkedin.com/in/jorge-schiaffino-8066a2216">
              <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://twitter.com/jorgeantonioarg">
              <AiFillTwitterCircle size="3rem" />
              </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
