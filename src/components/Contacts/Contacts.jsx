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
              <li className={css.contacts_item}> <a className={css.contact_link} href="mailto:lazyuno1987@gmail.com">lazyuno1987@gmail.com</a>
</li>
               <li className={css.contacts_item}><a className={css.contact_link} target="blank" href="https://goo.gl/maps/cjNJTc32sBTBmfef8">Ужгород пл.Шандора Петефі</a>
</li>
                  </ul>
                  </div>
          </Container>
    </section>
  )
}

export default Contacts
