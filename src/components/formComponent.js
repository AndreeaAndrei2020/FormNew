import React, { Component } from 'react'

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { todoWish: '', todoWishRon: '', errorInputRon: false }  ///like useState(0), astea sunt locale si le voi transmite la Parinte cu functia  addWishSubmit
    }
    onWishTextChange = (e) => {   /* retin dorinta pentru a o putea pune in usestate */
        this.setState({ todoWish: e.target.value }) ///like setTodoWish(todowish: 4)
    }
    onMoneyTextChange = (e) => {      /* retin dorinta Ron pentru a o putea pune in usestate */
        if (!/^[0-9]+$/.test(e.target.value))
            this.setState({ errorInputRon: true })
        else {
            this.setState({ errorInputRon: false, todoWishRon: e.target.value })
        }
    }

    render() {
        const { todoWish, todoWishRon, errorInputRon } = this.state;
        return (
            <form id='formId' onSubmit={(e) => {
                e.preventDefault();
                this.props.addWishSubmit({ todoWish, todoWishRon, errorInputRon })
                this.setState({ todoWish: '', todoWishRon: '' })
            }
            } >
                
                <input id="inputWish" placeholder='Add your wish' onChange={this.onWishTextChange} value={todoWish} />
                <input id="inputCash" placeholder='Add $' onChange={this.onMoneyTextChange} value={todoWishRon} />
                {
                    errorInputRon ? <p> Please complete corectly all fields!</p> : ""
                }
                <button id='buttonAdd' type='submit'>Add</button>
            </form>
        )
    }
}
export default FormComponent


