import React from "react";
import { IPizza } from "../../../models";
import "./pizzaList.css"
import { PizzaItem } from "../PizzaItem/PizzaItem";

interface IPiizaList {
    pizzas: IPizza[]
}

export function PizzaList({pizzas}: IPiizaList) {    
    return (
        <div className="content__items">
            {pizzas.map((elem) => {
                return (
                    <PizzaItem elem = {elem} key={elem.id}></PizzaItem>
                )
            })}
        </div>    
    )
}