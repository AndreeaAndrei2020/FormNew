import React,{Component} from 'react'

class WishComponent extends Component{
    render()
    {
        return (
            <div className='addWish' key={this.props.id}>
                {
                    this.props.edit ?
                        <>
                            <input value={this.props.wishText} onChange={(e) => this.props.editInputWish(e, this.props.id)} />
                            <button onClick={() => this.props.setUpdateWish(this.props.id)}>Update Wish</button>
                        </> : <p className={this.props.finishWish ? 'finishText' : ''}>My wish: {this.props.wishText} </p>
                }
                <p> {this.props.money} ron </p>
                <br>
                </br>
                <button onClick={() => this.props.startwish(this.props.id)}>Start Wish</button>
                <button onClick={() => this.props.editWish(this.props.id)}>Edit Wish</button>
                <button onClick={() => this.props.deleteWish(this.props.id)}>Delete Wish</button>
                <button onClick={() => this.props.functionFinishWish(this.props.id)}>Finish Wish</button>
            </div>
    
        )
    }

    
}

export default WishComponent

// ({ id, wishText, edit, editInputWish, setUpdateWish, finishWish ,money,editWish,startwish ,deleteWish,functionFinishWish})
//    <div className='addWish' key={wish.id}>
//     {
//         wish.edit ?
//             <>
//                 <input value={wish.wishText} onChange={(e) => editInputWish(e, wish.id)} />
//                 <button onClick={() => setUpdateWish(wish.id)}>Update Wish</button>
//             </> : <p className={wish.finishWish ? 'finishText' : ''}>My wish: {wish.wishText} </p>
//     }
//     <p> {wish.money} ron </p>
//     <br>
//     </br>
//     <button onClick={() => startwish(wish.id)}>Start Wish</button>
//     <button onClick={() => editWish(wish.id)}>Edit Wish</button>
//     <button onClick={() => deleteWish(wish.id)}>Delete Wish</button>
//     <button onClick={() => finishWish(wish.id)}>Finish Wish</button>
// </div>