import React from 'react'
import css from './NewPage.module.scss'

const Pozika = () => {
    return (
      <>
            <h2 className={css.title}>Сторона фізична особа:</h2>
            <ol>
                <li>
                    <p className={css.text}>
                      Паспорт (звертаємо Вашу увагу на наявність в паспорті вклеєних фотографій при досягненні особою 25-річного або 45-річного віку);  
                   </p>
                </li>
                 <li>
                    <p className={css.text}>
                       Ідентифікаційний номер; 
                   </p>
                </li>
                 <li>
                    <p className={css.text}>
                        Якщо фізична особа в шлюбі – згода подружжя на укладення договору див. Згода одного з подружжя на відчуження або придбання майна.
                   </p>
                </li>
            </ol>
              <h2 className={css.title_second}>Сторона юридична особа:</h2>
            <ol>
                <li>
                    <p className={css.text}>
                     Свідоцтво про державну реєстрацію юридичної особи (Виписка);
                    </p>
                </li>
                <li>
                    <p className={css.text}>
                      Витяг з Державного реєстру юридичних осіб, фізичних осіб-підприємців, виданий не раніше 1 місяця до моменту вчинення нотаріальної дії;
                    </p>
                </li>
                <li>
                    <p className={css.text}>
                     Статут;
                    </p>
                </li>
                <li>
                    <p className={css.text}>
                    Довідка з ЄДРПОУ (видається органами статистики);
                    </p>
                </li>
                <li>
                    <p className={css.text}>
                    Наказ про призначення посадової особи, яка уповноважена за статутом діяти без довіреності;
                    </p>
                </li>
                <li>
                    <p className={css.text}>
                    Якщо від імені юридичної особи діє представник, уповноважений за довіреністю – посвідчена нотаріально довіреність;
                    </p>
                </li>
                <li>
                    <p className={css.text}>
                    Якщо діє від імені юридичної особи керівник філії (відділення) – додатково аналогічний перелік документів по філії (відділенню);
                    </p>
                </li>
                <li>
                    <p className={css.text}>
                     Якщо укладення такого характеру договорів згідно статуту юридичної особи здійснюється зі згоди вищого органу – протокол загальних зборів вищого органу, в якому представнику юридичної особи надано згоду на укладення договору.
                    </p>
                </li>
             </ol>
           
 </>
            )
}

export default Pozika