import React, { Component } from 'react'
import Footer from '../footer/footer'
import NavBar from '../navbars/navbar'
import Button from '../buttons/button'
import Logo2 from '../../assets/imgs/logo2.png'
import SubFooter from '../footer/subFooter'

export default class Signup extends Component {
    render() {
        return (
            <>
                {/* navbar */}
                <NavBar logo={Logo2} bgColor="bg-white" />
                {/* navbar end  */}
                {/* sections start */}
                <div className="mt-5">
                    <div className="max-w-screen-2xl mx-auto h-screen flex flex-col justify-around items-center">
                        <div className="max-w-sm flex flex-col space-y-10 my-20">
                            <h1 className="text-3xl md:text-7xl text-blue-900 mt-10 text-center font-black">Sign up</h1>
                            <div className="flex flex-col items-center space-y-5">

                                <Button subclasses1="font-black text-base" customClass="btn-wide" subclasses2="hidden" subtext1="Sign up with Email" subtext2="" />
                                <Button subclasses1="font-black text-base" customClass="btn-wide" subclasses2="hidden" subtext1="Sign up with Google" subtext2="" />
                                <Button subclasses1="font-black text-base" customClass="btn-wide" subclasses2="hidden" subtext1="Sign up with GitHub" subtext2="" />

                            </div>
                            <label class="flex mt-5 mx-auto w-64 md:w-64 lg:w-60 xl:w-64 2xl:w-72">
                                <input type="checkbox" class="flex-shrink-0 form-checkbox h-4 w-5 text-indigo-800"/>
                                <span class="ml-3.5 -mt-1 text-xs text-gray-700 opacity-70">Send me product updates, premium offers, and weekly progress reports.</span>
                            </label>
                        </div>
                        <span className="text-center mx-5 md:mx-auto -mt-12 text-gray-700">
                            By signing up you agree to our terms and conditions and privacy policy
                        </span>
                    </div>
                </div>


                {/* sub footrt */}
                <SubFooter />
                <Footer/>

            </>
        )
    }
}
