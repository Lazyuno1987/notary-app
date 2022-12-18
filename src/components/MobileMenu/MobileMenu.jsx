// import { GiHamburgerMenu } from 'react-icons/gi'
import css from './MobileMenu.module.scss';
import {SlClose} from 'react-icons/sl'
import React from 'react'

const MobileMenu = ({active,
setActive}) => {

  return (
    <div className={active ? css.container_active : css.container} onClick={()=>setActive(false)}>
  <i><SlClose className={css.icon} /></i>
      <ul>
        <li className={css.item}><a className={css.link} href='#main'>Головна</a></li>
        <li className={css.item}><a className={css.link} href="#servises">Послуги</a></li>
        <li className={css.item}><a className={css.link} href="#reviews">Відгуки</a></li>
         <li className={css.item}><a className={css.link} href="#contacts">Контакти</a></li>
      </ul>

    </div>
  )
}

export default MobileMenu