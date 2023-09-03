import React from 'react'
import Shade from './../../assets/ecommarce/shade.png';
import './../Vitual component/vitual.css'
import ReactCompareImage from 'react-compare-image';
import BeforeImage from './../../assets/ecommarce/before.png'
import AfterImage from './../../assets/ecommarce/after.png'
function Vitual() {
  return (
    <div className='container'>
       <div className="main_vitual">
        <div className="lest_vitual">
            <h2 className="v_heading">VIRTUAL TRY-ON</h2>
            <span className='v_details'>NEVER BUY THE <br /> WRONG SHADE AGAIN!</span>
            <h2 className='v_heading'>Try Now!</h2>
            <img className='V-image' src={Shade} alt="" />
        </div>
        <div className="right_vitual">
            <div className="wapper">
            <ReactCompareImage
             leftImage={BeforeImage}
             rightImage={AfterImage}
            />
            </div>
            
        </div>
       </div>
    </div>
  )
}

export default Vitual
