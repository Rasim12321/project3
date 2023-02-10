import { FC, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

const SuccessPage:FC = () => {
    const navigate = useNavigate()
    const {lastName, name} = useTypedSelector(state => state.user.users)
    const  cart = useTypedSelector(state => state.cart)
    let total:number = 0
    cart.map((good) => total += good.price*good.count)
    console.log(cart, name)

  return (
    <>

      <Alert variant="black bg-aliceblue ">
      {name == null ?
        <>
          <Alert.Heading className='text-center fs-2'>Заполните форму!</Alert.Heading>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => (navigate('/form'))} variant="outline-dark">
              Перейти к форме
            </Button>
          </div>
        </> :
        <>
          <Alert.Heading className='text-center fs-2'>Уважаемый {lastName} {name}!</Alert.Heading>
          <p className='text-center fs-4'>
              Ваш заказ на сумму {total} принят!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => (navigate('/'))} variant="outline-dark">
              Вернуться в магазин
            </Button>
          </div>
        </>
      }
      </Alert>
    </>
  );
}


export default SuccessPage

