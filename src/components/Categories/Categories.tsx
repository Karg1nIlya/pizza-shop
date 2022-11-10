import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import "./categories.css"

interface ICategories {
    categories: string[], 
    onChangeCategory: () => void 
}

export function Categories({categories, onChangeCategory}: ICategories) {
    const {categoryRef} = useContext(Context)
    const [activeCategor, setActiveCategor] = useState(categoryRef.current)

    const changeCategory = (index: number) => {
        categoryRef.current = index
        setActiveCategor(index)
        onChangeCategory()
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((name, i) => {
                    return <li className={activeCategor === i ? 'active' : ''} onClick={()=>changeCategory(i)} key={i}>{name}</li>
                })}
            </ul>
        </div>
    )
}
