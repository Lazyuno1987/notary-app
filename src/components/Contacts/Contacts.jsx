import css from './Contacts.module.scss';
import { BsInstagram } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { SiViber } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';




import React from 'react'
import Container from 'components/Container/Container';

const Contacts = () => {
  return (
    <section id='contacts' className={css.background}>
          <Container>
        <div className={css.div}>
          <div className={css.work_time}>
            <p className={css.text}> Графік роботи</p>
            <ul className={css.work_time_list}>
              <li className={css.work_item}>Пн-Пт: 09:00-16:00</li>
              <li className={css.work_item}>Сб-Нд: за домовленістю</li>
            </ul>

          </div>
              <ul className={css.list}>
              <li className={css.item}>
                  <a className={css.link} href="tel:+380508498555"><i >
                  <SiViber className={css.icon}/>
                  </i></a>
              </li>
                <li className={css.item}>
                  <a className={css.link} href="tel:+380508498555"><i >
                  <SiTelegram className={css.icon}/>
                  </i></a>
              </li>
                <li className={css.item}>
                  <a className={css.link} href="tel:+380508498555"><i >
                  <BsInstagram className={css.icon}/>
                  </i></a>
              </li>
                <li className={css.item}>
                  <a className={css.link} href="tel:+380508498555"><i >
                  <BsWhatsapp className={css.icon}/>
                  </i></a>
              </li>
          </ul>
          
          <ul className={css.contacts_list}>
              <li className={css.contacts_item}><a className={css.contact_link} href="tel:+380508498555">+38 050 84 98 555</a>
</li>
              <li className={css.contacts_item}> <a className={css.contact_link} href="mailto:Savkonotary@gmail.com">Savkonotary@gmail.com</a>
</li>
               <li className={css.contacts_item}><a className={css.contact_link} target="blank" href="https://goo.gl/maps/ivGut8csCxCMeCR76">Ужгород пл.Шандора Петефі 27/4</a>
</li>
                  </ul>
                  </div>
          </Container>
    </section>
  )
}

export default Contacts
