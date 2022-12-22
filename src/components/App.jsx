import Header from "./Header/Header";
import MobileMenu from './MobileMenu/MobileMenu';
import { useState } from "react";
import Loyaut from "./Loyaut/Loyaut";
import NewPage from "./NewPage/NewPage";
import { Route, Routes } from "react-router-dom";
import Pozika from "./NewPage/Pozika";
import Spadchuna from './NewPage/Spadchuna'
import Avto from "./NewPage/Avto";
import Orenda from "./NewPage/Orenda";
import PoperednijDohovir from "./NewPage/PoperednijDohovir";
import ShlubDohovir from "./NewPage/ShlubDohovir";
import Daruvanya from "./NewPage/Daruvanya";
import Phone from "./Phone/Phone";

export const App = () => {

  const [menuActive, setMenuActive] = useState(false)
  // const [showModal, setShowModal] = useState(true)
  return (
    <div>
      <Header setActive={setMenuActive} />
   
      <Routes>
        <Route path="/" element={<Loyaut />}/>
        <Route path="servise" element={<NewPage />}>
          <Route path=":pozika" element={<Pozika />} />
          <Route path=":spadchuna" element={<Spadchuna />} />
          <Route path=":avto" element={<Avto />} />
          <Route path=":orenda" element={<Orenda />} />
          <Route path=":poperednijDogovir" element={<PoperednijDohovir />} /> 
          <Route path=":neruchomist" element={<Orenda />} />
          <Route path=":shlub" element={<ShlubDohovir />} />
          <Route path=":daruvanya" element={<Daruvanya />} />
        </Route>
      </Routes>
        <Phone/>
          <MobileMenu active={menuActive } setActive={setMenuActive} />
</div>
  );
};
