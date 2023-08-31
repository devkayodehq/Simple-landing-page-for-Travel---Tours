import React from 'react'
import Title from './Title';
import { services } from '../data';

const Services = () => {
  return (
    <section className='section services' id='services'>
    <Title title='Our' subTitle='Services' />

    <div className='section-center services-center'>


    {
        services.map((serverlist) => {
          return(
            <article className='service'>
            <span className='service-icon'>
             
             <i className={serverlist.icon}></i>
              </span>
            <div className='service-info'>
              <h4 className='service-title'>{serverlist.title}</h4>
              <p className='service-text'>  
              {serverlist.text}
              </p>
            </div>
          </article>
          );
        })
       }



     
    </div>
  </section>
  )
}

export default Services;