import React, { Component } from 'react';
import Logo from '../../assets/imgs/Logo.png'
import Button from '../buttons/button'
import {Link} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <>
            <div className="bg-blue-dark">
                <div id="Footer" className="max-w-screen-2xl mx-5 2xl:mx-auto text-center lg:text-left">
                        <div className="md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-7 border-t border-shily-light pt-12">
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div className="mt-6 md:mt-8">
                                    <img className="mx-auto lg:mx-0" src={Logo} alt="" />
                                    <p className="text-xs text-white mt-5">
                                        Clean code, Easy Made
                                    </p>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-md font-black text-white tracking-wider uppercase">
                                        Product
                                    </h3>
                                    <ul className="mt-5 space-y-2">
                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Plans
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Sourcery Pro
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Sourcery Team
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-md font-black text-white tracking-wider uppercase">
                                        INTEGRATIONS
                                    </h3>
                                    <ul className="mt-5 space-y-2">
                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                PyCharm
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                VS Code
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Vim (Beta)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Sublime (Beta)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-md font-black text-white tracking-wider uppercase">
                                        RESOURCES
                                    </h3>
                                    <ul className="mt-5 space-y-2">
                                        <li>
                                           <Link to="/blogs" className="text-base hover:opacity-60 text-white opacity-40">
                                                Blog
                                           </Link>
                                        </li>

                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Changelog
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Documentation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                FAQs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Contact us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-md font-black text-white tracking-wider uppercase">
                                        COMPANY
                                    </h3>
                                    <ul className="mt-5 space-y-2">
                                        <li>
                                           <Link className="text-base hover:opacity-60 text-white opacity-40" to="/about-us"> 
                                                About
                                            </Link>
                                        </li>

                                        <li>
                                        <Link to="/privacy" className="text-base hover:opacity-60 text-white opacity-40"  >  
                                                Privacy policy
                                          </Link>
                                        </li>

                                        <li>
                                            <a href="#" className="text-base hover:opacity-60 text-white opacity-40">
                                                Terms
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-md font-black text-white tracking-wider uppercase">
                                        COMMUNITY
                                    </h3>
                                    <div className="mt-5 space-y-2">
                                        <div className="flex space-x-5 justify-center lg:justify-start">
                                            <a href="#" className="text-white opacity-40 hover:opacity-60">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                                </svg>
                                            </a>
                                            <a href="#" className="text-white opacity-40 hover:opacity-60">
                                                <span className="sr-only">Linkedin</span>
                                                <svg className="h-5 w-5" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                </svg>
                                            </a>
                                            <a href="#" className="text-white opacity-40 hover:opacity-60">
                                                <span className="sr-only">Github</span>
                                                <svg className="h-5 w-5" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                                </svg>
                                            </a>
                                            <a href="#" className="text-white opacity-40 hover:opacity-60">
                                                <span className="sr-only">Mail</span>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end mt-7">
                            <p className="text-base text-white opacity-40">
                                © 2021 Sourcery
                            </p>
                        </div>
                    </div>
                </div>
            
            </>
        );
    }
}

export default Footer;