import React from 'react'

function WishesComponent({editInputWish,setUpdateWish,wishes, startwish, editWish, deleteWish, finishWish}) {
    return (
        <div >
            {
                wishes.map((wish) => {
                    return <div className='addWish'>
                        {
                           wish.edit ?
                                <>
                                    <input value={wish.wishText} onChange={(e) => editInputWish(e, wish.id)} />
                                    <button onClick={() => setUpdateWish(wish.id)}>Update Wish</button>
                                </> : <p className={wish.finishWish ? 'finishText' : ''}>My wish: {wish.wishText} </p>
                        }
                        <p> {wish.money} ron </p>

                        <br>
                        </br>
                        <button onClick={() => startwish(wish.id)}>Start Wish</button>
                        <button onClick={() => editWish(wish.id)}>Edit Wish</button>
                        <button onClick={() => deleteWish(wish.id)}>Delete Wish</button>
                        <button onClick={() => finishWish(wish.id)}>Finish Wish</button>
                    </div>
                })
            }
        </div>
    )
}

export default WishesComponent