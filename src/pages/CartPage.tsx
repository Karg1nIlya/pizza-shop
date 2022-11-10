import React, { useContext, useEffect, useState } from "react";
import { ICart } from "../../models";
import { Cart } from "../components/Carts/Cart/Cart";
import { CartEmpty } from "../components/Carts/CartEmpty/CartEmpty";
import { Context } from "../components/context/context";
import "./cartPage.css"

export function CartPage() {
    const { cartRef } = useContext(Context)
    const [pageVisible, setPageVisible] = useState(true)
    // useEffect(()=>{
    //     console.log(cartRef.current)
    // }, [cartRef.current])
    const updateCart = () => {
        setPageVisible(true)
    }
    useEffect(()=>{
        if(cartRef.current.length===0)
            setPageVisible(true)
        else {
            setPageVisible(false)
        }
    },[])

    return (
        <>
        {pageVisible && <CartEmpty></CartEmpty>}
        {!pageVisible && <Cart onUpdateCart={updateCart}/>}
        </>
    )
}