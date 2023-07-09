import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';

const ProductsCard = ({productData}) => {

const BuyProducts = (productData) => {
    console.log(productData)
    
}


    return (
        
<Card style={{ borderColor: '#B58DB6', borderWidth:'5px', fontSize: "15px",width: "22rem",
        height: "80%", display: "flex", flexDirection: "column",}}>
    <Card.Img  variant="top" src={productData.image  } />
    <Card.Body >
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
        {productData.description}
        </Card.Text>
        <Card.Text>
            {productData.price}
        </Card.Text>
        <Link to={`/item/${productData.id}`} >Ver mas</Link>
        
        <CartButtons/>
    </Card.Body>
    </Card>
    )
}

export default ProductsCard;