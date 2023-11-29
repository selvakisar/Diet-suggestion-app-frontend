
import './App.css';
import { Route, Routes } from 'react-router';

import BmiCalculator from './components/BMI';
import Signup from './user/signup';
import Login from './user/login';
import Forget from './user/forget';
import Reset from './user/reset';
import Home from './components/home';
// import Plan from './components/Plan';
import AllFoods from './foods/AllFoods';
import { MyPlan } from './plan/viewplan';
import { AddToPlan } from './plan/Add to plan';

function App() {
 
  return (
    <div className="App ">
    <div>
   
    <Routes>
      
    <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/forgetpass" element={<Forget/>}></Route>
        <Route path="/resetpass" element={<Reset/>}></Route>
        {/* <Route  path="/bmi" element= {<BmiCalculator/>} ></Route> */}
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/bmi" element={<BmiCalculator/>}></Route>
        <Route path="/user/my-plan" element={<MyPlan/>}></Route>
        <Route path="/plan/add/:foodId" element={<AddToPlan/>}></Route>
        <Route path="/all" element={<AllFoods/>}></Route>



    </Routes>
    </div>
  </div>
  );
}

export default App;
