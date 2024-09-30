import { IoMdRestaurant } from "react-icons/io";

const Header = ({getFoodsByCategory}) => {
    
  return (
    <header className='absolute top-5  w-full z-30'>
        <div className='w-11/12 m-auto flex justify-between items-center py-3'>
            <div className='w-1/5 text-center font-semibold flex items-center'>
              <IoMdRestaurant size={30} color="orange"/>
              <h1 className="text-xl mt-1">FoodSpin</h1>
            </div>
            <div className='w-3/5 flex justify-around items-cneter'>
                <button className='font-bold' onClick={()=>getFoodsByCategory("Breakfast")}>Breakfast</button>
                <button className='font-bold' onClick={()=>getFoodsByCategory("Lunch")}>Lunch</button>
                <button className='font-bold' onClick={()=>getFoodsByCategory("Dinner")}>Dinner</button>
            </div>
        </div>
    </header>
  )
}

export default Header
