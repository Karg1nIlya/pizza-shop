import {useEffect, useReducer, useRef, useState} from 'react'
import { ICart, IPizza } from '../../models'
import reducerCart from '../components/reducer/reducerCart'
import {data} from '../data/data'

export function usePizza() {
  const [pizza, setPizza] = useState<IPizza[]>(data)
  const [isLoading, setIsLoading] = useState(true)
  const cartRef = useRef<ICart[]>([])
  const categoryRef = useRef<number>(0)
  const sortRef = useRef<string>('популярности')
  const [state, dispatch] = useReducer(reducerCart, {count:cartRef.current.length, sumCart: 0})

  useEffect(() => {
    setIsLoading(true)
    setPizza(data)
    setIsLoading(false)
    sortRef.current = 'популярности'
  }, [])

  return { pizza, setPizza, cartRef, isLoading, categoryRef, sortRef, dispatch, state }
}