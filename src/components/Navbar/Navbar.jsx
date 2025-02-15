import React, { useState } from "react";
import { Link , NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import icon1 from "../../assets/nav/closeIcon.png"
import icon2 from "../../assets/nav/menuIcon.png"
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/">
        Arfeen
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? icon1
              : icon2
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <Link to="/experience">Education</Link>
          </li>
          <li>
          <Link to="/projects">Projects</Link>
          </li>
          <li>
          <Link to="/Blog">Blog</Link>
          </li>
          <li>
          <Link to="/codolio">Codolio</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;