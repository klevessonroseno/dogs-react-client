import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { PASSWORD_LOST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const {
    data,
    error,
    loading,
    request
  } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      await request(url, options);
    }
  }

  return (
    <section className='animeLeft'>
      <Head
        title={'Esqueci a senha'}
        description={`Página para criar uma nova conta no site Dogs.`}
      />
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1', fontWeight: 'bold' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label={'Email / Usuário'}
            name={'login'}
            type={'text'}
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )
      }

      <Error error={error} />
    </section >

  )
}

export default LoginPasswordLost;