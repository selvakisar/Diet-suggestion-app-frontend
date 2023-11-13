import { useNavigate } from "react-router";
import { Appstate } from "../context/authContext";
import { APIfood } from "../Api/api";

export default function FoodTable({foods}) {

    const{foodData,setFoodData}=Appstate
    const navigate=useNavigate();
    
    
    
    const delfood=async (_id)=>{
        let res=window.confirm("are you sure you want to delete this");
        if(res){
            const response = await fetch (`${APIfood}/del/:${_id}}`,{
                method: "DELETE",
            });
            const data=await response.json();
            console.log(data);
            const newFoodList=foodData.filter((food,idx)=>food._id !== _id)
            setFoodData(newFoodList)

        }
    }

    return(
        <div className="">
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Food</th>
        <th>Measure</th>
        <th>Grams</th>
        <th>Calories</th>
        <th>Carbs</th>
        <th>Category</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
 {/* table row format */}
      <tr>
        <th></th>
        <td>{foods.Food}</td>
            <td>{foods.Measure}</td>
            <td>{foods.Grams}</td>
            <td>{foods.Calories}</td>
            <td>{foods.Carbs}</td>
            <td className='category'>{foods.Category}</td>
            <td><button>Add to Plan</button>
            <button>Delete</button></td>
      </tr>

    </tbody>
  </table>
</div>
            
        </div>
    )
};
