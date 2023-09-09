import { stringify } from 'querystring'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Register() {
const  [inpval , setinp]=useState({
  name:"",
  email:"",
  age:"",
  mobile:"",
  work:"",
  add:"",
  des:""
})

const setdata =(e)=>{
  console.log(e.target.value);
  const{name,value}=e.target;

  setinp((preval)=>{
return{
  ...preval,
  [name]:value
}
  })
}

// const addinputdata = async(e)=>{
//    e.preventDefault();
//   const {name,email,age,work,add,mobile,desc}=inpval;

// const res = await fetch('/register',{

// method:"POST",
// headers:{
//   "Content-Type" : "application/json"
// },
// body:JSON.stringify({
//   name,email,age,work,add,mobile,desc

// })


// })
// const data = await res.json();
// console.log(data);

// if(res.status === 404 || !data){
// alert("error")
// }else{
//   alert("data added")
// }

// }

// const[name , setname]=useState("");
// const[email , setemail]=useState("");
// const[age , setage]=useState("");
// const[number , setnumber]=useState("");
// const[work , setwork]=useState("");
// const[adress , setadress]=useState("");
// const[des , setdes]=useState("");

// const[data , setdata]=useState([])

// const submit=()=>{
   
//     setdata([...data ,{name , email,age,number,work,adress,des}]);
//     setname("");
//     setemail("");
//     setage("");
//     setadress("");
//     setnumber("");
//     setdes("");
// }



  return (
    <div className='container'>
        <div className='mt-3'>
        <NavLink  to="/">home</NavLink>
        </div>
        
        <form>
        <div className='row mt-3 mb-2'>
  <div className="form-group mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" value={inpval.name} onChange={setdata} name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
 
  </div>
 
  <div className="form-group mb-4 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" value={inpval.email} onChange={setdata} name='email' className="form-control" id="exampleInputEmail1"  placeholder="Enter email"/>
    
  </div>
  <div className="form-group mb3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1 ">Age</label>
    <input type="number"  value={inpval.age} onChange={setdata} name='age' className="form-control" id="exampleInputEmail1" placeholder="Enter age"/>
  </div>
  <div className="form-group mb-4 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1">Number</label>
    <input type="number"  value={inpval.mobile} onChange={setdata} name='mobile' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number"/>
    
  </div>
  <div className="form-group mb-4 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1">Work</label>
    <input type="text" value={inpval.work} onChange={setdata} name='work' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter work"/>
    
  </div><div className="form-group mb-4 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1">Adress</label>
    <input type="text"  value={inpval.add} onChange={setdata} name='add' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Adress"/>
    
  </div>
  <div className="form-group mb-4 col-lg-12 col-md-12 col-12">
    <label for="exampleInputEmail1">Description</label>
   <textarea  value={inpval.des}  onChange={setdata} name='des' className="form-control" cols="5" rows="5"></textarea>
    
  </div>

  
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default Register