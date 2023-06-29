import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFunctionForm from "./components/TextFunctionForm";

import { BrowserRouter as BsrRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BsrRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TextFunctionForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BsrRouter>
    </>
  );
}

export default App;
