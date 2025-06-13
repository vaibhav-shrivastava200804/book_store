import React from 'react'
const Menu=[
  {
    id:1,
    name:"Home",
    link:"/#"
  },
  {
    id:2,
    name:"Best Seller",
    link:"/#services",
  },
]

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
  "Young Adult"
];

function displayNameToApiKey(name) {
  return name.toLowerCase().replace(/ /g, "_");
}

const Navbar = (onSelectSubject) => {
  return (
    <div>
      <div className="center p-1 sm:p-2 shadow-xl bg-gradient-to-tr from-[#650D1B] via-[#DE0D30] to-[#632228]">
        <div className="flex justify-between items-center text-white">
          <div><img src="https://www.svgrepo.com/show/263154/books-book.svg" alt="" className='w-10 h-14 hover:scale-110 duration-500 cursor-pointer'/></div>
          <div>
            <ul className=" items-center gap-4 
            sm: flex">
              {
                Menu.map((menu) =>(
                  <li>
                    <a href={menu.link} className="inline-block py-2 px-3 rounded-md hover:text-white hover:bg-[#a35b64] hover:scale-110 duration-200">{menu.name}</a>
                  </li>
                ))
              }
              <li className='group relative cursor-pointer duration-300 mr-2 hover:scale-105 hover:bg-[#a35b64] h-10 rounded-md flex p-1 items-center'>
                <a href="#">
                  Quick Links &darr;
                </a>
                <div className='absolute left-0 top-full z-10 hidden group-hover:block bg-[#650D1B] shadow-md text-[C1DF1F] w-[6rem] rounded-md'>
                  <ul className='block'>
                    <li><a href="" className='inline-block w-full rounded-md hover:bg-[#a35b64] hover:text-[#dfcc1f] p-2 mb-2'>Buy Now</a></li>
                    <li><a href="" className='inline-block w-full rounded-md hover:bg-[#a35b64] hover:text-white p-2'>Contact Us</a></li>
                </ul>
                </div>
              </li>
              <li className='group relative cursor-pointer duration-300 mr-2 hover:scale-105 hover:bg-[#a35b64] h-10 rounded-md flex p-1 items-center'>
                <a href="#">
                  Top Categories &darr;
                </a>
                <div className='absolute left-0 top-full z-10 hidden group-hover:block bg-[#650D1B] shadow-md text-[C1DF1F] w-[8rem] text-sm h-[20rem] scroll-auto overflow-auto rounded-md'>
                  <ul className='block'>
                    {
                      subjects.map((subject)=>(
                        <li className='' key={subject}
                        onClick={() => onSelectSubject(displayNameToApiKey(subject))}>
                            <a href="#" className='inline-block w-full rounded-md hover:bg-[#a35b64] hover:text-white p-2'>{subject}</a>
                          </li>
                      ))
                    }
                </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar