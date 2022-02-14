import React, {useState, useEffect} from "react";

export default function Addproduct() {
    const [item,setitem]=useState({
        fname:"",
        type:"",
        price:"",
    });
       const[data,setData]=useState([]); 
       let name,value;
       const handleOnchange = (event) =>{
        name = event.target.name;
        value = event.target.value; 
        setitem({...item,[name]:value}); 
      }
      
    //   Add Data to localStorage
       useEffect(() =>{
         localStorage.setItem('item',JSON.stringify(data)); 
       },[data])
    
      const handleOnSubmit = () =>{
        setData([...data,item]);
      }
        let a = localStorage.getItem("item")
      console.log(a)
    return (
        <>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name Of Product</label>
                    <input type="text" className="form-control" id="inputEmail4" name="fname" value={item.fname} onChange={handleOnchange}/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Type of Product</label>
                    <input type="text" name="type" className="form-control" id="inputAddress" placeholder="eg. mobile etc" value={item.type} onChange={handleOnchange}/>
                </div>
                
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">Price</label>
                    <input type="number" name="price" className="form-control" id="inputprice" value={item.price} onChange={handleOnchange}/>
                </div>
                <div className="col-12">
                    <submit type="submit" className="btn btn-primary" onClick={handleOnSubmit}>Add Item</submit>
                </div>
            </form>
            
        </>
    )
}