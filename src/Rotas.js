import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Repositorio from "./pages/repositorio";


export default function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/Repositorio/:repositorio" element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    )
}