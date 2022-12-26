import css from './Main.module.scss';
import Container from 'components/Container/Container';


import React from 'react';

const Main = () => {
  return (
    <section id="main" className={css.main_background}>
      <Container>
        <h1 className={css.title}>ПРИВАТНИЙ НОТАРІУС</h1>
        
        <h1 className={css.title}>ОКСАНА ВАСИЛІВНА САВКО</h1>
        
      </Container>
    </section>
  );
};

export default Main;
