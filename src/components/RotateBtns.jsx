import React, { useContext } from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FoodContext } from '../context/FoodContext';


const RotateBtns = ({rotateValue , setRotateValue}) => {
  const {foodInfo}=useContext(FoodContext)
  return (
    <div className='absolute bottom-0  z-50 w-full h-24 flex justify-end items-end pr-24'>
        <div className='w-1/2 flex justify-between items-center'>
            <button className='border p-3 rounded-full' style={{backgroundColor:foodInfo.theme}} onClick={()=>setRotateValue(rotateValue-45)}>
                <FaArrowDown size={20}/>
            </button>
            <div className='w-72 h-72 relative flex justify-center items-center'>
              <h3 className='z-40 text-center'>{foodInfo.name}</h3>
              <img src={foodInfo.image} className='w-full h-full object-cover absolute top-0 left-0'/>
            </div>
            <button className='border p-3 rounded-full' style={{backgroundColor:foodInfo.theme}} onClick={()=>setRotateValue(rotateValue+45)}>
                <FaArrowDown size={20}/>
            </button>
        </div>
    </div>
  )
}

export default RotateBtns
