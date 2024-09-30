import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'

const FoodInfo = () => {
    const {foodInfo}=useContext(FoodContext)

  return (
    <div className='w-1/2 absolute z-50 h-full top-0 flex flex-col justify-end z-[-1]'>
      <div className='p-16  flex flex-col justify-around items-start'>
            <h3 className={`text-4xl font-semibold mb-3`} style={{color:foodInfo.theme}}>${foodInfo.price}</h3>
            <h2 className='text-3xl font-semibold mb-3 pr-28' >{foodInfo.name}</h2>
            <p className='mb-3' >{foodInfo.description}</p>
            <button className={`border py-3 px-10 rounded-full font-bold`} style={{backgroundColor:foodInfo.theme}}>Order Now</button>
      </div>
    </div>
  )
}

export default FoodInfo
