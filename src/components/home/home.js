import React, { Component } from 'react';

import NavBar from '../navbars/navbar';
import Header from './header'
import Img from '../../assets/imgs/section-img.png'
import greaterIcon from '../../assets/imgs/greaater.png'
import pc from '../../assets/imgs/pc-icon.png'
import vscode from '../../assets/imgs/vscode-icon.png'
import sky from '../../assets/imgs/sky.png'
import cisco from '../../assets/imgs/cisco.png'
import cua from '../../assets/imgs/cua.png'
import rev from '../../assets/imgs/rev.png'
import Button from '../buttons/button'
import Logo from '../../assets/imgs/Logo.png'
import FeatureSection from '../featureSections/featureSection';
import SubFooter from '../footer/subFooter';
import Footer from '../footer/footer';
class Home extends Component {
    render() {
        return (
            <div>
                <NavBar logo={Logo} bgColor="bg-blue-dark" textColor="text-white" />
                {/* Header Section Start */}
                <Header />
                {/* header end */}
                <FeatureSection
                    heading="Write code that’s clearer to everyone"
                    orderClass="order-2 lg:order-1"
                    orderClass2="order-1 lg:order-2"
                    img={Img}
                    description="Sourcery suggests real-time improvements so you can immediately make your code easier to understand, easier to share, and faster to work with."
                    buttonText="Learn More"
                    greaterIcon="hidden"
                />

                {/* third section start */}
                <div className="bg-purple-light">
                    <div className="max-w-screen-2xl mx-auto flex justify-center overflow-x-hidden items-center">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-x-5 items-center justify-center w-full mx-5">
                            <div className="col-span-2 mt-5">
                                <h3 className="text-3xl md:text-5xl text-center text-magento-dark font-black pt-8">Works Where You Do</h3>
                                <p className="text-xl mx-auto text-black-dark text-center font-medium max-w-lg mt-6">
                                    Get refactoring suggestions in your IDE as you<br></br> work so you never need to break your flow.
                                </p>
                            </div>
                            <div className="md:col-span-1 col-span-2 max-w-sm rounded shadow-xl w-full mx-auto md:mx-0 md:ml-auto text-center flex flex-col gap-y-14 py-10 justify-center items-center bg-white my-7 md:my-20">
                                <img className="object-center mx-auto" src={pc} alt="" />
                                <Button subclasses1="font-black text-base" subclasses2="hidden" customClass="btn-wide" subtext1="Add to PyCharm" subtext2="" />
                            </div>
                            <div className="md:col-span-1 col-span-2 max-w-sm rounded shadow-xl w-full mx-auto md:mx-0 md:mr-auto text-center flex flex-col gap-y-14 py-10 justify-center items-center bg-white my-7 md:my-20">
                                <   img className="object-center mx-auto" src={vscode} alt="" />
                                <Button subclasses1="font-black text-base" subclasses2="hidden" customClass="btn-wide" subtext1="Add to VS Code" subtext2="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* fourth section start */}
                <FeatureSection
                    heading="More than just linting"
                    orderClass="order-2 lg:order-1"
                    orderClass2="order-1 lg:order-2"
                    img={Img}
                    description="  From simplifying conditionals to extracting out methods, Sourcery helps you to make the code you work with as clean and concise as possible so you can do your best work."
                    greaterIcon="hidden"
                    buttonClass="hidden" />

                {/* Fifth section start */}
                <div className="bg-gray-100">
                    <div className="max-w-screen-2xl mx-5 md:mx-auto flex justify-center overflow-x-hidden items-center">
                        <div className="grid lg:grid-cols-2 max-w-7xl items-center justify-center sm:grid-cols-1 w-screen pt-0 pb-20">
                            <div className="col-span-1 max-w-xl flex flex-col space-y-7 items-center justify-center mx-auto lg:pr-14 py-5 lg:border-r-2">
                                <h3 className="text-3xl md:text-5xl text-center text-magento-dark font-black">Powering developers around the world</h3>
                                <p className="text-xl text-black-dark text-center font-medium max-w-lg">
                                    "I can't live without Sourcery now. <br></br>It makes code so much cleaner."<br></br>
                                    <span className="block mx-auto text-gray-400 mt-5">Jack McKew</span>
                                </p>
                            </div>
                            <div className="col-span-1 max-w-xl flex flex-col items-center justify-center py-5 mx-auto">
                                <span className="text-center text-bold text-gray-400 my-5">USED BY DEVELOPERS AT</span>
                                <div className="flex flex-col md:flex-row items-center gap-y-10 gap-x-16 justify-center mt-5">
                                    <img src={cisco} className="h-20 w-36 opacity-70" alt="" />
                                    <img src={rev} className="h-10 w-44 opacity-80" alt="" />
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-y-10 gap-x-16 mt-10 justify-center">
                                    <img src={cua} className="h-11 w-44 opacity-60" alt="" />
                                    <img src={sky} className="h-16 w-28 opacity-60" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* sub footrt */}
                <SubFooter />
                <Footer/>
            </div>


        );
    }
}

export default Home;