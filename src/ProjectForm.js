import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import FormComponent from './components/FormComponent'
import "./projectForm.css"
import WishesComponent from './components/WishesComponent';

function ProjectForm() {


    const getFromLocalstorage = (key) => {
        const items = localStorage.getItem(key);
        if (items)
            return JSON.parse(items)
        return null
    }
    const [wishes, setWishes] = useState(getFromLocalstorage('list'));
    const [todoWish, setTodoWish] = useState('')  /* ce wish introduc  in input*/
    const [todoWishRon, setTodoWishRon] = useState('')  /* ce wish RON introduc  in input*/
    const [totalAmount, setTotalAmount] = useState(getFromLocalstorage('startAmount'))
    const [startAmount, setStartAmount] = useState(getFromLocalstorage('startAmount'))
    const [errorInputRon, setErrorInputRon] = useState(false)

    //after render, and after the component is changed
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(wishes))
    }, [wishes])
    useEffect(() => {
        localStorage.setItem("startAmount", JSON.stringify(startAmount))
    }, [startAmount])

    useEffect(() => {
        localStorage.setItem("totalAmount", JSON.stringify(totalAmount))
    }, [totalAmount])


    function random() {
        return Math.floor(Math.random() * 50444);
    }




    function addWishSubmit(e) {   /* adaug in vector dorinta si banii */
        e.preventDefault()
        setWishes([
            ...wishes,
            {
                wishText: todoWish,
                money: todoWishRon,
                id: random(),
                startWish: false,
                finishWish: false,
                delete: false,
                edit: false
            }
        ])
        setTodoWish('')
        setTodoWishRon('')



    }
    function onWishTextChange(e) {   /* retin dorinta pentru a o putea pune in usestate */

        setTodoWish(e.target.value)
    }
    function onMoneyTextChange(e) {      /* retin dorinta Ron pentru a o putea pune in usestate */
        if (!/^[0-9]+$/.test(e.target.value))
            setErrorInputRon(true)
        else {
            setErrorInputRon(false)
            setTodoWishRon(e.target.value)
        }
    }

    function startwish(id) {

        const start = wishes.map((x) => {
            if (x.id === id) {
                if (!x.startWish) { /* daca e false , adaugam la startAmount */
                    setStartAmount(parseInt(x.money) + startAmount)
                    setTotalAmount(parseInt(x.money) + totalAmount)
                    return { ...x, startWish: !x.startWish }
                }
                else {   /* daca nu , doar mergem mai departe cu return ul de obiecte */
                    return x;
                }

            }
            /*daca startWish e true, atunci schimbam valoarea */
            else return x;        /* daca nu, returnam si se va forma tot un array de obiecte */

        })
        setWishes(start)   /* vom updata array ul de obiecte cu noul array de obiecte */
    }
    function finishWish(id) {
        const finish = wishes.map((x) => {
            if (x.id === id) {
                if (x.startWish & !x.finishWish) {
                    setStartAmount(startAmount - x.money)
                    return { ...x, finishWish: !x.finishWish }
                }
                else return x;
            }
            else return x;

        })
        setWishes(finish)
    }
    function deleteWish(id) {

        const _wishes = wishes.filter(wish => wish.id !== id)    //selectam wishes ca sa scapam de wish ul cu id pe care vrem sa l stergem 
        const deletedWish = wishes.find(wish => wish.id === id)

        setWishes(_wishes)

        if (deletedWish.startWish & deletedWish.finishWish) {
            setTotalAmount(totalAmount - deletedWish.money)
            console.log("prima")
        }
        if (deletedWish.startWish & !deletedWish.finishWish) {
            setTotalAmount(totalAmount - deletedWish.money)
            setStartAmount(startAmount - deletedWish.money)
            console.log("doi")
        }

    }

    function editWish(id) {
        const _wishes = wishes.map(wish => {
            if (wish.id === id) {
                return { ...wish, edit: true, wishText: wish.wishText }
            }
            return wish;
        })
        setWishes(_wishes)
    }

    function editInputWish(e, id) {  /* pentru a schimba valoarea inputului (onChange) */
        const _wishes = wishes.map(wish => {
            if (wish.id === id) {
                return { ...wish, edit: true, wishText: e.target.value }
            }
            return wish;
        })
        setWishes(_wishes)
    }
    function setUpdateWish(id) {

        const update = wishes.map((wish) => {
            if (wish.id === id) {
                return { ...wish, edit: false }
            }
            return wish
        })
        setWishes(update)
    }



    return (
        <>
            <Header startAmount={startAmount} totalAmount={totalAmount}></Header>
            <section>
                <h1>Wish List</h1>
                <div>
                    <FormComponent errorInputRon={errorInputRon} addWishSubmit={addWishSubmit} onWishTextChange={onWishTextChange} todoWish={todoWish} onMoneyTextChange={onMoneyTextChange} todoWishRon={todoWishRon}></FormComponent>
                    <WishesComponent editInputWish={editInputWish} setUpdateWish={setUpdateWish} wishes={wishes} startwish={startwish} editWish={editWish} deleteWish={deleteWish} finishWish={finishWish}></WishesComponent>
                </div>
            </section>

        </>

    )
}

export default ProjectForm