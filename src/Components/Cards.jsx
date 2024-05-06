import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { foodcardList,handelCart } from './Redux/FoodSlice';
import { useParams } from 'react-router-dom';
import "./cards.css"
const Cards = () => {

  
    const dispatch = useDispatch();
    const { FoodData } = useSelector((state) => state.Food);
    let { cat_name } = useParams(); 



    
    const getfoodData = async () => {
        try {
            const formattedCatName = cat_name.replaceAll("-", " "); // Replace hyphens with spaces
            const url = `http://localhost:2221/foodData?type=${formattedCatName}`;
          const options = {
            method: "GET",
          };
          let response = await fetch(url, options);
          let data = await response.json();
          dispatch(foodcardList(data));
          console.log(data);
        } catch (error) {
          console.log("Server error:: " + error.message);
        }
      };

   

      useEffect(()=>{
        getfoodData()
      return()=>{
        dispatch(foodcardList([]))
      }
      },[cat_name])


  return (
    <>
        <h3>{cat_name}</h3>
    <h1 className='text-center'>Food Cards</h1>

    { <div className="container" >
      <div className="row" >
        {FoodData.map((food) => (
          <div className="col-md-4 mb-4" key={food.id} >
            <div className="card  h-100 d-flex flex-column"  > 
              <img src={food.image} className="card-img-top img-fluid" alt={food.foodName} style={{height:"225px"}} />
              <h6>{food.foodName}</h6>
              <p> Price:{food.price}</p>
              <button className='btn btn-primary' onClick={()=>{
                let payload={
                  opt:"add",
                  food
                };
                dispatch(handelCart(payload))
              }}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div> }
    
  </>
  )
}

export default Cards



    {/* <div className="container" style={{height:"500px"}}>
      <div className="row" >
        {FoodData.map((food) => (
          <div className="col-md-4 mb-4" key={food.id} >
            <div className="card  h-100 d-flex flex-column" > 
              <img src={food.image} className="card-img-top img-fluid" alt={food.foodName} />
              <h6>{food.foodName}</h6>
              <p> Price:{food.price}</p>
              <button className='btn btn-primary' >View details</button>
            </div>
          </div>
        ))}
      </div>
    </div> */}