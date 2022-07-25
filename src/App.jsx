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
      <h1>This is My Portfolio</h1>
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
