import React, { useContext, useEffect, useState } from "react";
import { IPizza } from "../../models";
import { Categories } from "../components/Categories/Categories";
import { Context } from "../components/context/context";
import { PizzaList } from "../components/PizzaList/PizzaList";
import { Sort } from "../components/Sort/Sort";
import "./catalogPage.css"

export function CatalogPage() {
    const {pizza, categoryRef} = useContext(Context)
    const [arr, setArr] = useState<IPizza[]>(pizza)
    const categories: string[] = ['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'] 
    useEffect(()=>{
        changeArr()        
    },[])

    function includes(pizza: IPizza, categor: number): boolean {
        for(let p of pizza.category) {      
            if(p===categor) {
                return true
            }
        }
        return false
    }

    const changeArr = ()=> {
        setArr(pizza)
        let arrTmp = pizza
        switch (categoryRef.current) {
            case 1: {
                setArr(arrTmp.filter((i: IPizza) => includes(i, 1)))
                break;
            }
            case 2: {
                setArr(arrTmp.filter((i: IPizza) => includes(i, 2)))
                break;
            }
            case 3: {
                setArr(arrTmp.filter((i: IPizza) => includes(i, 3)))
                break;
            }
            case 4: {
                setArr(arrTmp.filter((i: IPizza) => includes(i, 4)))
                break;
            }
            case 5: {
                setArr(arrTmp.filter((i: IPizza) => includes(i, 5)))
                break;
            }
            case 6: {
                setArr(arrTmp.filter((i: IPizza) => includes(i, 6)))
                break;
            }
            default:
                break;
        }
    }

    const sortPizza = (param: string) => {
        let arrTmp: IPizza[] = arr
        switch (param) {
            case "популярности": {
                for (let j = arrTmp.length - 1; j > 0; j--) {
                    for (let i = 0; i < j; i++) {
                      if (arrTmp[i].rating > arrTmp[i + 1].rating) {
                        let temp = arrTmp[i];
                        arrTmp[i] = arrTmp[i + 1];
                        arrTmp[i + 1] = temp;
                      }
                    }
                    
                }
                break;
            }
            
            case "цене": {
                for (let j = arrTmp.length - 1; j > 0; j--) {
                    for (let i = 0; i < j; i++) {
                      if (arrTmp[i].price[0] > arrTmp[i + 1].price[0]) {
                        let temp = arrTmp[i];
                        arrTmp[i] = arrTmp[i + 1];
                        arrTmp[i + 1] = temp;
                      }
                    }
                    
                }
                break;
            }

            case "алфавиту": {
                for (let j = arrTmp.length - 1; j > 0; j--) {
                    for (let i = 0; i < j; i++) {
                      if (arrTmp[i].name > arrTmp[i + 1].name) {
                        let temp = arrTmp[i];
                        arrTmp[i] = arrTmp[i + 1];
                        arrTmp[i + 1] = temp;
                      }
                    }
                    
                }
                break;
            }

            default:
                break;
        }
        
        setArr([])
        setTimeout(()=>setArr(arrTmp), 1)
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories categories={categories} onChangeCategory={changeArr}></Categories>
                    <Sort onSort = {sortPizza}></Sort>
                </div>
                <h1 className="content__title">Все пиццы</h1>
                <PizzaList pizzas = {arr}></PizzaList>
            </div>
        </div>
    )
}