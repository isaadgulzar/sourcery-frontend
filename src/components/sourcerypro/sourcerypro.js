import React, { Component } from 'react'
import NavBar from '../../components/navbars/navbar'
import Img from '../../assets/imgs/section1.png'
import Img2 from '../../assets/imgs/section2.png'
import Img3 from '../../assets/imgs/section3.png'
import Header from './header'
import greaterIcon from '../../assets/imgs/greaater.png'
import Logo from '../../assets/imgs/Logo.png'
import Button from '../../components/buttons/button'
import FeatureSection from '../featureSections/featureSection'
import Footer from '../footer/footer'

export default class SourceryPro extends Component {
    render() {
        let arrow = <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>

        </>
        return (
            <>
                {/* navbar start */}
                <NavBar logo={Logo} bgColor="bg-blue-dark" textColor="text-white" />
                {/* navbar-end */}
                {/* header start */}
                <Header />
                {/* header end */}
                {/* section 1 */}
                <FeatureSection
                    uperText="MULTI-FILE REFACTORING"
                    orderClass="order-2 lg:order-1"
                    orderClass2="order-1 lg:order-2"
                    img={Img}
                    greaterIcon=""
                    heading="Cover your whole project."
                    description=" Multi-file refactoring analyses your entire project, so every corner of your code is easier to understand.
                "
                    buttonText="Upgrade to Pro" />

                {/* section1 end */}
                {/* section2 */}
                <FeatureSection
                    uperText=" METHOD EXTRACTION"
                    orderClass="order-2"
                    orderClass2="order-1 mx-auto lg:mx-4 xl:mx-auto"
                    img={Img2}
                    greaterIcon=""
                    heading="Simplify your functions."
                    description="  Method extraction automatically suggests ways for you to simplify your functions."
                    buttonText="Upgrade to Pro" />

                {/* section 3 */}

                <FeatureSection
                    uperText=" DUPLICATE CODE DETECTION"
                    orderClass="order-2 lg:order-1"
                    orderClass2="order-1 lg:order-2"
                    img={Img3}
                    greaterIcon=""
                    heading="Find your clones."
                    description="   Duplicate code detection scans a folder or your whole project and flags repeated section of code, helping you make maintenance easier.
                "
                    buttonText="Upgrade to Pro" />

                <div className="bg-white my-10 px-5 lg:px-0">
                    <div className="flex flex-col items-center mx-auto py-14">
                        <h3 className="text-3xl lg:text-5xl max-w-sm text-center text-blue-dark font-black">
                            Take your code to the next level
            </h3>
                        <p className="text-xl text-black text-center mt-6">From
                        Unlock Sourcery Pro’s advanced features and suggestions
            </p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0 px-5">
                        <div className="flex flex-col rounded-md shadow-3xl">
                            <div className="flex flex-col space-y-5 py-10 bg-white text-center md:text-left px-5 sm:px-14 h-60 rounded-md">
                                <div>
                                    <span className="text-base uppercase text-gray-400">
                                        FOR SIDE PROJECTS
                        </span>
                                </div>
                                <div className="pt-5 text-6xl font-extrabold">
                                    Free
                    </div>
                                <p className="text-base text-gray-400">
                                    Basic code quality suggestions
                                </p>
                            </div>
                            <div className="flex flex-col justify-between px-5 sm:px-14 pt-5 mx-auto md:mx-0 bg-white space-y-6 h-52">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-xl text-gray-700">
                                            Code quality scores
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-xl text-gray-700">
                                            Function level analysis
                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-xl text-gray-700">
                                            Basic Refactorings
                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden md:block my-14 h-16">

                            </div>
                        </div>
                        <div className="flex flex-col rounded-md shadow-3xl">
                            <div className="flex flex-col space-y-5 py-10 bg-white text-center md:text-left px-5 sm:px-14 h-64 md:h-60 rounded-md">
                                <div>
                                    <span className="text-base uppercase text-gray-400">
                                        FOR WORK PROJECTS
                    </span>
                                </div>
                                <div className="pt-5 text-6xl font-extrabold">
                                    Pro
                  </div>
                                <p className="text-base text-gray-400 w-44 mx-auto md:mx-0">
                                    Whole project analysis and in depth feedback for your work
                  </p>
                            </div>
                            <div className="flex  flex-col justify-between px-5 sm:px-14 mx-auto md:mx-0 pt-5 bg-white space-y-6 h-52">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-xl text-gray-700 font-bold">
                                            Everything in Free
                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-xl text-gray-700">
                                            Multi-flee analysis
                      </p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-xl text-gray-700">
                                            Duplicate code detection
                      </p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-xl text-gray-700">
                                            Advanced Refactorings
                      </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-14 h-16 justify-center flex">
                                <Button subclasses1="font-black pl-3" subclasses2="pr-2" customClass="btn-wide" subtext1="Upgrade to Sourcery Pro" subtext2={arrow} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* section4 end */}
                {/* sub footrt */}
                <div className="bg-blue-dark">
                    <div className="max-w-screen-2xl mx-auto py-8 text-center lg:text-left">
                        <div className="flex flex-col items-center space-y-10 py-16 pb-24">
                            <h1 className="text-3xl md:text-5xl text-center lg:text-left text-white font-black">There’s a better way to write code.</h1>
                            <Button subclasses1="font-black pl-3" subclasses2="pr-2" customClass="btn-wide" subtext1="Upgrade to Sourcery Pro" subtext2={arrow} />

                        </div>
                    </div>
                </div>



<Footer/>
            </>
        )
    }
}
