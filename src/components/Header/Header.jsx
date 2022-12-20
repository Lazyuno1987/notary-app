/* eslint-disable jsx-a11y/anchor-is-valid */
import { HashLink } from 'react-router-hash-link';
import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Container/Container'
import { useLocation } from 'react-router-dom'
import Logo from '../../assets/img/logo3.png'

import Media from 'react-media';
import { GiHamburgerMenu } from 'react-icons/gi'


const Header = ({ setActive }) => {
  const location = useLocation();


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
                      <li className={css.list_item}><HashLink className={location.hash==='#main' ? css.link_active : css.link} to="/#main">Головна</HashLink></li>
                      <li className={css.list_item}><HashLink className={location.hash==='#servises' ? css.link_active : css.link} to="/#servises">Послуги</HashLink></li>
                     
                      <li className={css.list_item}><HashLink className={location.hash==='#reviews' ? css.link_active : css.link} to="/#reviews" >Відгуки</HashLink></li>
                      <li className={css.list_item}><HashLink className={location.hash==='#contacts' ? css.link_active : css.link} to="/#contacts">Контакти</HashLink></li>
                    </ul>
                  </nav>)}
               </Media>
                
    </header>
            </Container>
            </section>
  )
}

export default Header