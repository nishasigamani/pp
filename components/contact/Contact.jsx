import React from 'react'
import "./contact.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import {  useRef } from "react";

const Contact = () =>
 {
  //   const formRef = useRef();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  return (
    <div className='c'>
       <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">For Further info,Contact </h1>
          <div className="c-info">
            <div className="c-info-item">
              <CallIcon className='c-icon'/>
               +1400-0909-08
               <div/>
               <div className='c-info-item'>
               <EmailIcon className='c-icon'/>
               nish123@mail.com
               </div>
               <div className='c-info-item'>
               <LocationOnIcon className='c-icon'/>
               10th cross street,gandhipuram,coimbatore
               </div>
            </div>
          </div>
          <div className='c-right'>
            <p className='c-desc'>
                <b>
                    SEND A MAIL              
                   </b>
            </p>
          <form >
          <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <div className="button">
            <button>Send Message</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact