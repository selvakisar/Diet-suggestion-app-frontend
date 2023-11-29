import React from 'react';
import Topbar from '../components/topbar';
import {Datepic , DateInput } from './calender';
import CalorieChart from './food plan chart';


export default function Plan(){
     

    return(
                    <div>
                        <h1>Plan page</h1>
                         <Topbar/>
                         <Datepic/>
                       <CalorieChart/>
                <DateInput/>

        </div>
   
    )
}

