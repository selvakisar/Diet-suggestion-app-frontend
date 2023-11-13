// import { createContext, useContext, useEffect, useState } from "react";
// import { APIfood } from "../Api/api";

// const FoodCtx = createContext();

// function AppProvider({ children }) {
//   const [foodData, setFoodData] = useState([]);
 



// useEffect(()=>{
//   const getAllFoods= async()=>{
//     const response= await fetch(APIfood,{
//       method: "GET",
//     })
//     const data=await response.json();
//     console.log("data consoled",data);
//     setFoodData(data);
//   }
//   getAllFoods();
// },[]);
   

//   return (
//     <FoodCtx.Provider value={{ foodData, setFoodData }}>
//       {children}
//     </FoodCtx.Provider>
//   );
// }
// export const Appstate = () => {
//   return useContext(FoodCtx);
// };
// export default AppProvider;






















































// // import  React,{ createContext, useState } from "react";
// // import { APIauth,APIfood,APIplan } from "../Api/api";

// // const AppContext = createContext({});



// // function AppProvider({children}){
// //     // database for pages

// //     const pages=[
// //         {
// //             name:"foods",
// //             path:"/foods/all"
// //         }
// //     ]
// // }





// // export const  Authprovider=({children})=> {

// //     const [auth,setAuth]=useState([]);

// //     return (
// //         <AuthContext.Provider value={{auth,setAuth}}>
// //             {children}

// //         </AuthContext.Provider>
// //     )
// // }





// // const FoodContext = createContext({});


// // export const  FoodProvider=({children})=> {
    
// //     const [food,setFood]=useState([]);

// //     return (
// //         <FoodContext.Provider value={{food,setFood}}>

// //             {children}


// //         </FoodContext.Provider>
// //     )
// // }



