// import { GiHamburgerMenu } from 'react-icons/gi'
/* eslint-disable jsx-a11y/anchor-is-valid */
import { HashLink } from 'react-router-hash-link';
import css from './MobileMenu.module.scss';
import {SlClose} from 'react-icons/sl'
import React from 'react'

const MobileMenu = ({active,
setActive}) => {


  
  return (
    <div className={active ? css.container_active : css.container} onClick={()=>setActive(false)}>
  <i><SlClose className={css.icon} /></i>
      <ul>
        <li className={css.item}><HashLink className={css.link} to='/#main'>Головна</HashLink></li>
        <li className={css.item}><HashLink className={css.link} to="/#servises">Послуги</HashLink></li>
        <li className={css.item}><HashLink className={css.link} to="/#reviews">Відгуки</HashLink></li>
         <li className={css.item}><HashLink className={css.link} to="/#contacts">Контакти</HashLink></li>
      </ul>

    </div>
  )
}

export default MobileMenu