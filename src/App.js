import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Main from "./pages/Main"
import Stocks from "./pages/Stocks"
import StockDetail from "./pages/StockDetail"

export default function App(){
    return(
        <div className="App">
                <Nav />
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stocks" element={<Stocks/>}/>
                <Route path="/stocks/:symbol" element={<StockDetail/>}/>
            </Routes>
        </div>
    )
}