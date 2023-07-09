import React, {useState, useEffect} from 'react'
import ItemListContainer from '../components/ItemListContainer'
/*import axios from 'axios'*/
import LoaderComponent from '../components/LoaderComponent';
import {collection, getDocs, getFirestore} from "firebase/firestore"



const HomeStyles = {
  width: "100vw",
  minHeight: "100vh",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}


const Home = () => {

  const [ProductsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  


  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products")
    getDocs(productCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({id : doc.id, ...doc.data() }))
    );
    
    })
    .catch((error) => setError(true) )
    .then(() => setLoading(false))
      

  }, [])
  
  
  
  return (
    <div style={HomeStyles} >
      {loading ? (
        <LoaderComponent/>
      ) : ( 
        <ItemListContainer productsData={ProductsData}/>
      )}
      
    </div>
  )
}

export default Home;