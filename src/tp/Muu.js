//videpo 26
//jab bhi aap koi bhi element insert karte ho when you insert any element we called as mounting
//aap ne insert kardiya and phir aapne component may update kardiya usse bolte hai updating jo aapka dom hai usse aapne  element ko remove kardiya usse bolte hai unmounting

//mounting
//The Component rendered to the DOM for the first time.This is called mounting. These Method are called in the following order when an instancr of a component is being created and inserted into the dom .
//constructor()
//static getDerviedStateFromProps() rarely case use
//render()
//componentDidMount()

//Updating
//An update can be caused by changes to props or state.These methods are called in the following order when a component is being re-rendered
//1)static getDerivedStateFromProps() rarely case use
//componentWillReceiveProps(deprecated)
//2)shouldComponentUpdate() rarely case use :- method you can return a bolean value that specifies wheather React should continue with the rendeing or not . the default value is true.
//componentwillUpdate(deprecated) before rendering like as componentWillMount()
//3)render()
//4)getSnapshotBeforeUpdate() rarely case use
//5)componentDidUpdate():-called after the component is updated in dom

//UnMounting
//When component removed from DOM.This is called Unmounting.below methodis called in this phase
//componentWillUnmount()

//The getDerivedStateFromProps() method is used when the state of a component depends on changes of props.

// getDerivedStateFromProps(props, state) is a static method that is called just before render() method in both mounting and updating phase in React. It takes updated props and the current state as arguments.

// We have to return an object to update state or null to indicate that nothing has changed.

import React, { Component } from "react";

export default class Muu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
  }

  updateQtry = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };

  componentDidMount() {
    console.log("component did Mount called");
  }

  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    return (
      <>
        <h1>Hii I am working</h1>
        <h2>{this.state.qty}</h2>
        <button onClick={this.updateQtry}>Updating</button>
      </>
    );
  }
}
