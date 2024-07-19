import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import Prime from './../assets/prime.png'

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4>{title}</h4>
      <div className='flex'>
        {Array(rating).fill().map((_, i) => (
          <StarIcon key={i} className='h-5 text-yellow-500' />
        ))}
      </div>
      <p>{description}</p>
      <div>
        <Currency quantity={price} currency='LKR' />
      </div>
      {hasPrime && (
        <div>
          <Image src={Prime} alt='prime' className='w-12' />
          <p>FREE Next-day Delivery</p>
        </div>
      )}

      <button>Add to Basket</button>
    </div>
  )
}

export default Product
