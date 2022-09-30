import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const {useState, useCallback} = React;
// function Example() {

//   const data = {
//     "id":1
//   }
//     const [theArray, setTheArray] = useState([]);
//     const addEntryClick = () => {
//         setTheArray([...theArray, data.id]);
//     };

//     console.log(theArray);
//     return [
//         <input type="button" onClick={addEntryClick} value="Add" />,
//         <div>{theArray.map(entry =>
//           <div>{entry}</div>
//         )}
//         </div>
//     ];
// }

// ReactDOM.render(
//     <Example />,
//     document.getElementById("root")
// );

