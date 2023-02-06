// import React, { Component } from "react";

//State allows us to manage changing data in an application
//suneja---- constructor is used to allocate memory to object.
//always first run constructor
//super keyword  ke help se parent constructor ko called kar diya.
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

// /The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor

//A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

// class Header extends Component {
//   constructor() {
//     super();
//     this.state = {
//       msg: "Hi i am arjun",
//     };
//   }

//   fn() {
//     this.setState({
//       msg: "arjunsingh Rajput ",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.msg}</h1>
//         <button onClick={() => this.fn()}>full name</button>
//       </div>
//     );
//   }
// }

// export default Header;


// class Header extends Component {
//     constructor() {
//       super();
//       this.state = {
//         msg: "Hi i am arjun",
//         status:"clicked",
//         flag:true
//       };
//     }
  
//     fn() {
//       if(this.state.flag){
//         this.setState({msg:"thank you ",status:"not clicked",flag:false})
//       }
//       else{
//         this.setState({msg:"Hi i am arjun",status:"clicked",flag:true})
//       }
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>{this.state.msg}</h1>
//           <button onClick={() => this.fn()}>{this.state.status}</button>
//         </div>
//       );
//     }
//   }
  
//   export default Header;
  