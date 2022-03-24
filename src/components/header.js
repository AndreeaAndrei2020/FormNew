import React, { Component } from 'react'

export default  class Header extends Component {
    constructor() {
        super()
        this.state = {}
        }
        render() {
            return (
                <div >
                    <div id="amount">
                        <p id="startedAmount"> Started amount:{this.props.startAmount}</p>
                        <p id='totalAmount'> Total amount: {this.props.totalAmount}</p>

                    </div>

                    <div id="nameAndData">@AndreiAndreea- 11/03/2022 </div>
                </div>
            )
        }
}
