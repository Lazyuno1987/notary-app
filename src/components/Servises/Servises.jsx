/* eslint-disable jsx-a11y/anchor-is-valid */
import css from './Servises.module.scss';
import Container from 'components/Container/Container';
 import { NavLink } from 'react-router-dom';
import Car from '../../assets/img/property.jpg';
import Debt from '../../assets/img/debt.jpeg';
import Deal from '../../assets/img/договір.jpg';
import Heritage from '../../assets/img/heritage.jpg';
import Photo from '../../assets/img/підписи.jpg';
import Houses from '../../assets/img/нерухомість.jpg';
import Photo2 from '../../assets/img/оренда.jpg';
import Photo3 from '../../assets/img/dogovor-dareniya.jpg'
import React from 'react'

const Servises = () => {
  return (
      <section id='servises' className={css.background}>
          <Container>
              <h1 className={css.title}>Нотаріальні послуги</h1>
              <ul className={css.list}>
                  <li className={css.list_item}>
                      <NavLink className={css.link} to="/servise/:neruchomist">
                          <img className={css.img} src={Photo2} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}> Договір купівлі-продажу</p>
                              
                          </div>
                     </NavLink>
                  </li>
                   <li className={css.list_item}>
                      <NavLink className={css.link} to="/servise/:pozika">
                          <img className={css.img} src={Debt} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}>Договір позики</p>
                              
                          </div>
                     </NavLink>
                  </li>
                   <li className={css.list_item}>
                     <NavLink className={css.link} to="/servise/:poperednijDogovir">
                          <img className={css.img} src={Deal} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}>Попередній договір</p>
                              
                          </div>
                     </NavLink>
                  </li>
                   <li className={css.list_item}>
                        <NavLink className={css.link} to="/servise/:spadchuna">
                          <img className={css.img} src={Heritage} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}>Оформлення спадщини</p>
                              
                          </div>
                     </NavLink>
                  </li>
                   <li className={css.list_item}>
                       <NavLink className={css.link} to="/servise/:shlub">
                          <img className={css.img} src={Photo} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}> Шлюбний договір</p>
                              
                          </div>
                     </NavLink>
                  </li>
                    <li className={css.list_item}>
                       <NavLink className={css.link} to="/servise/:daruvanya">
                          <img className={css.img} src={Photo3} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}>Договір дарування</p>
                              
                          </div>
                     </NavLink>
                  </li>
                    <li className={css.list_item}>
                      <NavLink className={css.link} to="/servise/:orenda">
                          <img className={css.img} src={Houses} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}>Договір оренди</p>
                              
                          </div>
                     </NavLink>
                  </li>
                    <li className={css.list_item}>
                      <NavLink className={css.link} to="/servise/:avto">
                          <img className={css.img} src={Car} alt="img" />
                          <div className={css.div}>
                              <p className={css.title_card}>Відчуження транспортного засобу</p>
                              
                          </div>
                     </NavLink>
                  </li>
              </ul>
              
          </Container>
   </section>
  )
}

export default Servises
