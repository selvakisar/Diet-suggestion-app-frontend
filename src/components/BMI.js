import TopBar from "./topbar";
import BMIChart from "./bmi chart";


export default function BmiCalculator() {



    // const [heightValue, setHeightValue] = useState("");
    // const [weightValue, setWeightValue] = useState("");
    // const [bmiValue, setBmiValue] = useState("");
    // const [bmiMessage, setBmiMessage] = useState("");
  
   
  
    // const calculateBmi = () => {
    //   if (heightValue && weightValue) {
    //     const heightInMeters = heightValue / 100;
    //     const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
    //     setBmiValue(bmi);
  
    //     let message = "";
    //     if (bmi < 18.5) {
    //       message = "You are Underweight";
    //       <button>gain wait</button>
    //     } else if (bmi >= 18.5 && bmi < 25) {
    //       message = "You are Normal weight";
    //     } else if (bmi >= 25 && bmi < 30) {
    //       message = "You are Overweight";
    //     } else {
    //       message = "You are Obese";
    //     }
    //     setBmiMessage(message);
    //   } else 
    //   {
    //     setBmiValue("");
    //     setBmiMessage("");
    //   }
    // };
  
    return (   
      <div>
    <TopBar/>
    <BMIChart/>
      </div>
     );
  }
  //     <div>
  //         <h1 className="text-2xl text-color: border-lime-300">Metric BMI Calculator</h1>
  //       <div className="card lg:card-side bg-accent-700 shadow-xl">
  //         <figure>
  //           <img
  //             src="https://i0.wp.com/notionthings.com/wp-content/uploads/2022/01/info.jpg?resize=1080%2C658&ssl=1"
  //             alt="Album"
  //           />
  //         </figure>
  //         <div className="card-body">
  //           <h3>Enter Your Height (cm):</h3>
  //           <input
  //             type="text"
  //             placeholder="Type here"
  //             className="input input-bordered input-warning w-full max-w-xl"
  //             value={heightValue}
  //             onChange={(e) => setHeightValue(e.target.value)}
  //           />
  //           <h3>Enter Your weight (kg):</h3>
  
  //           <input
  //             type="text"
  //             placeholder="Type here"
  //             className="input input-bordered input-warning w-full max-w-xl"
  //             value={weightValue}
  //             onChange={(e) => setWeightValue(e.target.value)}
  //           />
  //           <div className="card-actions justify-center">
  //             <button
  //               className="btn btn-primary justify-center"
  //               onClick={calculateBmi}
  //             >
  //               Click to Calculate BMI
  //             </button>
  //             {bmiValue && bmiMessage && (
  //               <div>
  //             <button className="btn">
  //   Your BMI
  //   <div className="badge">{bmiValue}</div>
  // </button>
  // <button className="btn">
  // Result:
  //   <div className="badge badge-secondary">{bmiMessage}</div>
  // </button>
  // </div>
  // )}    
  
  
  
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  
  
  
  
  
  