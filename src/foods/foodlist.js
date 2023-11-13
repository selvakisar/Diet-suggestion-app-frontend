import React, { useEffect, useState } from "react";
import { APIfood } from "../Api/api";
 
export  async function getFoods(){
    const res=await fetch (`${APIfood}/all`,{
        method: "GET",
        body: JSON.stringify(),
        headers:{
            "Content-Type": "application/json",
        }
     
    })
    const foodData= await res.json()
    return foodData
}


export  async function delFoods(){
    const res=await fetch (`${APIfood}/del/:_id`,{
        method: "DELETE",
      
     
    })
    const foodData= await res.json()
    return foodData
}





























// export function FoodTable(foods) {

//     let columnNamesArray = ['Food', 'Measure', 'Grams', 'Calories', 'Protein', 'Fat', 'Sat.Fat', 'Fiber', 'Carbs', 'Category'];

//     // convert data into rows
//     const rows = foods.data.map((food_item, index) => {
//         return <FoodDataRow key={index} food={food_item} date={props.date} />
//     });

//     return (
//         <div>
//             <table className="table table-hover table-bordered">
//                 <thead>
//                     <tr>
//                         <th>{columnNamesArray[0]}</th>
//                         <th>{columnNamesArray[1]}</th>
//                         <th>{columnNamesArray[2]}</th>
//                         <th>{columnNamesArray[3]}</th>
//                         <th>{columnNamesArray[8]}</th>
//                         <th className='category'>{columnNamesArray[9]}</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// function FoodDataRow({ food, date }) { //food = props.food; date = props.date

//     // save food item data to firebase realtime database
//     const handleAddButton = (event) => {
//         event.preventDefault();

//         const db = getDatabase();
//         const newFoodItemDateData = {
//             addedFoodItem: food.Food,
//             date: date.toString().slice(0, 15)
//         }

//         const allAddedFoodData = ref(db, "allAddedFoodData");
//         firebasePush(allAddedFoodData, newFoodItemDateData);
//     }

//     return (
//         <tr>
//             <td>{food.Food}</td>
//             <td>{food.Measure}</td>
//             <td>{food.Grams}</td>
//             <td>{food.Calories}</td>
//             <td>{food.Carbs}</td>
//             <td className='category'>{food.Category}</td>
//             <td>
//                 <div>
//                     <button className="btn btn-outline-success my-2 my-sm-0"
//                         type="submit" onClick={handleAddButton}>Add</button>
//                 </div>
//             </td>
//         </tr>
//     );
// }