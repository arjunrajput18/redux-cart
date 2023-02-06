
//video 24 25
//react js lifecycle method (class component /statefull component)
//we cannot go directly in dom first it goes on virtual dom then it goes on actual dom
//react provides methods that called automatically at each point in the life cycle.
// phases : mounting updating unmounting error handling
//mouting actual dom new element create dom 
//mouting method :-A component mount when it is created and first inserted into DOM i.e it is renderedd for the first time
//constructor() method:- is called before anything else ,when the component is initiated and it is the natural place to set up the inital state and other inital values.

//render():- React renders HTML to the web Page by using a function called render().
//The purpose of the function is to display the specified HTML code inside the specified html element   

//componentdidmount() :- method  runs after the component output has been rendered to the dom that means component render (print ) hone k baad componentdidMount() call hoga.
//componentDidMount() only runs once after the first render. componentDidMount() may be called multiple times if the key prop value for the component changes.

//The React useEffect() hook can be used as the functional component alternative for the class component lifecycle method componentDidMount() -->[]


//note :- render() method is required and will always be called ,the others are optional and will be called if you define them .

// 1)construtor first call then 2) render call then 3) componentdidmountcall.
 

import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleMethod extends Component {
   constructor(props){
    console.log("lifeCycle: constructor");
    super(props)
    this.state={
        name: "Ajay"
    }
   }
 static getDerivedStateFromProps(props,state){
      console.log("lifeCycle : getdrivedstatefromProps ")
      return null;
 }


 componentDidMount(){
     console.log(" lifecycle: componentDid mount")
 }
    render() {
        console.log("lifecycle: Render ");
        return (
            <div>
                <h1> Life cycle method</h1>
                <LifeCycleB/>
            </div>
        );
    }
}

export default LifeCycleMethod;


//o/p:
//lifeCycle: constructor
// LifeCycleMethod. lifeCycle : getdrivedstatefromProps 
// LifeCycleMethod lifecycle: Render 
// LifeCycleB lifeCycleB : constructor
// LifeCycleB lifeCycleB : getdrivedstatefromProps 
// LifeCycleB lifecycleB: Render 
// LifeCycleB  lifecycleB: componentDid mount
// LifeCycleMethod lifecycle: componentDid mount