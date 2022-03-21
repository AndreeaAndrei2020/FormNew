import "./App.css";
import { Component } from "react";
import React from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: [3,4],
      todo: "",
      name: [{ text: "andreea" }, { text: "andrei" }],
      students: [
        { name: "Andreea ", age: 22 },
        { name: "Tudor", age: 24 },
      ],
      todos: [{content: "React"},{content: "HTML"}],
        empty : "",
        names :[{text: 'Andreea' , id : 1 , done: false}]
      
    }

  }

plusAge= (event) =>{
  this.setState(
    {
      todo: event.target.value
    })
}



valueChange= (e) =>{
 console.log(e.target.value)
 this.setState({
  todo : e.target.value
 })


}
valueSubmit =(ev)=>{
  ev.preventDefault();
  console.log("value", ev)
  this.setState(
    {
  
     todos : [ ...this.state.todos,
       {content : this.state.todo}
      ]

  })

  this.setState({
    todo: ""
  })
}


  formChange=(e)=>{
    console.log(e.target.value)
    this.setState(
      { empty: e.target.value }
      )
  }

   formSubmit=(event)=>{
     event.preventDefault();
     function number() {
      return Math.floor(Math.random() * 10);
    }
        this.setState({
    
          names: [
          ...this.state.names,
          {text : this.state.empty , id: number(), done: false}
           ] })
         this.setState({
           empty : ''
         })
   }
 togle= (ev )=>{
      this.state.names.map((x)=>{
       if(x.id === ev )

           {
             console.log("DA", x.names)
              return "x.names";}
            else {
              console.log("nu" , x.names)
               return "x.names";}
     })
 }



  render(){
    console.log("dfdsf", this.state);
    return (
      <div>
        <h1> Let `s gooo</h1>
        <p>{this.state.age}</p>
        <p>
          {this.state.name.map((x) => {
            return <li>{x.text}</li>;
          })}
        </p>

        <p id="demo"></p>
        <p>
          {this.state.students.map((x) => {
            return (
              <>
              <li>
                {x.name} is {x.age} years old
              </li>
               
             </>
            );
          })}
        </p>
    <li>
     todo:  {this.state.todo}
    </li>
       
        <form>
          <input type="text" name="fname" onChange={this.plusAge}></input>{" "}
          <input type="submit" value="Submit"></input>
          <br></br>
          
        </form>
        <br></br>      <br></br>      <br></br>


   <form onSubmit={this.valueSubmit}>
     <input type='text' placeholder="Enter your name" onChange={this.valueChange} value={this.state.todo} ></input>
     <input type='submit' value='Submit' ></input>
   </form>
       <div>
         {this.state.todos.map((x)=>{
           return(<li>{x.content}</li>)
         })}
       </div>




      <form onSubmit={this.formSubmit}>
        <input type='text' onChange={this.formChange} placeholder='Enter your name' value={this.state.empty}></input>
        <input type="submit" value='Add'></input>
      </form>
      <div>
        {
          this.state.names.map((x)=>{
            return(
             <> 
              <input type='checkbox' id='merge' onChange={()=>this.togle(x.id)
                
              }></input>
              <li>
                {x.text}
              </li></>
            
            )
          })
        }



      </div>

 


      </div>




      
    );
  }
}
export default App;
