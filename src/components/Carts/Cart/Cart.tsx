import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ICart } from "../../../../models";
import { Context } from "../../context/context";
import { CartPizzaList } from "../CartPizzaList/CartPizzaList";
import "./cart.css"

interface ICartComp {
    onUpdateCart: () => void
}

export function Cart({onUpdateCart}: ICartComp) {
    const {cartRef, dispatch, state} = useContext(Context)

    const clearCart = () => {
        cartRef.current = []
        onUpdateCart()
        dispatch({ type: 'remove', count: {payload: state.count}, sumCart: {payload: 0}})
    }

    const remPizza = () => {
        let sumTmp: number = cartRef.current.reduce((s:number, el:ICart)=>s+=el.count*el.price, 0)
        if(cartRef.current.length===0) {
            clearCart()
            return
        }
        let countPizzaTmp: number = cartRef.current.reduce((s:number, el:ICart)=>s+=el.count, 0) 
        dispatch({ type: 'remove', count: {payload: state.count-countPizzaTmp}, sumCart: {payload: sumTmp}})
    }

    // const addPizza = () => {
    //     let sumTmp: number = cartRef.current.reduce((s:number, el:ICart)=>s+=el.count*el.price, 0)
    //     dispatch({ type: 'add', count: {payload: 1}, sumCart: {payload: sumTmp}})
    // }

    // const minusPizza = () => {
    //     let sumTmp: number = cartRef.current.reduce((s:number, el:ICart)=>s+=el.count*el.price, 0)
    //     dispatch({ type: 'remove', count: {payload: 1}, sumCart: {payload: sumTmp}})
    // }

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__top">
                    <h1 className="cart__title">
                        <img src="./img/cart-black.jpg" alt="cart" />
                        Корзина
                    </h1>
                    <div className="cart__clear" onClick={clearCart}>
                        <img src="./img/trash.svg" alt="trash" />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <CartPizzaList onRemPizza={remPizza} />                  
                <div className="cart__bottom-details">
                    <div className="cart__bottom-details-counter">
                        Всего пицц: <b>{state.count} шт.</b> 
                    </div>
                    <div className="cart__bottom-details-price">
                        Сумма заказа: <b>{state.sumCart} ₽</b>
                    </div>
                </div>
                <div className="cart__bottom-buttons">
                    <Link to="/">
                        <img src="./img/vector .svg" alt=""/>
                        На главную
                    </Link>
                    <button>Оплатить сейчас</button>
                </div>
            </div>
        </div>
    )
}