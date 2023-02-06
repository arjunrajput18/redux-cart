//video 30
//HTTP Post Request
//in input tag you pass value={this.state.username} so to avoid code large you can do it like in before return()  and right below to render you can write their const {username}=this.state
import React, { Component } from "react";
import axios from "axios";

export default class AxiosMethod extends Component {
  constructor(props){
    super(props) 
    this.state={
      userid :"",
      title :"",
      body :""
    }

  }

changeHandler =(e)=>{
this.setState({[e.target.name]:e.target.value})
}

handleSubmit =(e)=>{
  e.preventDefault()
 console.log(this.state);
  axios.post("https://jsonplaceholder.typicode.com/users",this.state)
  .then(response=>{
    console.log(response);
  })
  .catch(error=>{
    console.log(error);
  })
}

  render() {

    const {userid,title,body}=this.state
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
      <div>
        <label>userID</label>
        <input type="text" value={userid} name="userid" onChange={this.changeHandler}></input>
        </div>
        <div>
        <label>title</label>
        <input type="text" value={title} name="title" onChange={this.changeHandler}></input>
        </div>

        <div>
        <label>body</label>
        <input type="text" value={body} name="body" onChange={this.changeHandler}></input>
        </div>
        <button>Submit</button>
       </form>
      </div>
    );
  }
}
