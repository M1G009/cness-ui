import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChatIcon from "../../utills/Icon/ChatIcon";
import SearchIcon from "../../utills/Icon/SearchIcon";
import NotificationsIcon from "../../utills/Icon/NotificationsIcon";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="container px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="">
            <img
              src={"/images/logo/cness-logo.png"}
              alt="Logo"
              className="max-w-[144px] h-[62px]"
            />
          </Link>
          <div className="flex items-center lg:order-2 gap-3">
            <ChatIcon />
            <SearchIcon />
            <NotificationsIcon />
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
              {[
                "Social",
                "Trending",
                "Directory",
                "Marketplace",
                "Best Practices",
                "Certifications",
                "Build Your Dream",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="block text-title-xsm font-normal text-black"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
