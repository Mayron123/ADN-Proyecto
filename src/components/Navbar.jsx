import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 1000, // Puedes ajustar la duración de la animación según tus preferencias
      smooth: "easeInOutQuart", // Puedes ajustar el tipo de animación
    });
    setActive(section);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="adn" className="w-[80px] h-[80px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${navLinks.indexOf(nav) === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link to={nav.id} spy={true} smooth={true} onClick={() => setActive(nav.title)}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${navLinks.indexOf(nav) === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <Link to={nav.id} spy={true} smooth={true} onClick={() => setActive(nav.title)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
