import { Link, NavLink } from "react-router";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex h-16 w-full items-center justify-between bg-blue-400 px-4 text-white lg:px-12">
        <Link to="/" className="text-lg font-bold">
          Fashion Shop
        </Link>
        <button
          onClick={toggleMenu}
          className="cursor-pointer text-xl lg:hidden"
        >
          &#8801;
        </button>

        <div
          className={`fixed inset-0 flex transform items-center justify-center bg-sky-600 opacity-80 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-500 ease-in-out`}
        >
          <ul className="text-center text-3xl">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink to="/shop" onClick={toggleMenu}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" onClick={toggleMenu}>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop view Navigation */}
        <ul className="hidden gap-6 lg:flex">
          <li>
            {/* className={({isActive})=> `${isActive ? "text-yellow-400": "text-white"} hover:text-gray-300`} */}
            <NavLink to="/"  className={({isActive})=> isActive ? "text-yellow-400": "hover:text-gray-200"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({isActive})=> isActive ? "text-yellow-400": "hover:text-gray-200"}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({isActive})=> isActive ? "text-yellow-400": "hover:text-gray-200"}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
