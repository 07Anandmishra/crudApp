import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Editdata = () => {

 const {id}=useParams()

    const [inputValue, setInputValue] = useState({
        Uname: "",
        email: "",
        password: "",
      });

 const navigate=useNavigate()
 
      const getData=()=>{
        axios.get(`http://localhost:4000/employee/${id}`).then((res)=>{
            setInputValue(res.data)
        }).catch((err)=>{
            console.log(err)
        })
      }

      useEffect(()=>{
        getData()
      },[id])

    const  handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({
          ...inputValue,
          [name]: value,
        });
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
      await axios.put(`http://localhost:4000/employee/${id}`,inputValue).then((res)=>{
        toast.success("data updated successfully")
            setInputValue(res.data)
        navigate('/userlist')
        }).catch((err)=>{
            console.log(err)
        })
    }

    

  return (
    <div className="bg_container">
    <div className='container'>
    <div className='row '>
<div className='col-lg-7 col-md-6 col-12 m-auto'>

<form className=" p-4 table ">
<h3 className="emp_text">Update User Data</h3>
          <div className="form-group pb-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name.."
              autoComplete="off"
              onChange={handleChange}
              name="Uname"
              value={inputValue.Uname}
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
  )
}

export default Editdata