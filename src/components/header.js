import React  from 'react'

export default function Header(props){
  
        return (
            <>
            <div id="amount">
                    Started amount:{props.startAmount}
                    <br>
                    </br>
                    ...........................<br>
                    </br>
                    Total amount: {props.totalAmount}
                </div>

                <div id="nameAndData">@AndreiAndreea- 11/03/2022</div>
            </>
        )
    
}
