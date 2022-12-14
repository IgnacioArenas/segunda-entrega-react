import React from "react";
import { useEffect } from "react";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./pages/Home";
import Campeones from "./pages/Campeones";
import Runas from "./pages/Runas";
import Detail from "./pages/Detail";
import { useState } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='campeones' element={<Campeones/>}/>
          <Route path='campeon/:name' element={<Detail/>}/>
          <Route path='runas' element={<Runas/>}/>
        </Routes>
    </BrowserRouter>
  )
  const [champion, setChampion] = useState(null);
  useEffect(() => {
    fetch('')
    .then((response) => response.json())
    .then((response) => {
      console.log('response:', response)
      setChampion(response)
    })
    .catch((error) => {
      console.error("Error al consultar la API: ", error);
    })
  }, [])
}

export default App;