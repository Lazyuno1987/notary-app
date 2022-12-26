import css from './NewPage.module.scss';

import React from 'react';

const Spadchuna = () => {
  return (
    <>
      <h2 className={css.title}>
        Документи, що подаються спадкоємцями для оформлення спадщини:{' '}
      </h2>
      <h3>І. Відкриття спадкової справи:</h3>
      <p className={css.text}>
        - для подачі заяви про прийняття спадщини Вам необхідно особисто
        з'явитися до нотаріуса, при собі мати: паспорт, реєстраційний номер
        облікової картки платника податків, свідоцтво про смерть, довідку про
        причину смерті, довідку ЖЕО з місця проживання померлого, яка
        підтверджує, що померлий по день смерті проживав за конкретною вказаною
        адресою, будинкову книгу (якщо померлий був прописаний в приватному
        будинку), довідка ЖБК (якщо будинок, в якому був прописаний померлий, –
        кооперативний); документ, який підтверджує родинні відносини з померлим
        (свідоцтво про народження, свідоцтво про укладення шлюбу тощо); довідка
        ЖЕО Ф-№3 (про склад зареєстрованих з померлим осіб); заповіт (за
        наявності). Всі документи подаються в оригіналах, нотаріус самостійно
        знімає копії для формування спадкової справи. Додатково, за наявності на
        руках у спадкоємців, нотаріусу пред'являються документи, що
        підтверджують право власності померлого на спадкове майно (свідоцтва про
        право власності на квартиру, договір купівлі-продажу, дарування, ощадні
        книжки тощо);
      </p>
      <p className={css.text}>
        - у разі, якщо з різних причин Ви не маєте можливості зібрати
        перерахований пакет документів, нотаріус має право відкрити спадкову
        справу за заявою спадкоємця при наявності лише його паспорта та
        реєстраційного номера облікової картки платника податків. У подальшому
        вищеперераховані документи збираються спадкоємцем або витребовуються в
        компетентних органах на запит нотаріуса.
      </p>
      <h3>ІІ. Провадження по спадковій справі: </h3>
      <p className={css.text}>
        - якщо Ви подали заяву про прийняття спадщини до нотаріуса до шести
        місяців після смерті спадкодавця, то подальше оформлення Ваших спадкових
        прав вже не обмежується законом конкретними строками;{' '}
      </p>
      <p className={css.text}>
        - після відкриття спадкової справи спадкоємці за запитом нотаріуса
        отримують в компетентних органах (в БТІ, в органах держкомзему тощо)
        документи, необхідні для переоформлення спадкового майна на ім'я
        спадкоємців. Для цього спадкоємці надають нотаріусу документи, що
        підтверджують право власності померлого на спадкове майно (свідоцтво про
        право власності на квартиру, договір купівлі-продажу, дарування, ощадні
        книжки тощо). У разі відсутності на руках у спадкоємців вказаних
        документів, дані документи отримуються на запит нотаріуса;{' '}
      </p>
      <p className={css.text}>
        - важливо звернути Вашу увагу на те, що за виготовлення запитів Ви не
        сплачуєте додаткових коштів, усі ці витрати входять у фіксовану суму,
        яка сплачується при відкритті спадкової справи. Наші нотаріуси
        здійснюють постійний юридичний супровід і консультують Вас при зібранні
        Вами документів необхідних для оформлення Ваших спадкових прав і
        допомагають Вам долати труднощі, які можуть виникнути при отриманні Вами
        документів в державних органах в межах нотаріальної компетенції.{' '}
      </p>
      <h3>ІІІ. Отримання свідоцтва про право на спадщину: </h3>
      <p className={css.text}>
        - після спливу шести місяців після смерті спадкодавця і отримання усіх
        необхідних документів нотаріус має право видати спадкоємцям свідоцтва
        про право на спадщину;
      </p>
      <p className={css.text}>
        - важливо звернути Вашу увагу на те, що за виготовлення запитів Ви не
        сплачуєте додаткових коштів, усі ці витрати входять у фіксовану суму,
        яка сплачується при відкритті спадкової справи. Наші нотаріуси
        здійснюють постійний юридичний супровід і консультують Вас при зібранні
        Вами документів необхідних для оформлення Ваших спадкових прав і
        допомагають Вам долати труднощі, які можуть виникнути при отриманні Вами
        документів в державних органах в межах нотаріальної компетенції.{' '}
      </p>
      <p className={css.text}>
        - нотаріус призначає за попереднім узгодженням з Вами зручний для Вас та
        інших спадкоємців (за наявності) час для видачі свідоцтв про право на
        спадщину;
      </p>
    </>
  );
};

export default Spadchuna;
