import React from 'react';
import { useEffect } from 'react';
import '../../css/header.css';
// import './header';
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-dark fixed-top header">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <h3 class="header-title">Metrics Dashboard</h3>
                        </a>
                        <form class="d-flex input-group w-auto">
                            <input
                                type="search"
                                class="form-control"
                                placeholder="Search for a stock"
                                aria-label="Search"
                            />
                            <button
                                class="btn btn-primary"
                                type="button"
                                data-mdb-ripple-color="dark"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;


