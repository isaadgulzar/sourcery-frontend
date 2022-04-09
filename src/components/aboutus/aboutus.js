import React, { Component } from 'react'
import NavBar from '../navbars/navbar'
import Header from './header'
import Img from '../../assets/imgs/about-section.png'
import Button from '../buttons/button'
import Logo from '../../assets/imgs/Logo.png'
import face1 from '../../assets/imgs/face1.png' 
import face2 from '../../assets/imgs/face2.png' 
import face3 from '../../assets/imgs/face3.png' 
import SubFooter from '../footer/subFooter'
import FeatureSection from '../featureSections/featureSection'
import Footer from '../footer/footer'

export default class aboutus extends Component {
    componentDidMount = () => {

        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                {/* navbar */}
                <NavBar logo={Logo} bgColor="bg-blue-dark" textColor="text-white" />
                {/* navbar end */}
                {/* header start */}
                <Header />
                {/* header end  */}
                {/* sections start */}
                <FeatureSection
                    uperText=""
                    orderClass="order-2 lg:order-1"
                    orderClass2="order-1 lg:order-2"
                    img={Img}
                    greaterIcon="hidden"
                    heading="Our code assistant helps anyone write clearer, cleaner Python."
                    description="At Sourcery we want to help make all code easier to work with. Thousands of developers around the world are using our tools to help make their Python code cleaner and clearer to work with. We make suggestions to make it easier to debug and develop new features while going way beyond what traditional linters can offer.
                    But we’re still young, so we always want to hear your feedback about how we can be doing more and doing better."
                    buttonText="Let Us Know!" />

                {/* section1 end */}
                {/* 2nd section */}
                <div >
                    <div className="max-w-screen-2xl mx-auto md:ml-24 md:mr-16 2xl:mx-auto justify-center items-center">
                        <div className="grid grid-cols-1 xl:grid-cols-5 justify-center items-center px-5 py-24">
                            <div className="col-span-3 mx-auto xl:mx-0 max-w-lg px-2 md:px-0">
                                <h3 className="text-3xl xl:text-4xl text-center xl:text-left text-magento-dark font-black">
                                    A small team, trying to change the way we code
                    </h3>
                                <p className="text-base text-black-dark text-center xl:text-left font-medium max-w-lg mt-6">From
                                We’re a small team based out of London trying to make it so you never have to deal with bad
                                quality code ever again.
                    </p>
                                <p className="text-base text-black-dark text-center xl:text-left font-medium max-w-lg mt-6">From
                                Want to join us on our journey?
                    </p>
                                <a href="#" className="flex items-center justify-center xl:justify-start space-x-2 text-blue-500 hover:text-blue-600 mt-7">
                                    <span className="font-black cursor-pointer text-lg">Check out our open roles!</span>
                                </a>
                            </div>
                            <div className="col-span-2 justify-center pt-3 lg:pt-0 grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 xl:mt-0">
                                <div className="col-span-1 text-center xl:text-left">
                                    <img className="mx-auto xl:mx-0 w-36 h-36 2xl:w-44 2xl:h-44" src={face1} alt="" />
                                    <p className="mt-3 text-gray-500">Brendan Maginnis</p>
                                </div>
                                <div className="col-span-1 text-center xl:text-left">
                                    <img className="mx-auto xl:mx-0 w-36 h-36 2xl:w-44 2xl:h-44" src={face2} alt="" />
                                    <p className="mt-3 text-gray-500">Nick Thapen</p>
                                </div>
                                <div className="col-span-1 text-center xl:text-left">
                                    <img className="mx-auto xl:mx-0 w-36 h-36 2xl:w-44 2xl:h-44" src={face3} alt="" />
                                    <p className="mt-3 text-gray-500">Tim Gilboy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* sub footrt */}
           ]<SubFooter/>
           <Footer/>
            </>
        )
    }
}
