import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './Authentication';
import Login from './Component/Auth/Login';
import Home from './Component/Home';

function App() {
  return (
    <Routes>
        <Route exact path='/login' element={<Authentication cmp={Login}/>} />
        <Route exact path='/' element={<Authentication cmp={Home}/>} />
    </Routes>
  );
}

export default App;

// import React, { useState } from "react";
// import { user } from './Component/Store/Data';
// import "./App.css";

// function App() {
//   // State with list of all checked item
//   const [checked, setChecked] = useState([]);
 

//   // Add/Remove checked item from list
//   const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };

//   // Generate string of checked items
//   // const checkedItems = checked.length
//   //   ? checked.reduce((total, item) => {
//   //       return total + ", " + item;
//   //     })
//   //   : "";

//   // Return classes based on whether item is checked
//   // var isChecked = (item) =>
//   //   checked.includes(item) ? "checked-item" : "not-checked-item";

//   return (
//     <div className="app">
//       <div className="checkList">
//         <div className="title">Your CheckList:</div>
//         <div className="list-container">
//           {user.map((item, index) => (
//             <div key={index}>
//               <input value={item.userId} type="checkbox" onChange={handleCheck} />
//               <span >{item.userName}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App
