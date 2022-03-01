
import "./App.css";
import data from "../src/data/db.json";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tours from "./components/tours/Tours";

function App() {
  return (
    <>
    <Header />
    <Tours tours={data}/>
    <Footer />

    </>
  );
}

export default App;
