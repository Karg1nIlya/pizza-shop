import React from "react";
import { Link } from "react-router-dom";
import "./cartEmpty.css"

const emptyCart = require("../../../img/empty-cart.png")

export function CartEmpty() {
    return (
        <div className="cart-empty">
            <div className="container">
                <h1 className="cart-empty__title">
                    Корзина пустая 😕
                    {/* <icon>😕</icon> */}
                </h1>
                <div className="cart-empty__subtitle">
                    <p >
                        Вероятней всего, вы не заказывали ещё пиццу.
                        <br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                </div>
                <img src={emptyCart} alt="empty-cart"/>
                <Link to="/">Вернуться на главную</Link>
            </div>
        </div>
    )
}