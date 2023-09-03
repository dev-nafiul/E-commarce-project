import React from 'react'
import Hero from '../../assets/ecommarce/hero.png';
import {HiShoppingBag} from 'react-icons/hi'
import '../Home/home.css'
function Home() {
  return (
    <div>
      <div className="hero_section container d-flex">

        {/* left side */}
        <div className="left_side col-md-3">
           <div className="l_top">
           <span className="l_header">
            SKIN <br /> PROTECTION <br /> CREAM
            </span>
           </div>
           <div className="l_bottom">
           <span className="lb_header">
           Trendy <br /> Collection
            </span>
            <p className="text_l">
            Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
            </p>
           </div>
        </div>



       {/* Middle_side */}


        <div className="Middle_side col-md-6">
         
         <div className="blue_m"></div>
         
         <div className="m_bottom">
         <img src={Hero} alt="" />
            <div className="h_buttonc">
            < HiShoppingBag className='cart_bag_m'/>
            </div>
         </div>
         
        </div>


      {/* right_side */}


        <div className="right_side col-md-3">
        <div className="r_top">
           <span className="r_header">
           1.5m  <br/> Monthly traffic
            </span>
           </div>
           <div className="r_bottom">
           <span className="r_header">
           100k <br />Happy Customers
            </span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home
