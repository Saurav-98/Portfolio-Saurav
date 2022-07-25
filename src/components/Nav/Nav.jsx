import React, { useState } from 'react';
import './Nav.css';
import styled from 'styled-components';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDots } from 'react-icons/bi';

const Nav = () => {
  const [activeNow, setActiveNow] = useState('#');

  return (
    <NavContainer>
      <a
        href="#header"
        onClick={() => setActiveNow('#header')}
        className={activeNow === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNow('#about')}
        className={activeNow === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNow('#experience')}
        className={activeNow === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNow('#skills')}
        className={activeNow === '#skills' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNow('#contact')}
        className={activeNow === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDots />
      </a>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  backdrop-filter: blur(15px);

  a {
    padding: 0.8rem;
    display: flex;
    border-radius: 50%;
    background-color: transparent;
    color: var(--color-light);
    font-size: 1.2rem;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .active {
    background-color: var(--color-bg);
    color: var(--color-white);
  }
`;
