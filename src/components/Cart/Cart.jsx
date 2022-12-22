import css from './Cart.module.scss';
import Carta from '../../assets/img/Screenshot_2.png'
import React from 'react'

const Cart = () => {
  return (
      <section >
         <a href="https://goo.gl/maps/ivGut8csCxCMeCR76" target="blank"><img  className={css.cart} src={Carta} alt="map" /></a> 
    </section>
  )
}

export default Cart