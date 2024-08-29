import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleCart } from './Redux/FoodSlice';
const FoodCart = () => {
  const dispatch = useDispatch();
  let { carts } = useSelector((state) => state.Food);

  const addCart=(food)=>{

    let payload={
      opt:"Add",
      food:food
    }
    dispatch(handleCart(payload))
    }

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <div className="py-3">
        <h5>Your Cart</h5>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              {carts.map((item) => {
                return (
                  <div className="d-flex border-bottom py-2 " key={item.id}>
                    <div className="px-4" style={{ maxWidth: "150px" }}>
                      <img
                        src={item.image}
                        className="cartpImg img-fluid"
                        alt={item.foodName}
                      />
                    </div>
                    <div>
                      <p className="card-title">{item.foodName}</p>
                      <div className="text-secondary">
                        <p className="text-capitalize">
                          Category: {item.type}
                        </p>
                      </div>
                      <p className="card-text">₹ {item.price} /-</p>
                      <span className="text-primary">Quantity: {item.qty}</span>
                      <button
                        className="btn btn-success btn-sm mx-3"
                       onClick={()=>{
                        addCart(item)
                       }}
                      >
                        Add
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                       
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body d-flex justify-content-end">
              <a
                href="#"
                className="btn btn-danger px-5 py-2 brnone"
                style={{ backgroundColor: "#fb641b" }}
              >
                PLACE ORDER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
