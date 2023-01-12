import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="container navigation">
      <a href="/" className="brand-name">
        <span className="word-recipe">Recipe</span>
        <span className="word-app">App</span>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
        >
          <path
            d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li className="selected">Home</li>
          <li>Vegetarianos</li>
          <li>Platos Principales</li>
          <li>Tortas</li>
          <li>Comida R&aacute;pida</li>
          <li>Men&uacute; Ni&ntilde;os</li>
          <li>Sopas</li>
        </ul>
      </div>
    </nav>
  );
}
