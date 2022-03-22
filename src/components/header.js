import React  from 'react'
import "../projectForm.css"
export default function Header(props){
  
        return (
            <>
            <div id="amount">
                   <p id="startedAmount"> Started amount:{props.startAmount}</p>
                   <p id='totalAmount'> Total amount: {props.totalAmount}</p>
                       
                </div>

                <div id="nameAndData">@AndreiAndreea- 11/03/2022</div>
            </>
        )
    
}
