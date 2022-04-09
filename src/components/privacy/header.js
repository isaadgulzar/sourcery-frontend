import React, { Component } from 'react';
import Img from '../../assets/imgs/header-pro.png'
import Button from '../buttons/button'

class Header extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-dark">
                    <div className="max-w-screen-2xl mx-auto h-fit flex justify-center overflow-x-hidden h-96 items-center">
                        <div className="grid lg:grid-cols-1 sm:grid-cols-1 items-center w-screen mx-5 lg:mr-0">
                            <div className="col-span-1 flex flex-col space-y-6 xl:mx-28 mt-20 lg:mt-0">
                                <h1 className="text-2xl 2xl:text-5xl md:text-4xl mt-22 mx-auto text-white text-center lg:text-left font-black">Privacy policy</h1>
                                <p className="text-base text-white text-center mx-auto lg:text-left opacity-40 lg:max-w-lg">
                                    Effective as of December 7th 2020
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Header;