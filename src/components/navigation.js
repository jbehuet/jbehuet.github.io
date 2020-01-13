import React from "react"

const Navigation = () => (
    <nav>
        <ul className="menu">
            <div className="menu__item toggle"><span></span></div>
            <li className="menu__item">
                <a href="https://github.com/jbehuet" className="link link--dark">
                    <i className="fa fa-github"></i> Github</a>
            </li>
            <li className="menu__item">
                <a href="https://fr.linkedin.com/in/jbehuet" className="link link--dark">
                    <i className="fa fa-linkedin"></i> LinkedIn</a>
            </li>
            <li className="menu__item">
                <a href="https://twitter.com/jbehuet" className="link link--dark">
                    <i className="fa fa-twitter"></i> Twitter</a>
            </li>
        </ul>
    </nav>
)

export default Navigation
