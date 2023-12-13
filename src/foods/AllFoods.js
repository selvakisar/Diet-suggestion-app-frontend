import { useEffect, useState } from "react";
import { APIfood } from "../Api/api";
import FoodCard from "./foodcard";
import Topbar from "../components/topbar";
import Footer from "./planchart";

export default function AllFoods() {
  const [Food, setFood] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`${APIfood}/all`, {
          method: "GET",
          headers: {
            "X-Auth-Token": localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        });
        if (!res) {
          throw new Error("Couldn't fetch all food data");
        }
        const Foods = await res.json();
        setFood(Foods);
        console.log(Foods);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
        <Topbar/>
        <div style={{ backgroundImage: `url("https://media.istockphoto.com/id/876656394/photo/healthy-food-concept-fresh-vegetables-fruits-meat-and-fish-on-wooden-table-healthy-eating-and.jpg?s=2048x2048&w=is&k=20&c=brr9M16eAH7Ji-Bglq2RF5vXQciZDFL5yebUScZ8ahY=")` 
          ,flexFlow:"row" , flexDirection:"row"}} className="grid grid-cols-4 gap-3">
      
            {Food.map((Foods,index)=>{
              // console.log(Food)
                 return(
             <div key={Foods._id}>
                <FoodCard 
                  foodId={Foods._id}
                  Food={Foods.Food}
                   Measure={Foods.Measure}
                   Calories={Foods.Calories}
                   Protein={Foods.Protein}
                   Carbs={Foods.Carbs}
                   Category={Foods.Category}/>
             </div>

                        )
                     })
            }

      </div>
      <Footer/>
    </div>
  );
}







