import React from 'react'
import css from './Phone.module.scss'
import { FaPhone } from 'react-icons/fa'
import Container from 'components/Container/Container'
const Phone = () => {
  return (
     
          <Container>
       <a className={css.link} href="tel:+380508498555"><i >
                  <FaPhone className={css.icon}/>
              </i></a>
            </Container>

  )
}

export default Phone
