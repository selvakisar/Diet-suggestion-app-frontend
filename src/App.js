
import './App.css';
import { Route, Routes } from 'react-router';

import BmiCalculator from './components/BMI';
import Signup from './user/signup';
import Login from './user/login';
import Forget from './user/forget';
import Reset from './user/reset';
import Home from './components/home';
import Plan from './components/Plan';

function App() {
 
  return (
    <div className="App ">
    <div>
   
    <Routes>
      
    <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/forgetpass" element={<Forget/>}></Route>
        <Route path="/resetpass/:token" element={<Reset/>}></Route>
        <Route  path="/bmi" element= {<BmiCalculator/>} ></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/bmi" element={<BmiCalculator/>}></Route>
        <Route path="/plan" element={<Plan/>}></Route>



    </Routes>
    </div>
  </div>
  );
}

export default App;
