import css from './Reviews.module.scss';

import React from 'react'
import { useState, useEffect } from 'react';

import Container from 'components/Container/Container';
import { nanoid } from 'nanoid';
import Modal from '../Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from 'redux/comments/comments-operations';

const Reviews = () => {
  const dispach = useDispatch();
  // const [data, setData] = useState([]);
  const { comments } = useSelector(state => state.comments)
  const [showModal, setShowModal] = useState(false);
const openModal = () => {
    setShowModal(prevState => !prevState)
  }
  const onCloseModal = () => {
    setShowModal(prevState => !prevState)
  }



  useEffect(() => {
   dispach(getComments())
  }, [dispach])


  return (
    <section id='reviews' className={css.comments}>
      <Container>
        <h1 className={css.title}>Відгуки</h1>
      <ul className={css.list}>
{comments?.map(el => (

    <li key={nanoid()} className={css.item}>
          <p className={css.text}>{`${el.name}: "${el.comment}"`}</p>
          
          
    </li>
         
          
)
      )}
      </ul>
      <button className={css.button} onClick={()=>openModal()} type='button'>Залишити коментар</button>
          {showModal && <Modal onClose={onCloseModal} />}
      </Container> 
    </section>
  )
}

export default Reviews
