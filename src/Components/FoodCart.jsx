
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { cartFunction } from './Redux/FoodSlice';

// const FoodCart = () => {
//   const {cart} = useSelector(state => state.Food);
//   const dispatch = useDispatch();

//   const handleAdd = (food) => {
//     dispatch(cartFunction({ opt: "add", food }));
//   };

//   const handleRemove = (food) => {
//     dispatch(cartFunction({ opt: "remove", food }));
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Food Cart</h2>
//       <div className="row">
//         {cart.map((item, index) => (
//           return(
//             <div key={index} className="col-md-6 mb-4">
//             <div className="card">
//               <img src={item.image} className="card-img-top" alt={item.foodName} />
//               <div className="card-body">
//                 <h5 className="card-title">{item.foodName}</h5>
//                 <p className="card-text">Price: ${item.price}</p>
//                 <p className="card-text">Type: {item.type}</p>
//                 <div className="input-group mb-3">
//                   <div className="input-group-prepend">
//                     <button className="btn btn-outline-secondary" type="button" onClick={() => handleRemove(item)}>-</button>
//                   </div>
//                   <span className="text-primary">
//                     Quantity: {item.quantity}
//                   </span>
//                   <div className="input-group-append">
//                     <button className="btn btn-outline-secondary" type="button" onClick={() => handleAdd(item)}>+</button>
//                   </div>
//                 </div>
//                 <button className="btn btn-primary btn-block">Buy</button>
//               </div>
//             </div>
//           </div>
//           )
         
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodCart;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handelCart } from './Redux/FoodSlice';

const FoodCart = () => {
  let { cart } = useSelector(state => state.Food);

  



  return (
    <div className="container mt-5">
      <h2 className="mb-4">Food Cart</h2>
      <div className="row">
        {cart.map((item) => (
     <div className="card" >
      <div key={item.id}> 
      <img src={item.image} alt={item.foodName}  style={{height:"300px",width:"500px"}}/>
      <p>Price:{item.price}</p>
      <p>Name:{item.foodName}</p>
      </div>
      
     </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCart;
