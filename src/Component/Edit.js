import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Edit() {
    const[name , setname]=useState("");
    const[email , setemail]=useState("");
    const[age , setage]=useState("");
    const[number , setnumber]=useState("");
    const[work , setwork]=useState("");
    const[adress , setadress]=useState("");
    const[des , setdes]=useState("");
    
    const[data , setdata]=useState([])
    
    const submit=()=>{
       
        setdata([...data ,{name , email,age,number,work,adress,des}]);
        setname("");
        setemail("");
        setage("");
        setadress("");
        setnumber("");
        setdes("");
    }
    
    
    
      return (
        <div className='container'>
            <div className='mt-3'>
            <NavLink  to="/">home</NavLink>
            </div>
            
            <form>
            <div className='row mt-3 mb-2'>
      <div className="form-group mb-3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
     
      </div>
     
      <div className="form-group mb-4 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1"  placeholder="Enter email"/>
        
      </div>
      <div className="form-group mb3 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1 ">Age</label>
        <input type="number"  value={age} onChange={(e)=>setage(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter age"/>
      </div>
      <div className="form-group mb-4 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1">Number</label>
        <input type="number"  value={number} onChange={(e)=>setnumber(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number"/>
        
      </div>
      <div className="form-group mb-4 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1">Work</label>
        <input type="text" value={work} onChange={(e)=>setwork(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter work"/>
        
      </div><div className="form-group mb-4 col-lg-6 col-md-6 col-12">
        <label for="exampleInputEmail1">Adress</label>
        <input type="text"  value={adress} onChange={(e)=>setadress(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Adress"/>
        
      </div>
      <div className="form-group mb-4 col-lg-12 col-md-12 col-12">
        <label for="exampleInputEmail1">Description</label>
       <textarea  value={des} onChange={(e)=>setdes(e.target.value)} className="form-control" cols="5" rows="5"></textarea>
        
      </div>
    
      
      <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
      </div>
    </form>
        </div>
      )
    }

export default Edit