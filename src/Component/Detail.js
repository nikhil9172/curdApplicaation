import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function Detail() {
  return (
    <div className='container mt-3'>
      <h2 className='mb-3'>Welcome to Detail Page</h2>
      <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <div className='row'>


     
<div className='left-view col-lg-6 col-md-6 col-12' >

<h5 className='mt-3'>name : <span>Nikhil Dhakate</span></h5>
<h5 className='mt-3'>Age : <span>22</span></h5>
<h5 className='mt-3'><MailOutlineIcon/> Email : <span>nikhildhakate19@gmail.com</span></h5>
<h5 className='mt-3'><WorkOutlineIcon/> Occupation : <span>webdeveloper</span></h5>


</div>

<div className='right-view col-lg-6 col-md-6 col-12'>


        

<h5 className='mt-3'><PhoneAndroidIcon/> Mobile : <span>Nikhil Dhakate</span></h5>
<h5 className='mt-3'> <LocationOnIcon/>Location : <span>22</span></h5>

<h5 className='mt-3'> description : <span>webdeveloper jvjvgvv ghvgvgvgvgv</span></h5>


  
</div>
</div>  

<button className=' btn btn-primary mx-2 mt-3'><DeleteIcon/></button>
        <button className=' btn btn-danger  mt-3'><BorderColorIcon/></button>

      </CardContent>
       </Card>
    </div>
  )
}

export default Detail