import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/context";
import "./header.css"

const logo = require("../../img/image 1.svg")
const cart = require("../../img/cart.svg")

export function Header() {
    const {state} = useContext(Context)
    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt="pizza-logo"/>
                    <div className="header__logo-name">
                        <h1>MY PIZZA</h1>
                        <p>Самая вкусная пицца в галактике</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Link to="./cart" className="button button-cart">
                        <span>{state.sumCart} ₽</span>
                        <div className="button-cart__delimeter"></div>
                        <img src={cart} alt="cart-logo"/>
                        <span>{state.count}</span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}