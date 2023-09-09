import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
function Home() {
  return (
    <div className='mt-5'>
<div className='container'>
    <div className='add_btn mt-2 mb-2'>
        <button className='btn btn-primary'> Add Data</button>

    </div>

    <table class="table">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">job </th>
      <th scope="col">Number </th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Nikhil</td>
      <td>nikhildhakate19@gmail.com</td>
      <td>Develloper</td>
      <td>9172331098</td>
      <td className='d-flex justify-content-between'>
        <button className=' btn btn-success'><RemoveRedEyeIcon/></button> 
        <button className=' btn btn-primary'><DeleteIcon/></button>
        <button className=' btn btn-danger'><BorderColorIcon/>
</button>
      
      </td>
      
    </tr>
  
  </tbody>
</table>




</div>
 </div>
  )
}

export default Home