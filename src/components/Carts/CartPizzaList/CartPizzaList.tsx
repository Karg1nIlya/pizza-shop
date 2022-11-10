import React, { useContext } from "react";
import { ICart } from "../../../../models";
import { Context } from "../../context/context";
import { CartPizzaItem } from "../CartPizzaItem/CartPizzaItem";
import './cartPizzaList.css'

interface ICartPizzaList {
    onRemPizza: (id:number) => void
}

export function CartPizzaList({onRemPizza}: ICartPizzaList) {
    const {cartRef} = useContext(Context)

    const removePizza = (id:number) => {
        cartRef.current = cartRef.current.filter((el:ICart)=>el.id !== id)
        onRemPizza(id)
    }    

    return (
        <div className="cart__list">
            {cartRef.current.map((elem: ICart) => {
                return (
                    <CartPizzaItem pizza = {elem} onRemoveItem={removePizza} key={elem.id}></CartPizzaItem>
                )
            })}
        </div>
    )
}