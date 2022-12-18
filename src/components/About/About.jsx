import css from './About.module.scss'
import Container from 'components/Container/Container'
import { FaRegStar } from "react-icons/fa";
import { BsExclamationCircle } from 'react-icons/bs';
import {MdAssignment} from 'react-icons/md'
// import {
//   FaFacebook,
//   FaInstagramSquare,
//   FaTwitter,
//   FaLinkedin,
// } from 'react-icons/fa';
import React from 'react'

const Servises = () => {
  return (
      <section className={css.background_servises}>
             <Container>
              <ul className={css.list}>
                  <li className={css.list_item}>
                      <i className={css.icon_div}><FaRegStar className={css.icon} /></i>
                      <h4 className={css.title}>Професіоналізм</h4>
                      <p className={css.text}>Професіоналізм, відмінний сервіс та увага до деталей – головні мої переваги.</p>
                  </li>
                  <li className={css.list_item}>
                      <a className={css.link} href="#individual">
                      <i className={css.icon_div}><BsExclamationCircle className={css.icon} /></i>
                      <h4 className={css.title}>Поради нотаріуса</h4>
                      <p className={css.text}>Поради нотаріуса – це корисні і обґрунтовні рекомендації, як юридично правильно вчинити в тій чи іншій життєвій ситуації, щоб захистити свої права, інтереси, щоб зберегти гроші, майно, бізнес.</p>
                   </a>
                  </li>
                   <li className={css.list_item}>
                      
                           <i className={css.icon_div}><MdAssignment className={css.icon} /></i>
                      <h4 className={css.title}>Індивідуальний підхід</h4>
                      <p className={css.text}>Індивідуальний підхід до кожного клієнта є гарантом результату!</p>
                    
                  </li>

                
          </ul>
    </Container>
   </section>
  )
}

export default Servises