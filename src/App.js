
import './App.css';
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
 import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import Register from './Component/Register';
import Edit from './Component/Edit';
import Detail from './Component/Detail';


 function App() {
  return (
  
  <>
<Navbar></Navbar>
{/* <Home/> */}
{/* <Register/> */}

<Router>
        
        <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/register' element={<Register/>}></Route>
                <Route exact path='/edit/:Id' element={<Edit/>}></Route>
                <Route exact path='/view/:Id' element={<Detail/>}></Route>
               
        </Routes>
        
    </Router>
 
  </>
  );
}

export default App;
