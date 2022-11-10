import React, { useContext, useEffect, useState } from "react";
import { ICart } from "../../../../models";
import { Context } from "../../context/context";
import "./cartPizzaItem.css"

interface ICartPizzaItem {
    pizza: ICart,
    onRemoveItem: (id: number)=>void, 
    // onAddItem: (id:number) => void,
    // onMinusItem: (id:number) => void
}

export function CartPizzaItem({pizza, onRemoveItem}: ICartPizzaItem) {
    const {cartRef, dispatch} = useContext(Context)
    const typePizza = ['тонкое', 'традиционное']
    const [sumPrice, setSumPrice] = useState(0)
    const [countPizza, setCountPizza] = useState(0)
    useEffect(()=>{
        setCountPizza(pizza.count)
        setSumPrice(pizza.count*pizza.price)
    },[])

    const plusPizza = ()=> {
        cartRef.current.forEach((el: ICart)=>{
            if(el.id===pizza.id) {
                el.count+=1
                setCountPizza(el.count)
                setSumPrice(sumPrice+el.price)            
            }
        })
        let sumTmp: number = cartRef.current.reduce((s:number, el:ICart)=>s+=el.count*el.price, 0)
        dispatch({ type: 'add', count: {payload: 1}, sumCart: {payload: sumTmp}})
    }

    const minusPizza = ()=> {
        if(countPizza>1) {
            cartRef.current.forEach((el: ICart)=>{
                if(el.id===pizza.id) {
                    el.count-=1                    
                    setCountPizza(el.count)             
                    setSumPrice(sumPrice-el.price)
                }
            })
            let sumTmp: number = cartRef.current.reduce((s:number, el:ICart)=>s+=el.count*el.price, 0)
            dispatch({ type: 'remove', count: {payload: 1}, sumCart: {payload: sumTmp}})
        }
        else {
            cartRef.current.forEach((el: ICart)=>{
                if(el.id===pizza.id) {
                    onRemoveItem(el.id)
                }
            })
        }
    }

    return (
        <div className="cart__item">
        <div className="cart__item-info">
            <img src={pizza.imageUrl} alt="pizza" />
            <div className="cart__item-title">
                <h2>{pizza.name}</h2>
                <p>{typePizza[pizza.type]}, {pizza.size} см.</p>
            </div>
        </div>
        <div className="cart__item-counter">
            <button className="cart__item-counter-minus-btn" onClick={minusPizza}>
                -
            </button>
            <div className="cart__item-counter-number">
                {countPizza}
            </div>
            <button className="cart__item-counter-plus-btn" onClick={plusPizza}>
                +
            </button>
        </div>
        <div className="counter__item-price">
            <b>{sumPrice} ₽</b>
        </div>
        <button className="cart__item-delete-btn" onClick={()=>onRemoveItem(pizza.id)}>x</button>
    </div>
    )
}