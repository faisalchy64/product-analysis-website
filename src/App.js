import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="reviews" element={<Reviews />}></Route>
            </Routes>
        </div>
    );
}

export default App;
