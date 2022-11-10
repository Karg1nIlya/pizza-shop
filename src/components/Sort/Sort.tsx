import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/context";
import "./sort.css"

const arrowTop = require("../../img/arrow-top.svg")

interface ISort {
    onSort: (param: string) => void
}

export function Sort({onSort}: ISort) {
    const [valSort, setValSort] = useState(false)
    const [arrSort, setArrSort] = useState<Map<string,string>>(new Map([['популярности', 'active'], ['цене', ''], ['алфавиту', '']]))
    const [paramSort, setParamSort] = useState('популярности')
    const {sortRef} = useContext(Context)
    const sortLink = useRef<HTMLDivElement | null>(null)

    const handleClick = (ev: globalThis.MouseEvent) => {
        if(!ev.path.includes(sortLink.current)){
            setValSort(false)
        }
    }

    useEffect(()=>{
        document.body.addEventListener('click', function(ev) {
            handleClick(ev);
        })
    }, [])


    const setVisibleLabel = () => {
        setValSort(!valSort)
        if(valSort == false)
            (document.getElementById('arrow-top') as HTMLImageElement).style.transform = 'scaleY(-1)'
        else 
            (document.getElementById('arrow-top') as HTMLImageElement).style.transform = 'scaleY(1)'
    }

    const changeSortParam = (param: string) => {
        setParamSort(param)
        let arr: Map<string,string> = new Map([['популярности', ''], ['цене', ''], ['алфавиту', '']])
        arr.set(param, 'active')
        setArrSort(arr)
        sortRef.current = paramSort
        onSort(param)
    }

    return (
        <div ref={sortLink} className="sort">
            <div className="sort__label">
                <img id='arrow-top' src={arrowTop} alt="arrow-top"/>
                <b>Сортировка по:</b>
                <span onClick={ setVisibleLabel }>{paramSort}</span>
            </div>
            {valSort && <div className="sort__pop-up">
                <ul>
                    <li className={arrSort.get('популярности')} onClick={()=>changeSortParam('популярности')}>популярности</li>
                    <li className={arrSort.get('цене')} onClick={()=>changeSortParam('цене')}>цене</li>
                    <li className={arrSort.get('алфавиту')} onClick={()=>changeSortParam('алфавиту')}>алфавиту</li>
                </ul>
            </div>}
            
        </div>
    )
}