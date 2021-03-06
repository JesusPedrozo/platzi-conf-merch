import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = ({}) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const navigate = useNavigate();

  const paypalOptions = {
    clientId: 'AdPdk9WM5G2sBZryWTNuGafgdiQFUSshZp3erASI7k2xpFNv6FtbGHdDmw2gJ8Ku2qHY0fb7-XipeLSl',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success', { replace: true });
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;