import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Category from "./components/Category/Category";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Ebooks from "./components/Ebooks/EBooks"
import AuthorHighlights from "./components/AuthorHighlights/AuthorHighlights"
import ReadingChallenges from "./components/ReadingChallenges/ReadingChallenges"
import GiftCards from "./components/GiftCards/GiftCards"
import HelpCenter from "./components/HelpCenter/HelpCenter"
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/book_store/" element={<HomePage/>} />
        <Route path="book_store/category/:categoryId" element={<Category/>}/>
        <Route path="book_store/about/" element={<About/>}/>
        <Route path="book_store/contact" element={<Contact/>}/>
        <Route path="book_store/e_books" element={<Ebooks/>} />
        <Route path="book_store/author_highlights" element={<AuthorHighlights/>}/>
        <Route path="book_store/reading_challenges" element={<ReadingChallenges/>}/>
        <Route path="book_store/gift_cards" element={<GiftCards/>}/>
        <Route path="book_store/help_center" element={<HelpCenter/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
