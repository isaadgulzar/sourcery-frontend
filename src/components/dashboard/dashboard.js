import React, { Component } from 'react'
import Home from './home'
import Billings from './billings'

import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import '../../assets/css/sidebar.css'
import Logo from '../../assets/imgs/Logo.png'
import Refels from './refels'
import Github from './github'
import Addrepo from './addrepo'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarPos: 'fixed',
      activeNavItem: 'home',
    }
  }

  render() {
    return (
      <Router>
        <>

          <div className="h-screen flex overflow-hidden bg-white" >
            <div id="sidebar" className={`lg:flex lg:flex-shrink-0 fixed top-0 md:relative h-full z-40 ${this.state.sidebarOpen ? "flex" : " hidden"}`}    >
              <div className="flex flex-col h-screen w-64">
                {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
                <div className="flex flex-col px-3 flex-1 border-r border-gray-200 bg-blue-dark">
                  <div className="flex-1 flex flex-col px-5 pt-5 pb-4 overflow-y-auto">
                  <div className="lg:hidden">
                    <button
                      className={` ${this.props.textColor} cursor-pointer text-white absolute top-1.5 right-1.5 lg:hidden outline-none focus:outline-none`}
                      type="button"
                      onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen, })}
                    >
                      {this.state.sidebarOpen == true ? <i className="fas fa-times fa-2x"></i>: null}
                    </button>
                  </div>
                    <div className="flex items-center flex-shrink-0">
                      <a href="/">
                        <img className="h-10 w-full" src={Logo} alt="Sourcery Logo" />
                      </a>
                    </div>
                    <nav className="mt-5 flex-1 bg-blue-dark space-y-5">
                      <Link onClick={()=>{
                        this.setState
                        ({
                          activeNavItem:'home'
                        })
                      }} to="/dashboard" className={`flex items-center space-x-3 text-white ${ this.state.activeNavItem == 'home' ? 'active':''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span className="text-sm mt-1">Home</span>

                      </Link>
                      <Link onClick={()=>{
                        this.setState
                        ({
                          activeNavItem:'github'
                        })
                      }} to="/dashboard/github" className={`flex items-center space-x-3 text-white ${ this.state.activeNavItem == 'github' ? 'active':''}`}>
                        <svg className="h-5 w-5" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                          <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                        <span className="text-sm mt-1">Github Code Review</span>

                      </Link>
                      <a href="#" className="flex items-center space-x-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-sm mt-1">Docs</span>
                      </a>
                      <Link onClick={()=>{
                        this.setState
                        ({
                          activeNavItem:'billing'
                        })
                      }} to="/dashboard/billings" className={`flex items-center space-x-3 text-white ${ this.state.activeNavItem == 'billing' ? 'active':''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-sm mt-1">Billing</span>
                      </Link>
                      <Link onClick={()=>{
                        this.setState
                        ({
                          activeNavItem:'refer'
                        })
                      }} to="/dashboard/referals" className={`flex items-center space-x-3 text-white ${ this.state.activeNavItem == 'refer' ? 'active':''}`}>
                        <svg className="h-5 w-6" viewBox="0 0 18 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.25 4.5H3.75V3C3.75 2.5875 3.4125 2.25 3 2.25C2.5875 2.25 2.25 2.5875 2.25 3V4.5H0.75C0.3375 4.5 0 4.8375 0 5.25C0 5.6625 0.3375 6 0.75 6H2.25V7.5C2.25 7.9125 2.5875 8.25 3 8.25C3.4125 8.25 3.75 7.9125 3.75 7.5V6H5.25C5.6625 6 6 5.6625 6 5.25C6 4.8375 5.6625 4.5 5.25 4.5ZM13.5 5.25C14.745 5.25 15.7425 4.245 15.7425 3C15.7425 1.755 14.745 0.75 13.5 0.75C13.26 0.75 13.0275 0.7875 12.8175 0.855C13.245 1.4625 13.4925 2.1975 13.4925 3C13.4925 3.8025 13.2375 4.53 12.8175 5.145C13.0275 5.2125 13.26 5.25 13.5 5.25ZM9.75 5.25C10.995 5.25 11.9925 4.245 11.9925 3C11.9925 1.755 10.995 0.75 9.75 0.75C8.505 0.75 7.5 1.755 7.5 3C7.5 4.245 8.505 5.25 9.75 5.25ZM9.75 6.75C8.25 6.75 5.25 7.5 5.25 9V9.75C5.25 10.1625 5.5875 10.5 6 10.5H13.5C13.9125 10.5 14.25 10.1625 14.25 9.75V9C14.25 7.5 11.25 6.75 9.75 6.75ZM14.715 6.87C15.3375 7.4175 15.75 8.115 15.75 9V10.125C15.75 10.2525 15.735 10.38 15.7125 10.5H17.625C17.835 10.5 18 10.335 18 10.125V9C18 7.845 16.2225 7.1325 14.715 6.87Z" />
                        </svg>
                        <span className="text-sm mt-1">Refer Friends</span>
                      </Link>
                      <a href="#" className="flex items-center space-x-3 text-white">
                        <svg className="h-5 w-6" viewBox="0 0 8 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.00297 13.75C2.74047 13.75 2.53797 13.5175 2.57547 13.255L3.25047 8.5H0.625467C-0.0345333 8.5 0.377967 7.9375 0.392967 7.915C1.33797 6.2425 2.75547 3.7675 4.63047 0.4675C4.70547 0.3325 4.85547 0.25 5.00547 0.25C5.26797 0.25 5.47047 0.4825 5.43297 0.745L4.75797 5.5H7.39047C7.69047 5.5 7.85547 5.6425 7.69047 5.995C5.22297 10.3 3.79047 12.8125 3.37797 13.5325C3.30297 13.6675 3.16047 13.75 3.00297 13.75Z" />
                        </svg>
                        <span className="text-sm mt-1">Pro</span>
                      </a>
                    </nav>
                  </div>
                  <div className="flex-shrink-0 flex p-4">
                    <a href="#" className="flex items-center space-x-3 text-white">
                      <svg className="h-5 w-6" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 1.75H6.25C6.6625 1.75 7 1.4125 7 1C7 0.5875 6.6625 0.25 6.25 0.25H1.75C0.925 0.25 0.25 0.925 0.25 1.75V12.25C0.25 13.075 0.925 13.75 1.75 13.75H6.25C6.6625 13.75 7 13.4125 7 13C7 12.5875 6.6625 12.25 6.25 12.25H1.75V1.75Z" />
                        <path d="M13.4875 6.73749L11.395 4.64499C11.155 4.40499 10.75 4.56999 10.75 4.90749V6.24999H5.5C5.0875 6.24999 4.75 6.58749 4.75 6.99999C4.75 7.41249 5.0875 7.74999 5.5 7.74999H10.75V9.09249C10.75 9.42999 11.155 9.59499 11.3875 9.35499L13.48 7.26249C13.63 7.11999 13.63 6.87999 13.4875 6.73749Z" />
                      </svg>
                      <span className="text-sm mt-1">Log out</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-0 flex-1 overflow-hidden pb-7">
              {/* <!-- Mobile Sidebar Toggle Button --> */}
              <div className="lg:hidden pl-1 py-3 sm:pl-3">
                <button
                  className={` ${this.props.textColor} cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
                  type="button"
                  onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen, })}
                >
                  <i className="fas  fa-bars"></i>
                </button>
              </div>
              <Switch>

                <Route exact path="/dashboard" component={Home} />
                <Route path="/dashboard/billings" component={Billings} />
                <Route path="/dashboard/referals" component={Refels} />
                <Route path="/dashboard/github" component={Github} />
                <Route path="/dashboard/add-repo" component={Addrepo} />

              </Switch>
            </div>
          </div>
        </>
      </Router>



    )
  }
}
