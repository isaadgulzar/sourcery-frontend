import React, { Component } from 'react';
import logoIcon from '../../assets/imgs/Vector.png'

import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarOpen: false
        }
    }

    render() {
        return (
            <>
                <div className="bg-blue-dark">
                    <nav className={`fixed top-0 z-50 w-full ${this.props.bgColor} overflow-x-hidden flex flex-wrap items-center justify-between px-2 py-3 mb-3`}>
                        <div className="max-w-screen-2xl mx-auto w-full px-4 flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                <a className="text-xl ml-5 tracking-widest leading-relaxed inline-flex mr-4 py-2 whitespace-nowrap  text-white"
                                    href="#pablo" >
                                    <Link to="/"> <img className="mr-1 ml-9" src={this.props.logo} /></Link>
                                </a>
                                <button
                                    className={` ${this.props.textColor} cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
                                    type="button"
                                    onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })}
                                >
                                    <i className="fas  fa-bars"></i>

                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (this.state.navbarOpen ? " flex" : " hidden")
                                }
                                id="example-navbar-danger"
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <li className="nav-item">
                                        <Link to="/sourcery-pro"> <a
                                            className={`px-3 py-2 flex items-center text-md   leading-snug ${this.props.textColor} hover:opacity-75`}
                                        >
                                            <span className="ml-2 pt-2 mr-3">Sourcery Pro</span>
                                        </a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/plans">  <a
                                            className={`px-3 py-2 flex items-center text-md focus:border-b-2   leading-snug ${this.props.textColor} hover:opacity-75`}
                                        >
                                            <span className="ml-2 pt-2 mr-3">Plans</span>
                                        </a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signup">
                                            <button className={`bg-blue-light hover:bg-blue-light h-14 ml-5 w-36 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 `}>
                                                Sign up
                                            </button>
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default NavBar;