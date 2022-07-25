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
} from './components';

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Nav />
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
