import Header from "./Header/Header";
import MobileMenu from './MobileMenu/MobileMenu';
import { useState } from "react";
import Loyaut from "./Loyaut/Loyaut";
import NewPage from "./NewPage/NewPage";
import { Route, Routes } from "react-router-dom";



export const App = () => {

  const [menuActive, setMenuActive] = useState(false)
  // const [showModal, setShowModal] = useState(true)
  return (
    <div>
      <Header setActive={setMenuActive} />
   
      <Routes>
        <Route path="/" element={<Loyaut />}/>
        <Route path="servise" element={<NewPage />} />
      </Routes>
      
          {/* <Modal active={showModal } setActive={setShowModal}/> */}
          <MobileMenu active={menuActive } setActive={setMenuActive} />
</div>
  );
};
