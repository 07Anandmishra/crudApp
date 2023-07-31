import React, { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import img2 from '../images/7.png'


function Adduser() {
  
  const [inputValue, setInputValue] = useState({
    Uname: "",
    email: "",
    password: "",
  });



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };


   const navigate=useNavigate()

  const Validate=()=>{
     let isValid=true
     var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
     let errorMessage;
     var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

      if(inputValue.Uname===null || inputValue.Uname===''){
        isValid=false
        errorMessage = "name is required"
      }
      if(inputValue.email===null || inputValue.email===''){
        isValid=false
        errorMessage = " email is required"
      }
      
      if(inputValue.password===null || inputValue.password===''){
        isValid=false
        errorMessage = " password is required"
      }
     
      if(!isValid){
        toast.warning(errorMessage)
      }

     return isValid
    }

  const handleSubmit = (e) => {
    
    e.preventDefault();

    

    if(Validate()){
      axios
      .post("http://localhost:4000/employee", inputValue)
      .then((res) => {
        toast.success("data submitted successfully!")
        navigate('/userlist')
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  
   
  }
}




  return (
    <div className="bg_container">
    <div className="container ">
      <div className="row col-lg-9 col-md-10 col-12 m-auto registerform">
      <h3 className="emp_text">Employee register here</h3>
        <div className="col-lg-5 col-md-5 col-12 register_imacolumn" >
        <img src={img2} alt="pic"/>
        </div>
        <div className=" col-lg-7 col-md-6 col-12 ">
        <form className=" p-4" autoComplete='off'>
          <div className="form-group pb-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name.."
              autoComplete="off"
              onChange={handleChange}
              name="Uname"
          
            />
          
          </div>
          <div className="form-group pb-2">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email.."
              name="email"
              value={inputValue.email}
              onChange={handleChange}
            />
            
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group pb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={inputValue.password}
              onChange={handleChange}
            />
          </div>

        

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Adduser;
