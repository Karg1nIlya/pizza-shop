import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CartPage } from './pages/CartPage';
import { CatalogPage } from './pages/CatalogPage';
import "./app.css"
import { Context } from './components/context/context';
import { usePizza } from './hooks/pizzaHooks';

function App() {
    const {pizza, cartRef, isLoading, categoryRef, sortRef, dispatch, state } = usePizza()
    
    return (
        <div className="wrapper">
            <Context.Provider value={{pizza, cartRef, isLoading, categoryRef, sortRef, dispatch, state}}>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = "/" element={<CatalogPage/>}/>
                <Route path = "/cart" element={<CartPage/>}/>
            </Routes>
            </BrowserRouter>
            </Context.Provider>
        </div> 
    )
}

export default App