import css from './Main.module.scss';
import Container from 'components/Container/Container';


import React from 'react';

const Main = () => {
  return (
    <section id="main" className={css.main_background}>
      <Container>
        <h1 className={css.title}>ТОЧНІ НОТАРІАЛЬНІ РІШЕННЯ</h1>
        <h3 className={css.title_second}>
          ПРИВАТНИЙ НОТАРІУС
          <span className={css.span}> САВКО ОКСАНА</span>
        </h3>
      </Container>
    </section>
  );
};

export default Main;
