import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

const Product = ({id,title,price,description,category,image}) => {
  const [rating]=useState(Math.floor(Math.random() * 5) + 1)
  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4>{title}</h4>
    </div>
  )
}

export default Product
