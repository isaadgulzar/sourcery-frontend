import React, { Component } from 'react';
import Img from '../../assets/imgs/header-img.png'
import Button from '../buttons/button'

class Header extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-dark">
                    <div className="max-w-screen-2xl mx-auto h-fit flex justify-center overflow-x-hidden items-center">
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center w-screen mx-5 lg:mr-0">
                            <div className="col-span-1 flex flex-col space-y-6 xl:mx-28 mt-20 lg:mt-0">
                                <h1 className="text-3xl 2xl:text-8xl md:text-7xl text-white text-center lg:text-left font-black">Clean code,<br className="hidden xl:block"></br> Easy Mode</h1>
                                <p className="text-xl text-white text-center lg:text-left opacity-40 lg:max-w-lg">
                                    Write clear, concise, and easy to work with code with Sourcery’s code assistant.Write clear, concise, and easy to work with code with Sourcery’s code assistant.
                                </p>
                                <div className="col-span-1 flex flex-col space-y-5 md:space-y-0 mx-auto lg:mx-0 md:flex-row gap-x-5 pt-5">
                                    <Button subclasses1="font-black text-base" subclasses2="font-light italic" customClass="btn-wide" subtext1="Add to PyCharm" subtext2="It's Free" />
                                    <Button subclasses1="font-black text-base" subclasses2="font-light italic" customClass="btn-wide" subtext1="Add to VS Code" subtext2="It's Free" />
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