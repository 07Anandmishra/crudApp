import React, { useEffect, useState } from "react";
import axios from "axios";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

function Userlist() {
  const [user, setUser] = useState([]);

  const [search,setSearch] = useState('')

  const getUserData = async () => {
    await axios
      .get("http://localhost:4000/employee")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const Deleteitem = (id) => {
    console.log(id);
    let conf = window.confirm("are you sure you want to delete");
    if (conf) {
      axios
        .delete(`http://localhost:4000/employee/${id}`)
        .then((res) => {
          console.log(res.data);
          getUserData();
        })
        .catch((err) => console.log(err));
    }
  };

  const searchsubmit=async()=>{
    await axios.get(`http://localhost:4000/employee?q=${search}`)
    .then((res)=>{ 
      setUser(res.data)
      setSearch('')
    })
    .catch((err)=>{console.log(err)})
  }

  const resetData=async()=>{
    getUserData()
  }

  const sortoption=['name','email']

  return (
    <>
      <div className="bg">
        <div className="container">
          <h3 className="emp_text">Employee List</h3>
          <div className="container">
            <div className="row my-5">
              <div className="col-lg-3 col-md-4 col-6 adddbutton">
                <NavLink to="/adduser" className="btn btn-primary">
                  Add User
                </NavLink>
              </div>

              <div className="col-lg-5 col-md-5 col-12 d-flex ">
                <input
                  type="text"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                  className="form-control"
                  placeholder="Search by name..."
                />
                <button className="btn btn-primary mx-2" onClick={()=>searchsubmit()}>Submit</button>
                <button className="btn btn-info" onClick={()=>resetData()}>Reset</button>
              </div>
              <div className="col-md-3 col-6">
                <div className="col-auto my-1">
                  <label className="">Select option</label>
                  <select
                    className="custom-select "
                    id="inlineFormCustomSelect"
                  >
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table ">
              <thead className="thead">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>

             {
              user.length>0 ? (
                
                  user.map((ele) => {
                    return (
                      <tr key={ele.id}>
                        <th scope="row">{ele.id}</th>
                        <td>{ele.Uname}</td>
                        <td>{ele.email}</td>
                        <td>{ele.password}</td>
                        <td className="icons">
                         <NavLink to={`/editdata/${ele.id}`}><ModeEditIcon /></NavLink> 
                          <DeleteIcon
                            className="delete"
                            onClick={() => Deleteitem(ele.id)}
                          />
                        </td>
                      </tr>
                    );
                  })
              ) :(

                 <div className="text-center"> No Record Found</div>

               )

             }

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlist;
