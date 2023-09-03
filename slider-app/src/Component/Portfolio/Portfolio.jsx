import React, { useState } from 'react';
import '../Portfolio/portfolio.css';
import Menu from '../../../Data.jsx';

function Portfolio() {
  const [items, setItems] = useState(Menu);
  
  const filterItem = (clg) => {
    const updatedItems = Menu.filter((cateEle) => cateEle.category === clg);
    setItems(updatedItems);
  }

  return (
    <div>
      <h1 className='text-center mt-5'>Order your Favorite Dish</h1>
      <hr />
      <div className="filter_button d-flex justify-content-center m-2">
        <button className='btn btn-outline-info' onClick={() => setItems(Menu)}>All</button>
        <button className='btn btn-outline-info' onClick={() => filterItem('breakfast')}>Breakfast</button>
        <button className='btn btn-outline-info' onClick={() => filterItem('lunch')}>Lunch</button>
        <button className='btn btn-outline-info' onClick={() => filterItem('evening')}>Evening</button>
        <button className='btn btn-outline-info' onClick={() => filterItem('dinnar')}>Dinner</button>
      </div>

      <div className="food_item d-flex container">
        {items.map(({ id, name, image, prise, description }) => (
          <div key={id} className="food_card d-flex">
            <img className='food_img' src={image} alt="" />
            <div className="right_side_item">
              <h1>{name}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="prise">
                <h2>{prise}</h2>
                <button className='btn btn-outline-success'>Order Now</button>
              </div>
              <span>{description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
