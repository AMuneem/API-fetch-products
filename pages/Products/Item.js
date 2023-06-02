import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemContainer from "./ItemContainer";
import { Fascinate_Inline } from "next/font/google";

const Products = () => {
  const [items, setItems] = useState([]);
  const [product, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();

    const getdata = data.map((product) => {
      
      return {
        ...product,
        qty: 1,
        subTotal: product.price

      };
    });

    setItems(getdata);
    // console.log(items, "items");
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    const sumWithInitial = product.reduce((accumulator, currentValue) => { return accumulator + currentValue.subTotal },0);
      setTotal(sumWithInitial)

    console.log(sumWithInitial);
  },
    [product])



  const incrementCount = (index) => {
    if (index >= 0) {
      product[index].qty++;
      product[index].subTotal = product
      
      [index].qty * product[index].price;
      setProducts([...product]);

    }
  };

  const decrementCount = (index) => {
    if (product[index].qty > 1) {
      product[index].qty--;
      product[index].subTotal =product[index].qty * product[index].price ;
      setProducts([...product]);
      
    }
  };

  const cartHandler = (productId) => {
    // alert('hello');
    // console.log(productId);

    // const productPrice = items;

    const findProducts = items.find(
      (allProducts) => allProducts.id === productId
    );

    if (!product.includes(findProducts)) {
      setProducts([...product, findProducts]);
    } else {
      return false;
    }
  };

  const deleteCount = (index) => {
    // const updatedItems = [...items];
    product.splice(index, 1);
    setProducts([...product]);
  };





  // let getTotals;
  // let newArr;
  // if (product.length > 0) {
  //    getTotals = product.map((item => {
  //     return ( item.qty * item.price.toFixed(2));
  //    })) 
     
        
  // if (getTotals?.length > 0) {
  //   console.log(getTotals,"getTotalsgetTotalsgetTotals")
  //   for (let i = 0; i < getTotals.length; i++) {

  //     for (let j = i + 1; j < getTotals.length; j++) {

  //       if (getTotals[i + 1]) {
             
  //         let data = getTotals[i] + getTotals[j];
  //         newArr = data;fff
  //         break;
  //         }  else {
  //           newArr = getTotals[i];
  //              }
  //     }
  //     i++;
      
  //   }
  // }
    
  //   }
 
  
  // console.log(newArr, "newArr");


  return (
    <div className='product_page_wrapper'>
      <div className='wrapper_cart_count'>
        {/* <div className='cart_counter'>{cartCount}</div> */}
      </div>

      <div className='main_wrapper pt-5'>
        <div className='item_wrapper'>
          {items.map((allProducts) => (
            <div className='itemssss' key={allProducts.id}>
              <div className='warpperApiData'>
                <Link href={`${allProducts.id}`}>
                  <div className='apiImage'>
                    <img
                    className='img-fluid'
                    src={allProducts.image}
                    alt='Logo'
                  />
                  </div>

                  <div className='apiCategory '>
                    <h4>{allProducts.category}</h4>
                  </div>
                </Link>
                <div className='apiDescription'>
                  <p>{allProducts.description}</p>
                </div>
                <div className='apiPrice'>
                  <p>$ {allProducts.price}</p>
                </div>
                <div className='atc_btn'>
                  <button onClick={() => cartHandler(allProducts.id)}>
                    Add to Cart
                  </button>
                  <br />
                  {/* <button onClick={incrementCount}>PLUS</button> <br></br>
                  <button onClick={decrementCount}>Minus</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='cart_total_wrapper'>
          <div className='bulk_wrapper animate'>
            <div>
              <h6>Bulk Summary</h6>
            </div>
            <div>items </div>
          </div>
          {product.map((valueProduct, i) => (
            <div className='totalCartWrapper' key={valueProduct.id}>
              <div className='single_product_wrapper'>
                <div className='single_product_inner'>
                  <div>
                    <h5>
                       {valueProduct.category}
                    </h5>
                  </div>
                  <div>
                    <p> {valueProduct.price} </p>
                    <p>
                      $ {(valueProduct.subTotal).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div className='plus_minus_wrapper'>
                <div className='minus' onClick={() => decrementCount(i)}>
                  -
                </div>
                {/* {<input type='text' key={product} className="animate" readOnly value={valueProduct.qty} />} */}
                <div key={items} className="animate">{ valueProduct.qty}</div>
                <div className='plus' onClick={() => incrementCount(i, valueProduct, valueProduct.price, valueProduct.qty)}>
                  +
                </div>
                <div
                  className=''
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => deleteCount(i)}>
                  remove
                </div>
              </div>
            </div>
          ))}
          <div className='total_price'>
            <div>
              <h5>Total Price</h5>
            </div>
            <div>
              
              {/* <p>${newArr?.toFixed(2) || "00.00" } </p> */}
              <p>$ {total.toFixed(2)} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
