import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// import "./ItemDetails.css";

const ItemDetails = () => {
  const router = useRouter(); 
  useEffect(() => {
    fetchData();
  }, [router]);

  const { ItemDetails } = router.query;
  console.log( 'Page number');
  // console.log(pageNumber, 'itemdetails')
  // Get ID from URL
  // console.log(pageNumber, 'page number');
  
 
  // const pageInteger = parseInt(pageNumber);
  // console.log(pageInteger, 'hello');

// /${pageNumber}
  const [product, setproduct] = useState([]);

    const fetchData = async () => {
     if (ItemDetails) {
      const response = await fetch(
        `https://fakestoreapi.com/products/${ItemDetails}`)
        const data = await response.json();
       
   
        // setproduct([data]);
        setproduct(data);

     }
        // console.log(response);

        // console.log(data);
  };

 

  return (
    <>
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
      </>
  );
};

export default ItemDetails;
