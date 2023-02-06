
import React, { Component } from 'react';

class LifeCycleB extends Component {
   constructor(props){
    console.log("lifeCycleB : constructor");
    super(props)
    this.state={
        name: "Ajay"
    }
   }
 static getDerivedStateFromProps(props,state){
      console.log("lifeCycleB : getdrivedstatefromProps ")
      return null;
 }


 componentDidMount(){
     console.log(" lifecycleB: componentDid mount")
 }
    render() {
        console.log("lifecycleB: Render ");
        return (
            <div>
                <h1> Life cycle methodB</h1>
            </div>
        );
    }
}

export default LifeCycleB;