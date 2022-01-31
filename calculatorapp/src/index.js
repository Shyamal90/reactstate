import React from "react";
import ReactDOM  from "react-dom";
// import App from "./App"
import Counter from "./counter/Counter.jsx"
import Assignment from "./day2/Assignment.jsx";
import Hook_State_Props from "./Notes/Hook-State-Props.jsx";
import Tasks from "./Tasks/Tasks"



ReactDOM.render(
  <>
   {/* <Counter name={"Shyam"} /> */}
   {/* <Tasks/> */}
   {/* <Assignment /> */}
   <Hook_State_Props />

  </>,document.getElementById("root")
)































// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './App';

// const company = ["Android","Blackberry","Iphone","Window Phone"];
// const newCompany = ["Samsung","HTC","Micromax","Apple"];

// ReactDOM.render(
//    React.createElement("div",{},
//     React.createElement("div",{},
//     <h1>Mobile Operating System</h1>,
//     React.createElement("ul",{},
//       company.map((phone)=>{
//         return (
//          <li>{phone}</li>
//         )
//       })
//     )
//     ),
//     React.createElement("div",{},
//     <h1>Mobile Manufacturers</h1>,
//     React.createElement("ul",{},
//     newCompany.map((phone)=>{
//         return (
//          <li>{phone}</li>
//         )
//       })
//     )
//     )
//    )
//    ,
//   document.getElementById('root')
// );

/*
<div>
        <h3>Mobile Operating System</h3>
        <ul>
          <li>Android</li>
          <li>Blackberry</li>
          <li>iPhone</li>
          <li>Windows Phone</li>
        </ul>
      </div>
      <div>
        <h3>Mobile Manufacturers</h3>
        <ul>
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li>Appl</li>
        </ul>
      </div>

*/