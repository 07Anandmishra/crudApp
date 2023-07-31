import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import img1 from '../images/login.png'

function Home() {

  const[email,setEmail] = useState('')
  const [password,setPassword]=useState('')
const navigate=useNavigate()

   useEffect(()=>{
   let auth=localStorage.getItem('login')
   if(auth){
    navigate('/userlist')
   }
   },[])

const handleSubmit=async(e)=>{
  e.preventDefault()

  await axios.get('http://localhost:4000/login').then((res)=>{
    // console.log(res.data)
   let getValue=res.data
   let newvalue=getValue.some((ele)=>{
  
      if(ele.email===email && ele.password===password){
        localStorage.setItem('login',JSON.stringify(ele))
        toast.success("login successfully!")
         navigate('/userlist')
        return true
      }else{
        toast.error("Invalid user !")
      }
      
   })
   console.log(newvalue)
 
  }).catch((err)=>{
    console.log(err)
  })
}

  return(
    <>
    <div className="bg_container">
    <div className="container ">
    <div className="col-lg-9 col-md-10 col-12 m-auto">
    
      <div className="row login_row">
      <h3 className="emp_text">Login Here Now</h3>
        <div className="col-lg-4 col-md-5 col-12 logoin_img m-auto">
           <img src={img1} alt="lockpic"/>
        </div>
        <div className="col-lg-7 col-md-6 col-12 m-auto">
    <form className="">
          <div className="form-group mb-2">
            <label className="pb-2">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email.."
               value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group mb-3">
            <label className="pb-2">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={handleSubmit}
          >
            Login
          </button>
          {/* <p>don't hava an account ? <NavLink>register</NavLink></p> */}
        </form>
        
        </div>
      </div>
      </div>
        </div>
        </div>
    </>
  );
}

export default Home;
