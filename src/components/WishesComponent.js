import React from 'react'

function WishesComponent(props) {
    return (
        <div >
            {
                props.wishes.map((wish) => {
                    return <div className='addWish'>
                        {
                           wish.edit ?
                                <>
                                    <input value={wish.wishText} onChange={(e) => props.editInputWish(e, wish.id)} />
                                    <button onClick={() => props.setUpdateWish(wish.id)}>Update Wish</button>
                                </> : <p className={wish.finishWish ? 'finishText' : ''}>My wish: {wish.wishText} </p>
                        }
                        <p> {wish.money} ron </p>

                        <br>
                        </br>
                        <button onClick={() => props.startwish(wish.id)}>Start Wish</button>
                        <button onClick={() => props.editWish(wish.id)}>Edit Wish</button>
                        <button onClick={() => props.deleteWish(wish.id)}>Delete Wish</button>
                        <button onClick={() => props.finishWish(wish.id)}>Finish Wish</button>
                    </div>
                })
            }
        </div>
    )
}

export default WishesComponent