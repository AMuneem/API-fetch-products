import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// import "./ItemDetails.css";

const ItemDetails = () => {
    const router = useRouter(); 
    const {ItemDetails: pageNumber} = router.query;
  // Get ID from URL
  // console.log(pageNumber, 'page number');
  
 
  const pageInteger = parseInt(pageNumber);
  console.log(router);


  const [product, setproduct] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
            `https://fakestoreapi.com/products/${pageInteger}`
        );
        // console.log(response);
        const data = await response.json();
       
   
        // setproduct([data]);
        setproduct(data);
        // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='warpperApiDataa'>
      <div className='apiImage'>
        <img className='img-fluid' src={product.image} alt='Logo' />
      </div>
      <div className='apiCategory'>
        <h4>{product.category}</h4>
      </div>

      <div className='apiDescription'>
        <p>{product.description}</p>
      </div>

      <div className='apiPrice'>
        <p>$ {product.price}</p>
      </div>
      {/* </div>
      </div>
    </div> */}
    </div>
  );
};

export default ItemDetails;
