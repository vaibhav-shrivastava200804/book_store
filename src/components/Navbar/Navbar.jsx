import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faC } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Menu = [
  { id: 1, name: "Home", link: "/book_store/" },
  { id: 2, name: "Login", link: "/Login/" },
];
const subjects = [
  "Art",
  "Biography",
  "Business",
  "Children",
  "Computers",
  "Cooking",
  "Fantasy",
  "Health",
  "History",
  "Literature",
  "Music",
  "Philosophy",
  "Poetry",
  "Politics",
  "Religion",
  "Science",
  "Self Help",
  "Sports",
  "Technology",
  "Travel",
  "True Crime",
  "Young Adult",
];

function displayNameToApiKey(name) {
  return name.toLowerCase().replace(/ /g, "_");
}

const Navbar = ({ onSelectSubject }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSideBar, setopenSideBar] = useState(null);
  const [viewLogin, setviewLogin] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (viewLogin && loginRef.current && !loginRef.current.contains(event.target)) {
        setviewLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [viewLogin]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedIn");
    if (loggedInUser === "true") {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ username, password }));
    localStorage.setItem("loggedIn", "true");
    setviewLogin(false);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toCategory = (categoryId) => {
    navigate(`/book_store/category/${categoryId}`);
  };

  const toggleSidebar = (name) => {
    setopenSideBar(openSideBar === name ? null : name);
  };

  const toggleLogin = () => {
    if (viewLogin === true) {
      setviewLogin(false);
    } else {
      setviewLogin(true);
    }
  };
  const savedUser = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <div className="center p-1 sm:p-2 shadow-xl bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)] relative">
      <div className="flex justify-between items-center text-white">
        {/* Logo */}
        <Link to="/book_store/">
          <img
            src="https://www.svgrepo.com/show/263154/books-book.svg"
            alt="logo"
            className="w-10 h-14 hover:scale-110 duration-500 cursor-pointer"
          />
        </Link>

        {/*desktop view*/}
        <ul className="items-center gap-4 relative z-50 hidden md:flex">
          <div className="login hidden md:flex gap-2 items-center">
            <button
              className="hover:scale-105 hover:bg-[#5a7385] duration-300 rounded-md px-1 py-2 cursor-pointer"
              onClick={() => {
                if (!isLoggedIn) toggleLogin();
              }}
            >
              <Link className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faUser} />
                <p>{isLoggedIn === true ? savedUser.username : "Login"}</p>
              </Link>
            </button>
            {isLoggedIn&&
            <button className="hover:bg-[#5a7385] px-1 cursor-pointer py-2 rounded-md" onClick={()=>{
                handleLogout();
              }}>LogOut</button>}
          </div>

          <li
            className="relative cursor-pointer hover:scale-105 hover:bg-[#5a7385] duration-300 rounded-md flex p-1 items-center h-10"
            onMouseEnter={() => setOpenDropdown("quick")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button onClick={() => toggleDropdown("quick")} type="button">
              Quick Links &darr;
            </button>

            <div
              className={`absolute left-0 top-full z-10 ${
                openDropdown === "quick" ? "block" : "hidden"
              } bg-[#003153] shadow-md w-[6rem] rounded-md transition-all duration-300`}
            >
              <ul>
                <li>
                  <button className="w-full text-left rounded-md hover:bg-[#5a7385] hover:text-[white] p-2">
                    Buy Now
                  </button>
                </li>
                <li>
                  <button className="w-full text-left rounded-md hover:bg-[#5a7385] hover:text-white p-2">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </li>

          <li
            className="relative cursor-pointer hover:scale-105 hover:bg-[#5a7385] duration-300 rounded-md flex p-1 items-center h-10"
            onMouseEnter={() => setOpenDropdown("categories")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button onClick={() => toggleDropdown("categories")} type="button">
              Top Categories &darr;
            </button>
            <div
              className={`absolute right-0 top-full z-10 ${
                openDropdown === "categories" ? "block" : "hidden"
              } bg-[#003153] shadow-md text-white w-40 text-sm h-[20rem] overflow-auto rounded-md transition-all duration-300`}
            >
              <ul>
                {subjects.map((subject) => (
                  <li key={subject}>
                    <button
                      id={displayNameToApiKey(subject)}
                      onClick={(e) => {
                        const id = e.target.id;
                        toCategory(id);
                        setOpenDropdown(null);
                      }} // optional: just to close dropdown
                      className="w-full text-left rounded-md hover:bg-[#5a7385] hover:text-white p-2"
                    >
                      {subject}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Mobile View */}
        <div className="icon px-2 md:hidden flex gap-6 items-center">
          <div className="login cursor-pointer">
            <button
              onClick={() => {
                if (!isLoggedIn) toggleLogin();
              }}
              className="flex gap-2 items-center"
            >
              <FontAwesomeIcon icon={faUser} />
              <p>{isLoggedIn === true ? savedUser.username : "Login"}</p>
            </button>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="text-4xl cursor-pointer"
            onClick={() => toggleSidebar("sideBar")}
          />
        </div>
        <div
          className={`sideBar absolute right-0 top-16 h-auto bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]
          ${
            openSideBar === "sideBar" ? "block" : "hidden"
          } md:hidden z-50 rounded-2xl`}
        >
          <ul className="flex flex-col gap-5 border p-2 w-48 rounded-2xl text-lg">
            <li className="cursor-pointer hover:bg-[#5a7385] px-3 py-2 rounded-md">
              <Link to="/book_store/">Home</Link>
            </li>
            <li className="cursor-pointer hover:bg-[#5a7385] px-3 py-2 rounded-md">
              <Link to="/About">About Us</Link>
            </li>
            <li className="cursor-pointer hover:bg-[#5a7385] px-3 py-2 rounded-md">
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li
              className="relative cursor-pointer flex items-center h-10"
              onMouseEnter={() => setOpenDropdown("categories")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown("categories")}
                type="button"
                className="flex gap-2 items-center"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                Top Categories
              </button>
              <div
                className={`absolute right-45 top-0 z-10 ${
                  openDropdown === "categories" ? "block" : "hidden"
                } bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)] shadow-md text-white w-38 text-sm h-[20rem] overflow-auto rounded-md transition-all duration-300`}
              >
                <ul>
                  {subjects.map((subject) => (
                    <li key={subject}>
                      <button
                        id={displayNameToApiKey(subject)}
                        onClick={(e) => {
                          const id = e.target.id;
                          toCategory(id);
                          setOpenDropdown(null);
                          setopenSideBar(null);
                        }} 
                        className="w-full text-left rounded-md hover:bg-[#5a7385] hover:text-white p-2"
                      >
                        {subject}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {isLoggedIn && 
              <li className="cursor-pointer"
              >
                <button onClick={()=>{
                setopenSideBar(null);
                handleLogout();
              }}>LogOut</button>
              </li>
            }
          </ul>
        </div>
      </div>


      {/*Login*/}      
      <div
      ref={loginRef}
        className={`login absolute bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)] left-1/2 transform -translate-x-1/2 h-60 md:h-65 w-[80%] md:w-[40%] top-16 md:top-22 rounded-2xl shadow-2xl z-50 text-white ${
          viewLogin === true ? "block" : "hidden"
        }`}
      >
        <div className="relative">
          <div
            className="cancelIcon absolute top-2 right-2 py-1 px-3 flex items-center justify-center rounded-full bg-white text-red-700 text-lg md:text-2xl font-bold cursor-pointer"
            onClick={() => setviewLogin(false)}
          >
            X
          </div>
          <div className="form py-2 px-2">
            <form className="flex flex-col gap-3" onSubmit={handleLogin}>
              <h1 className="text-center text-2xl">Login Now</h1>
              <div className="username flex items-center gap-2 rounded-md  w-[100%] p-2 md:text-xl bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]">
                <label htmlFor="Username">Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                  className="border rounded-md py-1 px-2 text-sm md:text-xl backdrop-blur bg-pink-300/20 w-[100%]"
                  placeholder="Enter username"
                  name=""
                  id="Username"
                />
              </div>
              <div className="password flex items-center gap-2 rounded-md  w-[100%] p-2 md:text-xl bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]">
                <label htmlFor="Password">Password:</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                  className="border rounded-md py-1 px-2 text-sm md:text-xl backdrop-blur bg-pink-300/20 w-[100%]"
                  placeholder="Enter password"
                  name=""
                  id="Password"
                />
              </div>
              <div className="submit flex">
                <button
                  type="submit"
                  className="rounded-md border px-4 py-2 mx-auto cursor-pointer hover:scale-105 duration-300 bg-[#003153] bg-[linear-gradient(315deg,_#003153_0%,_#1B1B1B_74%)]"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
