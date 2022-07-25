import React from 'react';
import './About.css';
import styled from 'styled-components';
import ME from '../../assets/me-about.jpg';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <Container className="container">
        <AboutMe>
          <div>
            <img src={ME} alt="About Profile" />
          </div>
        </AboutMe>

        <AboutContent>
          <Cards>
            <div>
              <FaAward className="about-icons" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </div>

            <div>
              <FiUsers className="about-icons" />
              <h5>Clients</h5>
              <small>100+ Wordwide</small>
            </div>

            <div>
              <AiOutlineFundProjectionScreen className="about-icons" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </Cards>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            dolore nulla dolores, nesciunt natus nemo harum laudantium nam vel
            facilis, beatae in! Delectus, corrupti? Fuga, in. Ipsa enim
            molestias magnam.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </AboutContent>
      </Container>
    </section>
  );
};

export default About;

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 0 auto;
  }

  img {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(6deg);
    transition: var(--transition);

    &:hover {
      transform: rotate(0deg);
    }
  }
`;
const AboutContent = styled.div`
  p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
  }
  @media screen and (max-width: 1024px) {
    p {
      margin: 1.6rem auto;
      width: 600px;
      text-align: center;
    }
    a {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  div {
    background-color: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: var(--transition);

    &:hover {
      background-color: transparent;
      border-color: var(--color-primary-variant);
    }

    .about-icons {
      color: var(--color-primary);
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    h5 {
      font-size: 0.9rem;
    }
    small {
      font-size: 0.7rem;
      color: var(--color-light);
    }
  }
`;
