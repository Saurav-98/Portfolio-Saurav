import React from 'react';
import {
  Contacts,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  TestiMonials,
  Skills,
  About,
} from './components';

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <TestiMonials />
        <Contacts />
        <Footer />
      </main>
    </>
  );
};

export default App;
