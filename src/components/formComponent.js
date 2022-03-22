import React from 'react'

function FormComponent(props) {
    return (
        <form id='formId' onSubmit={props.addWishSubmit}>

            <input id="inputWish" placeholder='Add your wish' onChange={props.onWishTextChange} value={props.todoWish} />
            <input id="inputCash" placeholder='Add $' onChange={props.onMoneyTextChange} value={props.todoWishRon} />
            {
                props.errorInputRon ? <p> Please complete corectly all fields!</p> : ""
            }
            <button id='buttonAdd' type='submit'>Add</button>

        </form>
    )
}

export default FormComponent