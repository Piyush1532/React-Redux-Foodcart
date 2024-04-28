import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {foodCategories} from  "./Redux/FoodSlice"
const Navbar = () => {

  const navigate =useNavigate();
  const dispatch= useDispatch();


  let { categories } = useSelector((state) => state.Food);

  
  useEffect(()=>{
    if (categories.length === 0) {

      getFoodCategories()
    }
    
  },[])


  let getFoodCategories = async () => {
    try {
      let url = `http://localhost:2221/categories`;
      let options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      let data = await response.json();
      dispatch(foodCategories(data));
    } catch (error) {
      alert("Server error:: " + error.message);
    }
  };


  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
      
          {categories.map((category, index) => (
         <li className="nav-item" key={index}>
              <a className="nav-link" onClick={() => { navigate(`/foodcard/${category.name}`) }}>
       {category.name}
    </a>
   </li>

 ))}
  <li className="nav-item" style={{marginLeft :"700px"}}>
                  <Link className="nav-link position-relative" to="/foodCart">
                    <i className="bi bi-cart-fill mx-1"></i>
                    {/* Cart */}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {/* {cart.length} */}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </li>
    
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

// {/* <li className="nav-item">
//           <a className="nav-link" href="#">Pricing</a>
//         </li> */}


         // {categories.map((category, index) => (
         //   <li className="nav-item" key={index}>
         //     <a className="nav-link" onClick={() => { navigate("/foodcard/cat_name") }}>
         //       {category.foodtype}
         //     </a>
         //   </li>
         // ))}



