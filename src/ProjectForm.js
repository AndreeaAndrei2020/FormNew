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
    const [totalAmount, setTotalAmount] = useState(getFromLocalstorage('startAmount'))
    const [startAmount, setStartAmount] = useState(getFromLocalstorage('startAmount'))
  

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

    function addWishSubmit(obj) {   /* adaug in vector dorinta si banii */
        if(!obj.errorInputRon) {
        setWishes([
            ...wishes,
            {
                wishText: obj.todoWish,
                money: obj.todoWishRon,
                id: random(),
                startWish: false,
                finishWish: false,
                delete: false,
                edit: false
            }
        ])}
     
    }


    function startwish(id) {
        const _wishes = wishes.map((wish) => {
            if (wish.id === id) {
                if (!wish.startWish) { /* daca e false , adaugam la startAmount */
                    setStartAmount(parseInt(wish.money) + startAmount)
                    setTotalAmount(parseInt(wish.money) + totalAmount)
                    return { ...wish, startWish: !wish.startWish }
                }
            }
            /*daca startWish e true, atunci schimbam valoarea */
            return wish;        /* daca nu, returnam si se va forma tot un array de obiecte */
        })
        setWishes(_wishes)   /* vom updata array ul de obiecte cu noul array de obiecte */
    }

    function finishWish(id) {
        const finish = wishes.map((wish) => {
            if (wish.id === id) {
                if (wish.startWish && !wish.finishWish) {
                    setStartAmount(startAmount - wish.money)
                    return { ...wish, finishWish: !wish.finishWish }
                }
            }
            return wish;
        })
        setWishes(finish)
    }

    function deleteWish(id) {
        const _wishes = wishes.filter(wish => wish.id !== id)    //selectam wishes ca sa scapam de wish ul cu id pe care vrem sa l stergem 
        const deletedWish = wishes.find(wish => wish.id === id)
        setWishes(_wishes)

        if (deletedWish.finishWish) {
            setTotalAmount(totalAmount - deletedWish.money)
            console.log("prima")
        }

        if (deletedWish.startWish && !deletedWish.finishWish) {
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
            <Header startAmount={startAmount} totalAmount={totalAmount} />
            <section>
                <h1>Wish List</h1>
                <div>
                    <FormComponent addWishSubmit={addWishSubmit} />
                    <WishesComponent editInputWish={editInputWish} setUpdateWish={setUpdateWish} wishes={wishes} startwish={startwish} editWish={editWish} deleteWish={deleteWish} finishWish={finishWish} />
                </div>
            </section>
        </>
    )
}

export default ProjectForm
