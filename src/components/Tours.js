import React from 'react'
import Title from './Title';
import { featuredTours } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>

<Title title='featured' subTitle='tours' /> 


    <div className='section-center featured-center'>
{
  featuredTours.map((tourList) => {
    return(

      <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={tourList.img} className='tour-img' alt='' />
        <p className='tour-date'>{tourList.date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{tourList.title}</h4>
        </div>
        <p>
          {tourList.text}
        </p>
        <div className='tour-footer'>
          <p>
            <span><i className={tourList.icon}></i></span> {tourList.conutry}
          </p>
          <p>{tourList.days}</p>
          <p>{tourList.price}</p>
        </div>
      </div>
    </article>

    );
  })
}
    

    </div>
  </section>
  )
}

export default Tours