import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { foodcardList } from './Redux/FoodSlice';
import { useParams } from 'react-router-dom';

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
      },[])

      useEffect(() => {
        // unmount starts
        return () => {
          dispatch(foodcardList([])); // resting list
        };
        // unmount ends
      }, []);

      useEffect(() => {
        console.log("list updated");
      }, [FoodData]);
    
  return (
    <div>
        <h3>{cat_name}</h3>
    <h1 className='text-center'>Food Cards</h1>
    <div className="container">
      <div className="row">
        {FoodData.map((food) => (
          <div className="col-md-4 mb-4" key={food.id}>
            <div className="card "> 
              <img src={food.image} className="card-img-top" alt={food.foodName} />
              <button className='btn btn-primary' >View details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Cards


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { foodcardList } from './Redux/FoodSlice';
// import { useParams } from 'react-router-dom';

// const Cards = () => {
//   const dispatch = useDispatch();
//   const { foodData } = useSelector((state) => state.Food);
//   const { cat_name } = useParams(); // Ensure correct parameter name here
//   const formattedCatName = cat_name ? cat_name.replaceAll("-", " ") : ""; // Ensure cat_name exists and format it
//   const getFoodData = async () => {
//     try {
//       const url = `http://localhost:2221/foodData?category=${formattedCatName}`;
//       const options = {
//         method: "GET",
//       };
//       const response = await fetch(url, options);
//       const data = await response.json();
//       dispatch(foodcardList(data));
//       console.log(data);
//     } catch (error) {
//       console.log("Server error:: " + error.message);
//     }
//   };

//   useEffect(() => {
//     getFoodData();
//     return () => {
//       dispatch(foodcardList([])); // Reset list on unmount
//     };
//   }, [formattedCatName, dispatch]);

//   return (
//     <div>
//       <h1 className='text-center'>Food Cards</h1>
//       <div className="container">
//         <div className="row">
//           {foodData.map((food, id) => (
//             <div className="col-md-4 mb-4" key={food.id}>
//               <div className="card">
//                 <img src={food.image} className="card-img-top" alt={food.foodName} />
//                 <p>{food.foodName}</p>
//                 <button className='btn btn-primary' >View details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
