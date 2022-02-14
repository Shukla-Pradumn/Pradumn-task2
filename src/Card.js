import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Addproduct from './Addproduct';
import product from './product.json'
function Card() {
  const [filteredResults, setFilteredResults] = useState(product);
  const [searchInput, setSearchInput] = useState('');
  // const [item, setItem] = useState([]);
  let navigate = useNavigate()
  function addItem() {
    // console.log("clicked")
    navigate("/Addproduct");
  }
  // console.log(addItem)
  //for searching functionality
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = product.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(product)
    }
  }

  return (
    <>
      {/* Start Navbar */}
      <nav className="navbar navbar-light bg-light ">
        <div className="container d-flex justify-content-between">
          <form className="col-sm-6">
            <input className="form-control me-2" type="search" onChange={(e) => searchItems(e.target.value)} placeholder="Search" aria-label="Search" />
          </form>
          <div className="dropdown  d-flex justify-content-evenly">


            {/* <button type="button" className="btn btn-outline-dark mx-2">Last Added  <i className="fa fa-arrow-up" aria-hidden="true"></i><i className="fa fa-arrow-down" aria-hidden="true"></i></button> */}
          </div>
        </div>
      </nav>
      {/* End Navbar */}

      {/* Container */}
      <div className="container my-3 bg-light">
        <div className='row my-2'>
          {
            filteredResults.map((curEle) => {
              return (
                <div className="card mx-1 my-2 " style={{ width: '16rem' }} key={curEle.sku} >
                  <img style={{ height: "150px", width: "230px" }} src={curEle.image} className="card-img-top my-1" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{curEle.name}</h5>
                    <p className="card-text">{curEle.type}</p>
                    <p className="card-text">$ {curEle.price}</p>
                    {/* <p className="card-text">{curEle.}</p> */}
                  </div>
                </div>
              )
            })
          }
        </div>
        <div class="col-12">
          <button type="button" className="btn btn-primary" onClick={addItem}>Add</button>
        </div>
      </div>
    </>
  );
}

export default Card;