
import { Routes, Route } from "react-router-dom";

import "./App.css";

import data from "../src/data/db.json";

import Home from './components/home/Home.jsx';
import Tours from "./components/tours/Tours";
import City from "./components/tours/city/City";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="/tours" element={<Tours tours={data}/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
