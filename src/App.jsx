import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Category from "./components/Category/Category";
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/book_store/" element={<HomePage/>} />
        <Route path="book_store/:categoryId" element={<Category/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
