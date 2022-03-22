import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, gracias por compra`}</h2>  
        <span>tu pedido lleguara en 3 dias</span>
        <div className="Success-map">
          <Map />  
        </div>
      </div>  
    </div>
  );
}

export default Success;