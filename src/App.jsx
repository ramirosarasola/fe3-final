
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path='/detail/:id' element={<Detail/>}>
            </Route>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/favs" element={<Favs/>} />
          </Routes>
          <Footer/>

      </div>
  );
}

export default App;
