import React, { useState, useEffect } from 'react';
import Plane from '../../assets/ecommarce/plane.png';
import './../Products/product_sec.css';
import { ProductsData } from './../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react'
function Products_sec() {
  const [productsData, setProductsData] = useState(ProductsData);
  
  const Productfilter = (type) => {
    if (type === 'All') {
      // Reset to the original data when 'All' is clicked
      setProductsData(ProductsData);
    } else {
      // Filter based on the selected type
      setProductsData(ProductsData.filter((item) => item.type === type));
    }
  };
const [parent]=useAutoAnimate()
  return (
    <div className='container main_product_sec pb-5'>
      <div className="product_top m-5 pb-4">
        <div className="product_sec_headingimg">
          <img src={Plane} alt="" />
          <h1 className="product_heading text-center">Our Feature Products</h1>
        </div>
      </div>
      
      <div className="filter_section d-flex">
        <div className="product_header-list">
          <ul >
          <li className="heradr_list" onClick={() => setProductsData(ProductsData)}>All</li>
            <li className="heradr_list" onClick={()=>Productfilter("skin care")}>Skin Care</li>
            <li className="heradr_list" onClick={()=>Productfilter("conditioner")}>Conditioner</li>
            <li className="heradr_list"  onClick={()=>Productfilter("foundation")}>Foundation</li>
          </ul>
        </div>
        <div className="product_list" ref={parent}>
          {productsData.map((product,i) => (
            
            <div className="product_left" key={i}>
              <div className="product_room">
                 <h1 className="product_heading">{product.name}</h1>
                 <span className='product_details'>{product.detail}</span>
                 <span>Prise:{product.price}$</span>
                 <button className='btn btn-outline-info'>Order</button>
              </div>
              <img src={product.img} alt="products" />
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Products_sec;
