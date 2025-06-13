import React, { useState } from 'react';

const Menu = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Best Seller', link: '/#services' },
];

const subjects = [
  "Art", "Biography", "Business", "Children", "Computers", "Cooking", "Fantasy", "Health", "History",
  "Literature", "Music", "Philosophy", "Poetry", "Politics", "Religion", "Science", "Self Help",
  "Sports", "Technology", "Travel", "True Crime", "Young Adult"
];

function displayNameToApiKey(name) {
  return name.toLowerCase().replace(/ /g, "_");
}

const Navbar = ({ onSelectSubject }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // "quick", "categories", or null

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="center p-1 sm:p-2 shadow-xl bg-gradient-to-tr from-[#650D1B] via-[#DE0D30] to-[#632228]">
      <div className="flex justify-between items-center text-white">
        {/* Logo */}
        <img
          src="https://www.svgrepo.com/show/263154/books-book.svg"
          alt="logo"
          className="w-10 h-14 hover:scale-110 duration-500 cursor-pointer"
        />

        {/* Nav Items */}
        <ul className="flex items-center gap-4 relative z-50">
          {/* Main Menu Items */}
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="inline-block py-2 px-3 rounded-md hover:text-white hover:bg-[#a35b64] hover:scale-110 duration-200"
              >
                {menu.name}
              </a>
            </li>
          ))}

          {/* Quick Links Dropdown */}
          <li
            className="relative cursor-pointer hover:scale-105 hover:bg-[#a35b64] duration-300 rounded-md flex p-1 items-center h-10"
            onMouseEnter={() => setOpenDropdown("quick")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button onClick={() => toggleDropdown("quick")} type="button">
              Quick Links &darr;
            </button>
            <div
              className={`absolute left-0 top-full z-10 ${
                openDropdown === "quick" ? "block" : "hidden"
              } bg-[#650D1B] shadow-md w-[6rem] rounded-md transition-all duration-300`}
            >
              <ul>
                <li>
                  <button className="w-full text-left rounded-md hover:bg-[#a35b64] hover:text-[#dfcc1f] p-2">
                    Buy Now
                  </button>
                </li>
                <li>
                  <button className="w-full text-left rounded-md hover:bg-[#a35b64] hover:text-white p-2">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </li>

          {/* Top Categories Dropdown */}
          <li
            className="relative cursor-pointer hover:scale-105 hover:bg-[#a35b64] duration-300 rounded-md flex p-1 items-center h-10"
            onMouseEnter={() => setOpenDropdown("categories")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button onClick={() => toggleDropdown("categories")} type="button">
              Top Categories &darr;
            </button>
            <div
              className={`absolute left-0 top-full z-10 ${
                openDropdown === "categories" ? "block" : "hidden"
              } bg-[#650D1B] shadow-md text-white w-[8rem] text-sm h-[20rem] overflow-auto rounded-md transition-all duration-300`}
            >
              <ul>
                {subjects.map((subject) => (
                  <li key={subject}>
                    <button
                      onClick={() => {
                        onSelectSubject(displayNameToApiKey(subject));
                        setOpenDropdown(null); // close after click
                      }}
                      className="w-full text-left rounded-md hover:bg-[#a35b64] hover:text-white p-2"
                    >
                      {subject}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
