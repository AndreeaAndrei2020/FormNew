import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }

  }

   
  componentDidMount() {
    console.log("didMount")
    
  }
  onCountClick = () => {
    this.setState({ number: this.state.number + 1 })
  }
  
  render() {
    return (
      <div className=''>
        <h1>home page</h1>
        <Link to='/pages' > Pages </Link>
        <button onClick={this.onCountClick}> number: {this.state.number}</button>
      </div>
    )

  }

}
export default FormComponent
  


