import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ProductsCard = ({productData}) => {
    return (
        
<Card style={{width: '20rem', borderColor: '#B58DB6', borderWidth:'5px' }}>
    <Card.Img variant="top" src={productData.images[0]  } />
    <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
        {productData.description}
        </Card.Text>
        <Card.Text>
            {productData.price}
        </Card.Text>
        <Link to={`/item/${productData.id}`} >Ver mas</Link>
    </Card.Body>
    </Card>
    )
}

export default ProductsCard;