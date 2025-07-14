import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/books.svg"; // Update path as per your structure
import { Link } from "react-router-dom";
const Footer = () => {
  const genres=[
                "Fantasy",
                "Technology",
                "Romance",
                "Mystery",
                "Biography",
                "Self Help",
                "History",
                "Children",
              ]

  const quickLinks=[
    { id:1,name:"Home",link:"/"},
    { id:2,name:"Best Sellers", link:"book_store/best_sellers"},
    { id:3,name:"Contact Us", link:"/contact"},
    { id:4,name:"About Us", link:"/about" }
  ]

  const additionalLinks = [
    { id: 1, name: "E-books", link: "/e_books" },
    { id: 2, name: "Author Highlights", link: "/author_highlights" },
    { id: 3, name: "Reading Challenges", link: "/reading_challenges" },
    { id: 4, name: "Gift Cards", link: "/gift_cards" },
    { id: 5, name: "Help Center", link: "/help_center" },
];

  return (
    <footer className="flex justify-center mt-2 bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]">
      <div className="w-[86%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-14 text-white">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 py-5 items-center">
            <img
              src={logo}
              alt="VBookz Logo"
              className="h-8 sm:h-12 w-auto"
            />
            <p className="text-[#facc15] text-xl sm:text-2xl font-medium max-w-xs">
              VBookZ
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-[#facc15] text-lg sm:text-xl font-semibold">
              Connect With Us
            </h2>
            <div className="flex gap-4 flex-wrap">
              {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center bg-white text-[#650D1B] rounded-full cursor-pointer hover:bg-[#facc15] hover:text-[#650D1B] duration-300 hover:scale-105"
                  >
                    <Icon size={20} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-[#facc15]">Quick Links</h1>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(
                (link, idx) => (
                  <li
                    key={link.id}
                    className="font-semibold hover:text-[#ff0000] hover:scale-105 duration-300 cursor-pointer"
                  >
                    <Link to={`${link.link}`}>{link.name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Explore Genres */}
        <div>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-[#facc15]">
              Explore Genres
            </h1>
            <ul className="flex flex-col gap-2">
              {genres.map((genre, idx) => (
                <li
                  key={idx}
                  className="font-semibold hover:text-[#ff0000] hover:scale-105 duration-300 cursor-pointer"
                >
                  <Link to={`/category/${genre.toLowerCase().replace(/ /g,"_")}`}>
                    {genre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-[#facc15]">Resources</h1>
            <ul className="flex flex-col gap-2">
              {additionalLinks.map((item, idx) => (
                <li
                  key={idx}
                  className="font-semibold cursor-pointer hover:text-[#ff0000] hover:scale-105 duration-300"
                >
                  <Link to={`${item.link}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
