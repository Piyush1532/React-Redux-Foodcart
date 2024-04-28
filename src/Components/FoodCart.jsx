import React from 'react'

const FoodCart = () => {
  return (
    <div>
      <h3 className='text-center'>Food Cart</h3>

      <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="food1.jpg" class="card-img-top" alt="Food 1"/>
        <div class="card-body">
          <h5 class="card-title">Food Item 1</h5>
          <p class="card-text">Price: $10</p>
          <p class="card-text">Category: Main Course</p>
          <div class="input-group mb-3">
            <input type="number" class="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="add-btn"/>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="add-btn">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default FoodCart
