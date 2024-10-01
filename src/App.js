import { useContext, useEffect, useState } from 'react';
import './App.css';
import CircleBox from './components/CircleBox';
import RotateBtns from './components/RotateBtns';
import FoodInfo from './components/FoodInfo';
import { FoodContext } from './context/FoodContext';
import Header from './components/Header';

const url = 'https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Restaurant?select=*'
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'

const options = {
    headers: {
        apikey: apikey,
        Authorization: `Bearer ${apikey}`
    }
}

function App() {
  const [rotateValue, setRotateValue]=useState(0)
  const {foodInfo,setFoodInfo}=useContext(FoodContext)

    const [foods, setFoods] = useState([])

    const getFoodsByCategory = async (category) => {
        await fetch(url, options)
        .then(res => res.json())
        .then(data => setFoods(data.filter(food=>food.category===category)))
    }


    useEffect(() => {
        getFoodsByCategory("Breakfast")
    }, [])

    useEffect(()=>{
      if(foods.length>0){
        setFoodInfo(foods[0])
      }
    },[foods])
  

  
  return (
    < >
      {
        foods.length>0?
        <div className='h-[630px] border relative'>
          <Header getFoodsByCategory={getFoodsByCategory}/>
            <div className="main h-screen relative overflow-hidden transition duration-500" style={{backgroundColor:foodInfo?.theme}}>
              <CircleBox rotateValue={rotateValue} foods={foods} />       
            </div>
          <RotateBtns rotateValue={rotateValue} setRotateValue={setRotateValue} foodInfo={foodInfo}/>
          <FoodInfo />
        </div>
        :
        <div>
          Loading.....
        </div>
      }
    </>
  );
}

export default App;
