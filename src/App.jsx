import React from 'react'
import Desktop from './Desktop'
import { Routes, Route } from 'react-router-dom'
import Inicio from './core_components/index/index'

export default function App() {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/os"} element={<Desktop />} />
      </Routes>
  </>
  )

}