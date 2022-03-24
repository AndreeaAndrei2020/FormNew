import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const mystyle = {
       textAlign: 'center',
       marginTop: '30px'
      };
  return (
    <div style={mystyle}> 
    <h1>home page</h1>
    
    <Link to='/pages' > Pages </Link>
     </div>
  )
}
