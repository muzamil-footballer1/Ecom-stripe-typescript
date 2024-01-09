'use client'

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

export default function ProductRate({ rate, count }) {
  return (
    <div className="flex">
      <Rating className='relative left-[-4px]' style={{ maxWidth: 80 }} value={rate} readOnly /> {count} reviews
    </div>
  )
}
