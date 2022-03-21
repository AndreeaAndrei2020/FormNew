import React from 'react'
import { useState } from 'react'
function About() {
  const [message, setMessage] = useState('Hei you')
  const [todos, setTodos] = useState([{
    name: 'Andreea', id: 1
  }, { name: 'Tudor', id: 2 }])
  const [todo, setTodo] = useState('')
  function addName(ev) {
    console.log(ev.target.value)
    setTodo(ev.target.value)
  }
  function addNameSubm(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        name: todo,
        id: 3
      }
    ])
    setTodo('')
    
  }
  function toggle(){
  
  }
  return (
    <div>

      <h1>Your name: {message}</h1>
      <form onSubmit={addNameSubm}>
        <label>Add your name: </label>
        <input type='text' placeholder='Add your name here' onChange={addName} value={todo}></input>
        <button>Add</button>
      </form>

      <div>
        {todos.map((xname) => {
          return <div>
            <input type='checkbox'/>
            <label key={xname.id}  onChange={()=>
              toggle(todo.id)
            }>{xname.name}</label>
          </div>
        })
        }
      </div>
    </div>
  )
}

export default About