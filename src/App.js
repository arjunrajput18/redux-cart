// // import React from "react";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Home from "./component/Home";
// // import About from "./component/About";
// // import NavBar from "./component/NavBar";
// // // import Router6 from './component/Router6';
// // const App = () => {
// //   return (
// //     <div>
// //       <BrowserRouter>
// //         <NavBar />

// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
// // };

// // export default App;

// import React from 'react';
// import User from './Notes/User';
// // import LifeCycleMethod from './component/LifeCycleMethod';
// // import Muu from './component/Muu';
// // import AxiosMethod from "./component/AxiosMethod"
// // import HOC from "./component/HOCs/HOC"
// // import Student1 from './component/HOCs/Student1';
// // import Student2 from './component/HOCs/Student2';
// const App = () => {
//   return (
//     <div>
//       {/* <LifeCycleMethod/> */}
//       {/* <Muu/> */}
//       {/* <AxiosMethod/> */}
//       {/* <HOC/> */}
//       {/* <Student1></Student1>
//       <Student2></Student2> */}
// {/* <h1>App Component</h1> */}
//       <User data={{name: "Arjun Rajput",age:26}}/>
//     </div>
//   );
// };

// export default App;






import "./App.css"
import React from 'react';
// import Home from './components/Home';
import HomeContainer from "./containers/HomeContainer"
const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <HomeContainer/>
    </div>
  );
};

export default App;

















