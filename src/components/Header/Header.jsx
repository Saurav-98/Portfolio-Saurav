import React from 'react';
import styled from 'styled-components';
import CV from '../../assets/cv.pdf';
import ME from '../../assets/me.png';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Header = () => {
  return (
    <MainHeader id="header">
      <HeaderContainer className="container">
        <h5>Hello I'm</h5>
        <h1>Saurav Kumar Verma</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CTA>
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </CTA>

        <Me>
          <img src={ME} alt="my profile" />
        </Me>
        <ScrollDown href="#contact">Scroll Down</ScrollDown>
        <HeaderSocials>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
        </HeaderSocials>
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  height: 100vh;
  border: 1px solid red;
  margin: 0 auto;
  padding-top: 7rem;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

const CTA = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

const Me = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  border-radius: 12rem 12rem 0 0;

  margin-top: 2rem;
  padding: 5rem 1.5em 1.5rem;
`;

const ScrollDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  font-weight: 300;
  font-size: 0.9rem;
  transform: rotate(90deg);
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const HeaderSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  @media screen and (max-width: 600px) {
    display: none;
  }

  a {
    font-size: 1.2rem;
  }

  &::after {
    content: '';
    width: 1px;
    height: 2rem;
    background-color: var(--color-primary);
  }
`;
