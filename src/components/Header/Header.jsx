import React from 'react';
import styled from 'styled-components';
import './Header.css';
import CV from '../../assets/cv.pdf';
import ME from '../../assets/me.png';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Header = () => {
  return (
    <MainHeader>
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
          <a href="https://www.linkedin.com">
            <BsLinkedin />
          </a>

          <a href="https://github.com/">
            <BsGithub />
          </a>

          <a href="https://twitter.com/">
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
  padding: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    height: max-content;
  }

  @media screen and (max-width: 600px) {
    height: max-content;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

const CTA = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const Me = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: relative;
  left: calc(50% - 11rem);
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  margin-top: 4rem;
  padding: 5rem 1.5em 1.5rem;
`;

const ScrollDown = styled.a`
  position: absolute;
  right: 1rem;
  bottom: 2rem;
  letter-spacing: 1.5px;
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
  gap: 1rem;
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  @media screen and (max-width: 600px) {
    display: none;
  }

  a {
    font-size: 1.1rem;
  }

  &::after {
    content: '';
    width: 1px;
    height: 2rem;
    background-color: var(--color-primary);
  }
`;
