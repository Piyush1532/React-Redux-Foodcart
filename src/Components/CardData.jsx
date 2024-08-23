import React from 'react'

const CardData = () => {
  return (
    <div>
      
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="py-3">
          <h5>Your Cart</h5>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="d-non">
              <div className="card mb-3">
                <div className="card-body">
                  {cart.map((product) => {
                    return (
                      <div className="d-flex border-bottom py-2">
                        <div className="px-4">
                          <img
                            src={product.image}
                            className="cartpImg"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <p className="card-title">{product.title}</p>
                          <div className="text-secondary">
                            <p className="text-capitalize">
                              Category:{product.category}
                            </p>
                          </div>

                          <p className="card-text">₹ {product.price} /-</p>
                          <span className="text-primary">
                            Quantity: {product.qty}
                          </span>
                          <button
                            className="btn btn-success btn-sm mx-3"
                            onClick={() => {
                              dispatch(
                                handelCart({
                                  opt: "add",
                                  product,
                                })
                              );
                            }}
                          >
                            Add
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                              dispatch(
                                handelCart({
                                  opt: "remove",
                                  product,
                                })
                              );
                            }}
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
                <div className="card-body d-flex  justify-content-end">
                  <a
                    href="#"
                    className="btn btn-danger btn btn-danger px-5 py-2 brnone"
                    style={{ backgroundColor: "#fb641b" }}
                  >
                    PLACE ORDER
                  </a>
                </div>
              </div>
            </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default CardData
