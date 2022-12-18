import Header from "./Header/Header";
import Main from './Main/Main'
import About from "./About/About";
import Servises from "./Servises/Servises";
import Individual from "./Individual/Individual";
import MobileMenu from './MobileMenu/MobileMenu';
import Contacts from "./Contacts/Contacts";
import Cart from "./Cart/Cart";
import Reviews from './Reviews/Reviews'
import { useState } from "react";


export const App = () => {

  const [menuActive, setMenuActive] = useState(false)
  return (
    <div>
      <Header setActive={setMenuActive} />
      <Main />
      <About />
      <Servises />
      <Individual />
      <Reviews/>
      <Cart/>
      <Contacts/>
          <MobileMenu active={menuActive } setActive={setMenuActive} />
</div>
  );
};
