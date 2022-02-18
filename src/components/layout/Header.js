import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </>
  );
};

export default Header;
