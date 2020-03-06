import React from "react"

const Header = ({ noHero = false }) => (
    <div className={noHero ? "header__no-hero" : "header"}>
        <h1 className="header__title">Jérôme BEHUET</h1>
        <p className="header__description">Self-Taught Programmer | Freelance</p>
    </div>
);

export default Header
