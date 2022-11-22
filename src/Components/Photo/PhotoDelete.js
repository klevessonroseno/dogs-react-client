import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';
import { useNavigate } from 'react-router-dom';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm('Você tem certeza de que deseja deletar esta foto?');

    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) navigate('/');
    }
  }

  return (
    <>
      {
        loading ? (
          <button
            disabled
            className={styles.delete}
          >
            Deletando
          </button>
        ) : (
          <button
            onClick={handleClick}
            className={styles.delete}
          >
            Deletar
          </button>
        )
      }
    </>
  )
}

export default PhotoDelete;