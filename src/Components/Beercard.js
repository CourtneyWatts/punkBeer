import React from 'react'
import './beercard.scss'

const Beercard = (props) => {
  return (
    <div className='col-4'>
      <div className='Beercard-container d-flex-col text-center mb-5'>
        <img src={props.img} />
        <div className='Beercard-name'>
          <h4 className=' mt-2'>{props.name}</h4>
        </div>
        <p className='Beercard-abv'>Alc: {props.abv}%</p>
        <p className='Beercard-description'>{props.description.substring(0, 98)}...</p>
      </div>
    </div>
  )
}

export default Beercard
