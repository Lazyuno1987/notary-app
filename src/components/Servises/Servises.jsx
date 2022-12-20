/* eslint-disable jsx-a11y/anchor-is-valid */
import css from './Servises.module.scss';
import Container from 'components/Container/Container';
 import { NavLink } from 'react-router-dom';
import Property from '../../assets/img/нерухомість.jpg';
import Car from '../../assets/img/property.jpg';
import Debt from '../../assets/img/debt.jpeg';
import Deal from '../../assets/img/договір.jpg';
import Heritage from '../../assets/img/heritage.jpg';
import Photo from '../../assets/img/підписи.jpg';
import Houses from '../../assets/img/нерухомість.jpg';
import Photo2 from '../../assets/img/оренда.jpg'
import React from 'react'

const Servises = () => {
  return (
      <section id='servises' className={css.background}>
          <Container>
              <h1 className={css.title}>Нотаріальні послуги</h1>
              <ul className={css.list}>
                  <li className={css.list_item}>
                      <NavLink className={css.link} to="/servise">
                          <img className={css.img} src={Property} alt="phot" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Відчуження нерухомого майна</h3>
                              
                          </div>
                     </NavLink>
                  </li>
                   <li className={css.list_item}>
                      <a className={css.link} href="#">
                          <img className={css.img} src={Debt} alt="" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Договір позики</h3>
                              
                          </div>
                     </a>
                  </li>
                   <li className={css.list_item}>
                      <a className={css.link} href="#">
                          <img className={css.img} src={Deal} alt="" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Попередній договір</h3>
                              
                          </div>
                     </a>
                  </li>
                   <li className={css.list_item}>
                      <a className={css.link} href="#">
                          <img className={css.img} src={Heritage} alt="" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Оформлення спадщини</h3>
                              
                          </div>
                     </a>
                  </li>
                   <li className={css.list_item}>
                      <a className={css.link} href="#">
                          <img className={css.img} src={Photo} alt="" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Підписи на документах</h3>
                              
                          </div>
                     </a>
                  </li>
                    <li className={css.list_item}>
                      <a className={css.link} href="#">
                          <img className={css.img} src={Photo2} alt="" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Оренда нерухомого майна</h3>
                              
                          </div>
                     </a>
                  </li>
                    <li className={css.list_item}>
                      <a className={css.link} href="#">
                          <img className={css.img} src={Houses} alt="" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Договір застави, іпотеки</h3>
                              
                          </div>
                     </a>
                  </li>
                    <li className={css.list_item}>
                      <a className={css.link} href="#">
                          <img className={css.img} src={Car} alt="" />
                          <div className={css.div}>
                              <h3 className={css.title_card}>Відчуження авто</h3>
                              
                          </div>
                     </a>
                  </li>
              </ul>
              
          </Container>
   </section>
  )
}

export default Servises
