import React from "react";
import { IPizza } from "../../../models";
import "./pizzaList.css"
import { PizzaItem } from "../PizzaItem/PizzaItem";
import { Context } from "../context/context";

interface IPiizaList {
    pizzas: IPizza[]
}

export function PizzaList({pizzas}: IPiizaList) {    
    const {sortRef} = React.useContext(Context)

    return (
        <div className="content__items" onClick={()=>console.log(sortRef.current)}>
            {pizzas.map((elem) => {
                return (
                    <PizzaItem elem = {elem} key={elem.id}></PizzaItem>
                )
            })}
        </div>    
    )
}