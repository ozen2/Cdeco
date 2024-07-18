import { useState } from "react";
import { Link } from "react-router-dom";
import cdecologo from "../assets/images/cdecoLogo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(!isOpen);
  };

  const isNavBarOpen = isOpen ? "translate-x-0" : "translate-x-[-100%]";
  const isClicked = isOpen ? "rotate-45 translate-y-[2px]" : "";
  const isClicked2 = isOpen ? "rotate-0 scale-20 opacity-0" : "";
  const isClicked3 = isOpen
    ? "-rotate-[45deg] translate-x-[2px] translate-y-[1px]"
    : "";

  return (
    <nav className="bg-[var(--secondary-color)] h-[65px]">
      <button
        className="absolute top-5 left-0 z-50"
        onClick={handleCheckboxChange}
      >
        <span
          className={`md:hidden ml-5 z-30 block w-7 h-0.5 ${isClicked} mb-1.5 bg-white rounded-[3px] origin-[5px_0px] transition-transform duration-500 ease-in-out`}
        ></span>
        <span
          className={`md:hidden ml-5 z-30 block w-7 h-0.5 ${isClicked2} mb-1.5 bg-white rounded-[3px] origin-[0%_0%] transition-transform duration-500 ease-in-out`}
        ></span>
        <span
          className={`md:hidden ml-5 z-30 block w-7 h-0.5 ${isClicked3} mb-1.5 bg-white rounded-[3px] origin-[0%_100%] transition-transform duration-500 ease-in-out`}
        ></span>
      </button>
      <ul
        id="menu"
        className={`fixed text-white top-0 left-0 w-[80%] h-full pl-5 pt-[125px] bg-[var(--secondary-color)] text-2xl origin-[0_0] ${isNavBarOpen} md:translate-x-0 md:w-full md:h-[65px] md:pt-0 md:pl-0 md:flex-row md:flex md:items-center md:justify-end md:pr-10 md:gap-10 transition-transform duration-500 ease-in-out`}
      >
        <li className="py-[10px] delay-2000">
          <Link
            onClick={handleLinkClick}
            to="/"
            class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl md:text-lg font-light md:font-normal transition-text duration-200 hover:text-gray-300"
          >
            Accueil
          </Link>
        </li>
        <li className="py-[10px] delay-2000">
          <Link
            to="/productsList"
            onClick={handleLinkClick}
            className="no-underline text-[var(--white-color)] opacity-100 text-1.5xl md:text-lg font-light md:font-normal transition-text duration-200 hover:text-gray-300"
          >
            Boutique
          </Link>
        </li>
        <li className="py-[10px] delay-2000">
          <Link
            to="/addProduct"
            onClick={handleLinkClick}
            className="no-underline text-[var(--white-color)] opacity-100 text-1.5xl md:text-lg font-light md:font-normal transition-text duration-200 hover:text-gray-300"
          >
            Ajouter un produit
          </Link>
        </li>
        <li className="py-[10px] delay-2000">
          <Link
            to="/admin/productsList"
            onClick={handleLinkClick}
            className="no-underline text-[var(--white-color)] opacity-100 md:text-lg text-1.5xl font-light md:font-normal transition-text duration-200 hover:text-gray-300"
          >
            Liste des produits admin
          </Link>
        </li>
      </ul>
      <Link to="/">
        <img src={cdecologo} alt="logo" className="w-16 absolute right-5 md:left-5 top-2" />
      </Link>
    </nav>
  );
}

export default Navbar;
