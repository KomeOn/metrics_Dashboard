import React from 'react';

function Header(props) {
    return (
        <>
            <nav class="nav-extended indigo darken-3">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
                <div class="nav-content">
                    <ul class="tabs tabs-transparent">
                        <li class="tab"><a href="#test1">Test 1</a></li>
                        <li class="tab"><a class="active" href="#test2">Test 2</a></li>
                        <li class="tab disabled"><a href="#test3">Disabled Tab</a></li>
                        <li class="tab"><a href="#test4">Test 4</a></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </>
    );
}

export default Header;