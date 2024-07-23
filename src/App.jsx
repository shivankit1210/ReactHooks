import React, { useEffect, useRef } from "react";
import Usereducer from "./components/Usereducer";
// import { useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/footer";
// import Profile from "./components/Profile";
// import Contact from "./components/Contact";
function App() {
  /* -------------------------------------------------------UseState hook----------------------------------------------------------------- */

  /* UseState hook start */

  // const [car, setCar] = useState({
  //   Brand: "BMW",
  //   Color: "Black",
  //   model: 2024,
  // });

  // const changeColor = () => {
  //   setCar((prev) => {
  //     return { ...prev, Color: "White" };
  //   });
  // };
  // const changeModel = () => {
  //   setCar((prev) => {
  //     return { ...prev, model: "2023" };
  //   });
  // };
  // const changeBrand = () => {
  //   setCar((prev) => {
  //     return { ...prev, Brand: "Hondacity" };
  //   });
  // };

  /* UseState hook ends */

  /* --------------------------------------------------UseEffect hook----------------------------------------------------------------- */

  /* UseEffect hook start */

  // const [Count, setCount] = useState(0);

  // const updatecount = ()=>{
  //   setCount( Count + 1);
  // }
  // const [Count, setCount] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(Count + 1);
  //   }, 2000);
  // });

  /* UseState hook ends */

  /* ----------------------------------------------------UseRef hook 1----------------------------------------------------------------- */

  /* UseRef hook start */

  // const [value, setValue] = useState(0);
  // const count = useRef(0);
  // console.log(count);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  /* UseRef hook ends */

  /* ----------------------------------------------------UseRef hook 2----------------------------------------------------------------- */

  // const inputElement = useRef();
  // const HandleClick = () => {
  //   console.log(inputElement.current);
  //   inputElement.current.style.background="Blue";
  // }

  /* ----------------------------------------------------UseMemo hook----------------------------------------------------------------- */
  // const [number,setNumber]=useState(0);

  // function numbercube(num){
  //   return Math.pow(num,3);
  // }

  // const result= numbercube(number);

  /* ----------------------------------------------------UseCallback hook----------------------------------------------------------------- */
  //  const [counter, setCounter]= useState(0);
  return (
    <>
    <Usereducer/>
      {/* <Header />
      <Profile />
      <Contact />
      <Footer /> */}

      {/* <h1>{counter}</h1>
    <button onClick={()=>{setCounter(prev=>prev+1)}}>Counter++</button> */}
      {/* <input type="Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
     <h1>Cube of number is {result}</h1> */}
      {/* <input type="text" ref={inputElement} />
      <button onClick={HandleClick}>Click here</button> */}

      {/* <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1> Renders count: {count.current} </h1> */}

      {/* <h1>My {car.Brand}</h1>
      <h3>
        It is {car.Color} in color with {car.model} model
      </h3>
      <button onClick={changeColor}>change to white</button>
      <button onClick={changeModel}>change model to 2023</button>
      <button onClick={changeBrand}>
        Click here to change the Brand of Car
      </button> */}

      {/* <h1 >Count {Count}</h1>
      <button onClick={updatecount}>Update count</button> */}

      {/* <h1>I have renderd {count} times!</h1> */}
    </>
  );
}

export default App;
