import "./App.css";
import Section1 from "./components/section1";
import Navbar from "./components/Navbar";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Footer from "./components/Footer";
import OrderDetails from "./components/OrderDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/Meals" element={<Section2 />}> 
        
          </Route>
       <Route path="/Meals/:id" element={<OrderDetails/>}/>
        <Route path="/Gallery" element={<Section3 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
