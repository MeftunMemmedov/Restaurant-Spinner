import { createContext, useState } from "react";

export const FoodContext=createContext()

export const FoodContextProvider=({children})=>{

    const [foodInfo, setFoodInfo]=useState({})

    return(
        <FoodContext.Provider value={{foodInfo, setFoodInfo}}>
            {children}
        </FoodContext.Provider>
    )
}