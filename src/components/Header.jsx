import { IoMdRestaurant } from "react-icons/io";
import { IoBag } from "react-icons/io5";

const Header = ({getFoodsByCategory}) => {
    const categories=["Breakfast", "Lunch", "Dinner"]
  return (
    <header className='absolute top-5  w-full z-30'>
        <div className='w-11/12 m-auto flex justify-between items-center py-3'>
            <div className='w-1/5  text-center font-semibold flex items-center'>
              <IoMdRestaurant size={30} color="orange"/>
              <h1 className="text-xl mt-1">FoodSpin</h1>
            </div>
            <div className='w-3/5  flex justify-around items-cneter'>
                {
                  categories.map((category, i)=>(
                      <button className='font-bold hover:scale-[1.2] transition duration-500 hover:text-orange-400' onClick={()=>getFoodsByCategory(category)} key={i}>{category}</button>
                  ))
                }
            </div>
            <div className="w-20  flex justify-center items-center">
                <IoBag size={23} color="orange"/>
            </div>
        </div>
    </header>
  )
}

export default Header
