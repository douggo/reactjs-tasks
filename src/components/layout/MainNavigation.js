import React from "react";
import { Link } from "react-router-dom";
import css from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link to='/'>
          Tasks
          <span className={css.badge}>
            0
          </span>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to='/new'>New Task</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;