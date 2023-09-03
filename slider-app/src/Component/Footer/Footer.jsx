import React from 'react';
import './../Footer/footer.css';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone , BsPeople} from 'react-icons/bs';
import { AiOutlineInbox } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';

function Footer() {
  return (
    <div>
      <div className="main_footer container ">
        <div className="sub_main">
        <div className="footer_Contact_Us footer_same col-md-3">
          <h2 className="f_heading">Contact Us</h2>
          <div className="icon_list">
            <div className="icon_group">
              <CiLocationOn />
              <span className='F_details'>111 north avenue Orlando, FL 32801</span>
            </div>
            <div className="icon_group">
              <BsTelephone />
              <span className='F_details'>352-306-4415</span>
            </div>
            <div className="icon_group">
              <AiOutlineInbox />
              <span className='F_details'>support@amazon.com</span>
            </div>
          </div>
        </div>
        <div className="footer_Account footer_same col-md-3">
        <h2 className="f_heading">Account</h2>
          <RiAccountCircleLine/> 
          Sign In
        </div>
        <div className="footer_Company footer_same col-md-3">
        <h2 className="f_heading">Company</h2>
          <BsPeople/> 
          About us
        </div>
        <div className="footer_Company footer_same col-md-3">
        <h2 className="f_heading">Resorce</h2>
          <BsPeople/> 
          About us
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;

