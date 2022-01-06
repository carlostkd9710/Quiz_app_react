import Question from "../components/Question";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Navbar from "../components/Navbar";

function App(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/question" element={<Question/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;