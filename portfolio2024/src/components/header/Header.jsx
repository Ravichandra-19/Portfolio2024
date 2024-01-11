import "./header.css";
import Reactswitch from "react-switch";
const Header = () => {
  return (
    <div className="nav">
      {/* Block element modifier */}
      <div className="nav__wrapper container">
        <div className="nav__logo">Ravi Chandra Adavipalli</div>
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav__menu-item">
            <a href="#services">Services</a>
          </li>
          <li className="nav__menu-item">
            <a href="skills">Skills</a>
          </li>
          <li className="nav__menu-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav__menu-item">
            <a href="#contact">Contact</a>
          </li>
          <li className="buttons">
            <label htmlFor="" className="switch">
              <Reactswitch
                height={24}
                width={48}
                onColor="#4d4d4d"
                offColor="#ccc"
              />
            </label>
            <a href="" className="button">
              Hire Me
            </a>

          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
