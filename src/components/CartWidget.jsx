import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
    const [count, ] = useContext(CartContext)
return (
    <div>
        
        <FontAwesomeIcon icon={faCartShopping} style={{color: "black",}} />
        <span>{count}</span>
    </div>
)
};

export default CartWidget