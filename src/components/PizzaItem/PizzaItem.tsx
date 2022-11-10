import React, { useContext, useEffect, useState } from "react";
import { ICart, IPizza } from "../../../models";
import { Context } from "../context/context";
// import { Context } from "../context/context";
// import "./pizzaList.css"

  interface IPizzaItem {
    elem: IPizza,
  }

export function PizzaItem({elem}: IPizzaItem) {    
    const {cartRef, dispatch, state} = useContext(Context)
    // const [state, dispatch] = useReducer(reducerCart, {count: cartRef.current.length})
    // const [pizza, setPizza] = useState<IPizza>(elem)
    // const {sortRef} = React.useContext(Context)
    const typePizza = ['тонкое', 'традиционное']
    const [activeType, setActiveType] = useState(elem.type[0]);
    const [activeSize, setActiveSize] = useState(elem.size[0]);
    const [clickIndicator, setClickIndicator] = useState(0)
    const [price, setPrice] = useState(0)
    useEffect(()=>{ 
        let count = 0
        if(cartRef.current.length!==0) {
            cartRef.current.forEach((el:ICart)=>{
                if(el.name==elem.name) {
                    count += el.count
                }
            })
            setClickIndicator(clickIndicator+count)
        }
    }, [])
    
    const updateSelectorSize = (tp: number, i: number) => {   
        setActiveSize(tp)
        setPrice(i)
    }

    const updateSelectorType = (tp: number) => {
        setActiveType(tp)
    }

    function newId(): number {
        let key: number = Math.random()*1000000
        cartRef.current.forEach((el:ICart)=>{
            if(el.id===key) {
                newId()
            }
        })
        return key
    }

    const addCart = () => {
        setClickIndicator(clickIndicator+1)
        let pizzaTmp: ICart = {
            id: newId(),
            imageUrl: elem.imageUrl,
            name: elem.name,
            type: activeType,
            size: activeSize,
            price: elem.price[price],
            count: 1
        }
        if (cartRef.current.lenght === 0) {
            cartRef.current = [pizzaTmp]
        }
        else {
            let flag = {
                ind: false
            }
            cartRef.current.forEach((el:ICart) => {
                if(el.name === pizzaTmp.name && el.size === pizzaTmp.size && el.type === pizzaTmp.type) {
                    console.log(el)
                    el.count++
                    flag.ind=true
                }
            });
            if(!flag.ind) {
                cartRef.current.push(pizzaTmp)
            }
        }
        dispatch({ type: 'add', count: {payload: 1}, sumCart: {payload: state.sumCart + elem.price[price]}})
    }
    
    return (
        <div className="pizza" key={elem.id}>
            <img className="pizza__img" src={elem.imageUrl} alt="pizza-img" />
            <h2 className="pizza__title">{elem.name}</h2>
            <div className="pizza__description">{elem.description}</div>
            <div className="pizza__selector">
                <ul>
                    {elem.type.map((elem, i)=>{
                        return (<li className={elem === activeType ? 'active' : ''} onClick={()=>updateSelectorType(elem)} key={i} >{typePizza[elem]}</li>)
                    })}
                </ul>
                <ul>
                    {elem.size.map((elem, i)=>{
                        return (
                            <li className={elem === activeSize ? 'active' : ''} onClick={()=>updateSelectorSize(elem, i)} key={i} >{elem} см.</li>
                        )
                    })}
                </ul>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">за {elem.price[price]} ₽</div>
                <button className={clickIndicator===0 ? "pizza__add-btn" : "button-active pizza__add-btn"} onClick={addCart}>
                    <div>+</div>
                    <span>Добавить</span>
                    <i>{clickIndicator === 0 ? '' :  clickIndicator}</i>
                </button>
            </div>
        </div> 
    )
}
