import React from "react"
import { Link } from "gatsby"

const Navigation = ({ displayHomeLink }) => (
    <nav>
        {displayHomeLink &&
            <ul className="menu left">
                <li className="menu__item"><Link to="/" className="link link--dark"><i className="fa fa-arrow-left"></i> Accueil</Link></li>
            </ul>
        }
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
