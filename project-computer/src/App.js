import "./App.css";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import Homepage from "./Layout/Homepage";
import Login from "./Layout/Login";
import Register from "./Layout/Register";
import { Routes, Route } from "react-router-dom";
import Cart from "./Layout/Cart.jsx";
import Phone from "./Layout/phone/Phone.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Phone" element={<Phone />} />
      </Routes>
      {/* <Login /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
