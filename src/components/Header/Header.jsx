/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Container/Container'

import Logo from '../../assets/img/logo3.png'
// import MobileMenu from 'components/MobileMenu/MobileMenu';
import Media from 'react-media';
import { GiHamburgerMenu } from 'react-icons/gi'


const Header = ({setActive}) => {
    return (
      <section className={css.header_background}>
        <Container  >
            <header className={css.header}>
           <a href="#main"><img className={css.logo} src={Logo} alt="logo" /></a>
                <Media queries={{ mobile: { maxWidth: 767 } }}>
          {matches =>
                matches.mobile && <i>{< GiHamburgerMenu   onClick={()=>setActive(true)} className={css.logo_menu} />}</i>}
                 </Media>
             <Media queries={{ table: { minWidth: 768 } }}>
              {matches =>
                matches.table && (
                  <nav>
                    <ul className={css.header_list}>
                      <li className={css.list_item}><a className={css.link} href="#main">Головна</a></li>
                      <li className={css.list_item}><a className={css.link} href="#servises">Послуги</a></li>
                     
                      <li className={css.list_item}><a className={css.link} href="#reviews">Відгуки</a></li>
                      <li className={css.list_item}><a className={css.link} href="#contacts">Контакти</a></li>
                    </ul>
                  </nav>)}
               </Media>
                
    </header>
            </Container>
            </section>
  )
}

export default Header