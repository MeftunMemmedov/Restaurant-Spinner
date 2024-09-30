import React, { useContext, useEffect, useState } from 'react'
import { FoodContext } from '../context/FoodContext'


const CircleBox = ({ rotateValue , foods}) => {
    const {foodInfo, setFoodInfo}=useContext(FoodContext)
    useEffect(()=>{
        console.log(foods)
    },[foods])
    return (
        <div className={`absolute right-16 top-40 transition duration-500 text-white`} style={{ transform: `rotate(${rotateValue}deg)` }}>
            <div className="border-4 border-orange-500 border-dashed w-[700px] h-[700px] relative rounded-full">
                <div className="h-full w-full absolute p-10">
                    <div className="relative w-full h-full">
                        {
                            foods.slice(0, 4).map((food, i) => {
                                return (
                                    <div onClick={()=>setFoodInfo(food)} className={` w-32 h-32 absolute rounded-full ${i == 0 && "top-0 left-0"} ${i == 1 && " top-0 right-0"} ${i == 2 && "bottom-0 right-0"} ${i == 3 && "bottom-0 left-0"} `}>
                                        <div className='w-full h-full relative flex justify-center items-center '>
                                            <p className='z-20 text-center font-semibold text-orange-400'>{food.name}</p>
                                            <img src={food.image} className='w-full h-full object-cover absolute top-0 left-0'/>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className=" w-full h-full absolute rotate-45 p-10">
                    <div className="relative w-full h-full ">
                        {
                            foods.slice(4, 8).map((food, i) => {
                                return (
                                    <div onClick={()=>setFoodInfo(food)} className={` w-32 h-32 absolute  rotate-[-45deg] rounded-full ${i == 0 && "top-0 left-0"} ${i == 1 && " top-0 right-0"} ${i == 2 && "bottom-0 right-0"} ${i == 3 && "bottom-0 left-0"}`}>
                                        <div className='w-full h-full relative flex justify-center items-center '>
                                            <p className='z-20 text-center font-semibold text-orange-400'>{food.name}</p>
                                            <img src={food.image} className='w-full h-full object-cover absolute top-0 left-0'/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircleBox
