import React, { Component } from 'react';
import Img from '../../assets/imgs/header-pro.png'
import Button from '../buttons/button'

class Header extends Component {
    render() {
        return (
            <>
                <div className="">
                    <div className="max-w-screen-2xl mx-auto h-fit flex justify-center overflow-x-hidden h-96 items-center">
                        <div className="grid lg:grid-cols-1 sm:grid-cols-1 items-center w-screen mx-5 lg:mr-0">
                            <div className="col-span-1 flex flex-col space-y-6 xl:mx-28 mt-20 lg:mt-0">
                                <h1 className="text-2xl 2xl:text-5xl md:text-4xl mt-22 mx-auto text-blue-dark text-center lg:text-left font-black">Sourcery Blog</h1>
                                <p className="text-base text-center mx-auto opacity-40 max-w-xl mx-auto">
                                    Longer description for this blog post page. Description goes in two lines maybe. Longer description for this blog post page
                                </p>
                                <div className="relative flex w-full flex-wrap items-stretch mb-3 max-w-xl mx-auto">
                                    <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                    <i class="fas relative  opacity-40 fa-search"></i>
                                    </span>
                                    <input type="text" placeholder="Search articles" className="px-3 py-3  placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10" />
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