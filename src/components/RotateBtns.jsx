import React, { useContext, useEffect, useRef } from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FoodContext } from '../context/FoodContext';


const RotateBtns = ({rotateValue , setRotateValue}) => {
  const {foodInfo}=useContext(FoodContext)
  const plateImgRef=useRef(null)

  const toLeft=()=>{
    setRotateValue(rotateValue-45)
    
  }

  const toRight=()=>{
    setRotateValue(rotateValue+45)
  }

  useEffect(()=>{
    const handleKeyDown=(event)=>{

      if(event.key==='ArrowLeft'){
        setRotateValue(rotateValue-45)
      }else if(event.key==='ArrowRight'){
        setRotateValue(rotateValue+45)
      }
    }

    window.addEventListener('keydown',handleKeyDown)
    return ()=>{
      window.removeEventListener('keydown', handleKeyDown)
    }

  },[rotateValue])


  useEffect(()=>{

    if(plateImgRef.current){
      plateImgRef.current.classList.add('plate-off')
      setTimeout(()=>{
        plateImgRef.current.classList.remove('plate-off')
        plateImgRef.current.classList.add('plate-on')
      },100)
    }
  },[foodInfo])
  return (
    <div className='absolute bottom-0  z-50 w-full h-24 flex justify-end items-end pr-24'>
        <div className='w-1/2 flex justify-between items-center'>
            <button className='border p-3 rounded-full' style={{backgroundColor:foodInfo.theme}} onClick={toLeft}>
                <FaArrowDown size={20}/>
            </button>
            <div className='w-72 h-72 relative flex justify-center items-center' ref={plateImgRef}>
              <h3 className='z-40 text-center'>{foodInfo.name}</h3>
              <img src={foodInfo.image} className='w-full h-full object-cover absolute top-0 left-0'/>
            </div>
            <button className='border p-3 rounded-full' style={{backgroundColor:foodInfo.theme}} onClick={toRight}>
                <FaArrowDown size={20}/>
            </button>
        </div>
    </div>
  )
}

export default RotateBtns
