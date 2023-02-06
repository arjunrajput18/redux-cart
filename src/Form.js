//video 22
//Form in React Js using State along with Event Handling


import React,{Component} from "react";

export class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            username:"",
            address:""
        }
    }

    handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    
    handleAddress=(e)=>{
        this.setState({
            address:e.target.value
        })
    }


    handleSubmit=(event)=>{
       
        alert(` name ${this.state.username} address ${this.state.address}`)
        event.preventDafault()
    }
//submit by deafult behaviour is whole form is load
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>UserName </label>
                <input type="text" value={this.state.username}
                onChange={this.handleUsername}
                ></input>
            </div>
            <div>
            <label>Address </label>
              <textarea type="text" value={this.state.address}
                onChange={this.handleAddress}></textarea>

            </div>
                <button>Submit</button>
            
            </form>
        )
    }
}

export default Form