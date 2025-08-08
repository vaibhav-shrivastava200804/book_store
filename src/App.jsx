  import React, { useEffect,useState } from "react";
  import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
  import HomePage from "./components/HomePage/HomePage";
  import Navbar from "./components/Navbar/Navbar";
  import Footer from "./components/Footer/Footer";
  import Category from "./components/Category/Category";
  import About from "./components/About/About";
  import Contact from "./components/contact/Contact";
  import Ebooks from "./components/Ebooks/EBooks";
  import AuthorHighlights from "./components/AuthorHighlights/AuthorHighlights";
  import ReadingChallenges from "./components/ReadingChallenges/ReadingChallenges";
  import GiftCards from "./components/GiftCards/GiftCards";
  import HelpCenter from "./components/HelpCenter/HelpCenter";
import SearchResult from "./components/searchResult/SearchResult";
  // This component handles scroll-to-top on route change
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };




  const AppRoutes = () => {
    return (
      <>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/e_books" element={<Ebooks />} />
          <Route path="/author_highlights" element={<AuthorHighlights />} />
          <Route path="/reading_challenges" element={<ReadingChallenges />} />
          <Route path="/gift_cards" element={<GiftCards />} />
          <Route path="/help_center" element={<HelpCenter />} />
          <Route path="/search/:searchItem" element={<SearchResult/>}/>
        </Routes>
        <Footer />
      </>
    );
  };

    const App = () => {
      return (
        <Router>
          <AppRoutes />
        </Router>
      );
    };

  export default App;
