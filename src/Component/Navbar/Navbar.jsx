import React, { useState } from "react";
import list from "../../List.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="container relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
        >
          Dropdown
          {!isOpen ? (
            <FontAwesomeIcon icon={faSortDown} />
          ) : (
            <FontAwesomeIcon icon={faSortUp} />
          )}
        </button>
        {isOpen && (
          <div className="absolute bg-blue-400 top-20 flex flex-col items-start p-2 w-full rounded-lg ">
            {list.map((item, i) => (
              <div className="p-4 flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-4 border-l-transparent hover:border-l-white ">
                <h3 className="font-bold">{item.City}</h3>
                <h3>{item.Emotion}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
