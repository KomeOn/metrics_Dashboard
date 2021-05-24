import React from 'react';
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../../css/header.css';
// import './header';

function Header(props) {
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
    return (
        <>
            <nav className="nav-extended indigo darken-3">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo flow-text" style={{"marginLeft": "15px"}}><i className="material-icons hide-on-med-and-down">trending_up</i>Metrics Dashboard<i className="material-icons right hide-on-med-and-down">trending_down</i></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </>
    );
}

export default Header;