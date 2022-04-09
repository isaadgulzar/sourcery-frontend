import React, { Component } from 'react';
import Img from '../../assets/imgs/blogs-section.png'
import { Link } from 'react-router-dom'

import greaterIcon2 from  '../../assets/imgs/greater-icon-2.png'
import Button from '../buttons/button'

class Header extends Component {
    render() {
        return (
            <>
                <div className="">
                    <div className="max-w-screen-2xl mx-auto h-fit flex justify-center overflow-x-hidden items-center">
                        <div className={`grid lg:grid-cols-2 grid-cols-1 justify-center items-center w-full py-10 md:py-24`}>
                        <div className="flex space-x-4 justify-center items-center col-span-2 bg-blue-light h-16">
                            <p className="text-white text-lg font-black">Clean up your code base with automatic refactorings.</p>
                            <span className="flex items-center space-x-2.5 text-base font-black text-orange-light">Learn more <img className="w-5 pt-1 h-5" src={greaterIcon2} /> </span>
                        </div>
                            <div className={` col-span-1 `} >
                                <img className="mx-auto h-full" src={Img} alt="" />
                            </div>
                            <div className={`col-span-1 flex flex-col h-full justify-around lg:max-w-xl px-4 lg:px-16`}>
                                <Link to="/blogs" class="flex items-center space-x-4 text-purple-medium text-center lg:text-left font-bold">
                                    <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 9H3.83L9.42 14.59L8 16L0 8L8 0L9.41 1.41L3.83 7L16 7V9Z" />
                                    </svg>
                                    <span>Back to Blog Home</span>
                                </Link>
                                <div className="-mt-7">
                                    <h3 className="text-2xl lg:text-5xl text-center lg:text-left text-magento-dark font-black leading-10">Making lunch faster with Python concurrency</h3>
                                    <p className="text-xl text-black-dark text-center lg:text-left font-medium text-magento-dark opacity-50 mt-6 lg:mr-5 lg:mr-0">
                                        A lunchtime story to demonstrate threading, asyncio, multiprocessing & cloud functions
                                    </p>
                                </div>
                            </div>
                        </div>
                  
                        </div>
                    </div>
                   
            </>
        );
    }
}

export default Header;