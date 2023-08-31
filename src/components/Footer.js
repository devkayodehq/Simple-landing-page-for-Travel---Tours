import React from 'react'
import { pageLinks, socialMedia } from '../data';

const Footer = () => {
  return (
    <footer className='section footer'>
    <ul className='footer-links'>
    {
        pageLinks.map((link) => {
          return(
            <li key={link.id}>
            <a href={link.href} className='footer-link'> {link.text} </a>
          </li>
          );
        })
       }
    </ul>
    <ul className='footer-icons'>

      {
        socialMedia.map((socialikes)=>{
          return(
            <li key={socialikes.id}>
            <a 
            href={socialikes.href}
             target='_blank' 
             className='footer-icon'
              >
                <li className={socialikes.icon}></li>
              </a>
          </li>
          );
        })
      }
     
      
    </ul>
    <p className='copyright'>
      copyright &copy; Backroads travel tours company
      <span id='date'></span> all rights reserved
    </p>
  </footer>
  );
}

export default Footer