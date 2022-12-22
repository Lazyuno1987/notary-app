import Container from 'components/Container/Container'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Avto from './Avto'
import Daruvanya from './Daruvanya'
import Neruhomist from './Neruhomist'
import css from './NewPage.module.scss'
import Orenda from './Orenda'
import PoperednijDohovir from './PoperednijDohovir'
import Pozika from './Pozika'
import ShlubDohovir from './ShlubDohovir'
import Spadchuna from './Spadchuna'



const NewPage = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className={css.background}>
      <Container>
        {location.pathname==="/servise/:pozika" &&  <Pozika />}
         {location.pathname==="/servise/:spadchuna" &&  <Spadchuna/>}
        {location.pathname === "/servise/:avto" && <Avto />}
        {location.pathname === "/servise/:orenda" && <Orenda />}
        {location.pathname === "/servise/:poperednijDogovir" && <PoperednijDohovir />}
        {location.pathname === "/servise/:neruchomist" && <Neruhomist />}
        {location.pathname === "/servise/:shlub" && <ShlubDohovir />}
        {location.pathname === "/servise/:daruvanya" && <Daruvanya />}
          </Container>
    </div>
  )
}

export default NewPage
