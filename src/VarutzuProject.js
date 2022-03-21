import React, { useState } from 'react'
import "./VarutzuProject.css"

function VarutzuProject() {
    const [wishes, setWishes] = useState([])
    const [todoWish, setTodoWish] = useState('')
    const [todoWishRon, setTodoWishRon] = useState('')
    const [totalSuma, setTotalSuma] = useState(0)
    const [startedSuma, setStartedSuma] = useState(0)
    const [formError, setFormError] = useState(false);
    const [editWish,setEditWish]=useState({editabile : false , id : null , value : ''})
    

    function addWish(e) {
        console.log(e.target)
        setTodoWish(e.target.value)

    }
    function addWishRon(e) {
        console.log(e.target)
        setTodoWishRon(e.target.value)

    }
    function randomNr() {
        return Math.floor(Math.random() * 50444);
    }
    function addWishSubmit(e) {
        e.preventDefault();
        if (todoWishRon != parseInt(todoWishRon) || todoWishRon === '' || todoWish === '') {
           setFormError(true)
        }
        else {
            const today = new Date();
            const date = new Date()
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            const fullDate = `${day}/${month}/${year}         ${time}`;

            setFormError(false)
            
            setWishes([
                ...wishes,
                {
                    wish: todoWish, money: todoWishRon, idStart: randomNr(), doneStart: false, doneFinish: false, data: fullDate, doneDelete: false
                }
            ])

            const sum = parseInt(todoWishRon) + totalSuma;
            setTotalSuma(sum)

        }

        setTodoWish('')
        setTodoWishRon('')


    }
    function butonStart(e) {
        console.log("id: ", e)


        const startW = wishes.map((i) => {
            if (i.idStart === e) {

                if (!i.doneStart) {
                    console.log(i.doneStart)
                    setStartedSuma(parseInt(i.money) + startedSuma)
                    return { ...i, doneStart: !i.doneStart }
                }
                else return i

            }

            else
                return i
        })

        setWishes(startW)

    }

    function butonFinish(e) {
        console.log("id: ", e)


        const doneW = wishes.map((i) => {
            if (i.idStart === e) {

                if (!i.doneFinish & i.doneStart) {
                    console.log(i.doneFinish)
                    setStartedSuma(startedSuma - parseInt(i.money))
                    return { ...i, doneFinish: !i.doneFinish }
                }
                else return i

            }

            else
                return i
        })

        setWishes(doneW)



    }

    function buttonDelete(e) {
        const doneD = wishes.map((i) => {
            if (i.idStart === e) {

                if (!i.doneDelete) {
                    if (i.doneStart) {
                        if (i.doneFinish)
                            setTotalSuma(totalSuma - i.money)
                        else {
                            setTotalSuma(totalSuma - i.money)
                            setStartedSuma(startedSuma - i.money)
                        }
                    }

                    setTotalSuma(totalSuma - i.money)
                    return { ...i, doneDelete: !i.doneDelete }

                }

                else return i

            }

            else
                return i
        })

        setWishes(doneD)

    }
    function editButton(id,value){
            setEditWish({editabile: true , id , value})
            

    }
    function editWishInput(e){   //mereu cand adaug un wish nou ( edit ) , se va apela functia
        console.log("hei ", e)
        
       setEditWish({...editWish , value :  e.target.value})

    }

    function setUpdateWish(id){
        console.log({wishes})
        const wish1 = wishes.find(({idStart})=> idStart === id ) ///gasesc id ul 
        console.log("ASDa" , wish1)
        console.log("SDASD", editWish.value)
      const wish2 = wishes.map((i)=>{
          if(i.idStart===id) 
          { console.log("id!", id , i.idStart)
          return { ...i, wish : editWish.value }
      }
        else return i
         
      })
      setWishes(wish2)
        console.log("andreea " , wish2 )
        console.log( {wishes})
        setEditWish({...editWish, editabile: false})

    }
    console.log({editWish})
    return (

        <>
            <div id="startedAmount">
                Started amount: {startedSuma}
                <br>
                </br>
                ...........................<br>
                </br>
                Total amount: {totalSuma}
            </div>
            <div id="name">  @AndreiAndreea- 11/03/2022</div>
            <header>
                <h1>Wish List</h1>
                <div id='form'>
                    <div id="formdiv">
                        <form onSubmit={addWishSubmit}>
                            <input id='input1' className='formInput' placeholder='Add Wish' onChange={addWish} value={todoWish} />
                            <input id='input2' className='formInput' placeholder='Add ron' onChange={addWishRon} value={todoWishRon} />
                            <button type='submit'>
                                Add Wish!
                            </button>
                           {   formError ?  <p id='alerta'>Enter a number, not a string !!!</p> : '' }
                        </form>
                    </div>
                    <div id="divWishes"   >
                        {wishes.map((x) => {
                            return <div className="divWishes1" key={x.idStart} style={{ display: x.doneDelete ? 'none' : 'block' }}>
                                <p className={x.doneFinish ? 'done' : null} >
                                    {  editWish.editabile ? 
                                     <>   
                                       <input value={editWish.value} onChange={editWishInput}/>
                                       <button onClick={()=>setUpdateWish(x.idStart)}>Update Wish</button>  </> 
                                    : x.wish } 
                                    /// {x.money} ron
                                    <br>
                                    </br>
                                </p>
                                Wish added on:  {x.data}
                                <br>
                                </br>
                                <div id='btn'>
                                    <button onClick={()=> editButton(x.idStart,x.wish)}>Edit Wish</button>
                                    <button onClick={() => buttonDelete(x.idStart)}>Delete Wish</button>
                                    <button onClick={() => butonStart(x.idStart)}>Start Wish</button>
                                    <button onClick={() => butonFinish(x.idStart)} >Finish Wish</button>
                                </div>
                            </div>
                        })}

                    </div>

                </div>


            </header>


        </>
    )
}

export default VarutzuProject