import React, { Component } from 'react';
import Img from '../../assets/imgs/header-pro.png'
import Button from '../buttons/button'

class Header extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-dark">
                    <div className="max-w-screen-2xl mx-auto h-fit flex justify-center overflow-x-hidden items-center">
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center w-screen mx-5 lg:mr-0">
                            <div className="col-span-1 flex flex-col space-y-6 xl:mx-28 mt-20 lg:mt-0">
                                <h1 className="text-2xl 2xl:text-5xl md:text-4xl text-white text-center lg:text-left font-black">When all your code is clean, everyone works faster</h1>
                                <p className="text-xl text-white text-center lg:text-left opacity-40 lg:max-w-lg">
                                Make your entire project as clean and clear as possible with Sourcery Pro
                                </p>
                                <div className="col-span-1 flex flex-col space-y-5 md:space-y-0 mx-auto lg:mx-0 md:flex-row gap-x-5 pt-5">
                                    <Button subclasses1="font-black text-base" subclasses2="fas fa-arrow-right" customClass="btn-wide" subtext1="Upgrade to Pro" subtext2="" />
                                   
                                </div>

                            </div>
                            <div className="col-span-1 mt-10 mb-5 lg:mt-36 lg:mb-28  mx-auto">
                                <img className="h-full w-full mx-auto lg:mx-0 " src={Img} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Header;