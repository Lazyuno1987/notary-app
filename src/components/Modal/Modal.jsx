import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addComment } from 'redux/comments/comments-operations';
// import * as Yup from 'yup';

// const validate = Yup.object().shape({
//     name: Yup.string()
//         .min(1)
//         .max(12, 'Name must contain 12 characters or less')
//         .required('Name is required'),
//   comment: Yup.string()
//     .min(6, 'Password must contain at least 6 characters')
//     .required('Comment is required'),
// });

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  const dispach = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      comment: '',
      },
   
    onSubmit: values => {
      dispach(addComment(values))
        // axios.post("https://super-ruby-miniskirt.cyclic.app/api/reviews", values)

        onClose()
       
    },
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div onClick={handleBackdropClick} className={css.backdrop}>
      <div className={css.content}>
        <form onSubmit={formik.handleSubmit} className={css.form}>
          <label className={css.label} htmlFor="name">
            Ім'я
          </label>
          <input
            onChange={formik.handleChange}
                      value={formik.values.name}
          //              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
            className={css.input}
            type="name"
            id="name"
          />
          <label className={css.label} htmlFor="comment">
            Відгук
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.comment}
            className={css.input}
                      type="comment"
                      required
            id="comment"
          />
          <button onClick={() => onClose()}>Закрити</button>
          <button type="submit">Відправити</button>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
