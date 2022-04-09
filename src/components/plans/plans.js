import React, { Component } from 'react'
import NavBar from '../navbars/navbar'
import Header from './header'
import Button from '../buttons/button'
import Logo from '../../assets/imgs/Logo.png'
import SubFooter from '../footer/subFooter'
import Faqs from '../FAQS/faqs'
import Footer from '../footer/footer'

export default class Plans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show1: true,
            show2: false
        }
    }

    render() {
        let arrow = <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>

        </>
        return (
            <>
                {/* navbar */}
                <NavBar logo={Logo} bgColor="bg-blue-dark" textColor="text-white" />
                {/* navbar end */}
                {/* header  start */}
                <Header />
                {/* header end */}
                {/* table */}
                <div className="bg-white my-10 px-5 lg:px-0">
                    <div className="max-w-7xl mx-auto bg-purple-dark rounded-md py-5 px-5 lg:px-8">

                        <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
                            <section>
                                <p className="py-16 text-2xl md:text-4xl font-black text-white text-left">All Features</p>
                                <table className="w-full mb-10">
                                    <tbody>
                                        <tr className="border-b border-white">
                                            <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-left" colspan="2">Free</th>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Quality Metrics</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Multi-file analysis</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Method extraction</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Duplicate code detection</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Advanced refactorings</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Self hosted  CI</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Pre Commit Hook</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <div className="flex flex-col items-center space-y-2 mx-auto pt-5">
                                                    <span className="text-base text-white opacity-50 text-center">Basic code quality suggestions</span>
                                                    <p className="text-3xl font-black text-white pb-2">Free</p>
                                                    <Button subclasses1="font-black" customClass="btn-wide btn-orange-light" subclasses2="hidden" subtext1="Current Plan" subtext2="" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="w-full mb-10">
                                    <tbody>
                                        <tr className="border-b border-white">
                                            <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-left" colspan="2">Pro</th>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Quality Metrics</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Multi-file analysis</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Method extraction</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Duplicate code detection</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Advanced refactorings</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Self hosted  CI</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Pre Commit Hook</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <div className="flex flex-col items-center space-y-2 mx-auto pt-5">
                                                    <span className="text-base text-white opacity-50 text-center">Whole project analysis and in depth feedback for your work</span>
                                                    <div className="flex flex-col items-center space-y-2">
                                                        <span className="text-base text-white">Starting at</span>
                                                        <p className="text-3xl font-black text-white pb-2">$12<span className="text-base font-normal text-white"> /month</span></p>
                                                    </div>
                                                    <Button subclasses1="font-black " subclasses2="hidden" customClass="btn-wide" subtext1="Get Started" subtext2="" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="w-full mb-10">
                                    <tbody>
                                        <tr className="border-b border-white">
                                            <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-left" colspan="2">Team</th>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Quality Metrics</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Multi-file analysis</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Method extraction</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Duplicate code detection</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Advanced refactorings</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Self hosted  CI</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-shily-lighter">
                                            <th className="py-5 text-base font-bold text-white text-left" scope="row">Pre Commit Hook</th>
                                            <td className="py-5">
                                                <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <div className="flex flex-col items-center space-y-2 mx-auto pt-5">
                                                    <span className="text-base text-white opacity-50 text-center">Streamlined code reviews and consistent code quality for teams of 3 to 149</span>
                                                    <p className="text-3xl font-black text-white pb-2">Custom pricing</p>
                                                    <Button subclasses1="font-black"  subclasses2="hidden" customClass="btn-wide" subtext1="Get Started" subtext2="" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>


                        {/* <!-- lg+ --> */}
                        <div className="hidden lg:block">
                            <p className="py-16 text-lg md:text-4xl font-black text-white text-left" colspan="4" scope="colgroup">All Features</p>
                            <table className="w-full mb-14 table-fixed">
                                <tbody>
                                    <tr className="border-b border-white">
                                        <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-left">Quality Insights</th>
                                        <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-center">Free</th>
                                        <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-center">Pro</th>
                                        <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-center">Team</th>
                                    </tr>
                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Quality Metrics</th>
                                        <td className="py-5 px-6">
                                            {/* <!-- Heroicon name: solid/check --> */}
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            {/* <!-- Heroicon name: solid/check --> */}
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            <span className="sr-only">Included in Essential</span>
                                        </td>

                                        <td className="py-5 px-6">
                                            {/* <!-- Heroicon name: solid/check --> */}
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            <span className="sr-only">Included in Premium</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14 table-fixed">
                                <tbody>
                                    <tr className="border-b border-white">
                                        <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-left" colspan="4" scope="colgroup">Code Improvements</th>
                                    </tr>

                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Basic Refactorings</th>
                                        <td className="py-5 px-6">
                                            {/* <!-- Heroicon name: solid/check --> */}
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            {/* <!-- Heroicon name: solid/check --> */}
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            <span className="sr-only">Included in Essential</span>
                                        </td>

                                        <td className="py-5 px-6">
                                            {/* <!-- Heroicon name: solid/check --> */}
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            <span className="sr-only">Included in Premium</span>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Multi-file analysis</th>
                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Method extraction</th>
                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Duplicate code detection</th>
                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Advanced refactorings</th>
                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-7 table-fixed">
                                <tbody>
                                    <tr className="border-b border-white">
                                        <th className="py-3 text-lg md:text-2xl font-extrabold text-white text-left" colspan="4" scope="colgroup">Integrations</th>
                                    </tr>

                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Self hosted  CI</th>
                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>
                                    </tr>

                                    <tr className="border-b border-shily-lighter">
                                        <th className="py-5 px-6 text-base font-bold text-white text-left" scope="row">Pre Commit Hook</th>
                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white opacity-50 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                        <td className="py-5 px-6">
                                            <svg className="h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-4 table-fixed">
                                <tbody>
                                    <tr>
                                        <th className="sr-only" scope="row">Choose your plan</th>
                                        <td className="py-5 px-6">
                                            <div className="flex flex-col space-y-2 mx-auto">
                                                <div className="flex flex-col space-y-2 h-40">
                                                    <span className="text-lg md:text-2xl font-extrabold text-white text-left">Free</span>
                                                    <span className="text-base text-white opacity-50 text-left">Basic code quality suggestions</span>
                                                </div>
                                                <div className="flex flex-col space-y-2 h-28">
                                                </div>
                                                <Button subclasses1="font-black" customClass="btn-wide btn-orange-light" subclasses2="hidden" subtext1="Current Plan" subtext2="" />


                                            </div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="flex flex-col space-y-2 mx-auto">
                                                <div className="flex flex-col space-y-2 h-40">
                                                    <span className="text-lg md:text-2xl font-extrabold text-white text-left">Pro</span>
                                                    <span className="text-base text-white opacity-50 text-left">Whole project analysis and in depth feedback for your work</span>
                                                </div>
                                                <div className="flex flex-col space-y-2 h-28">
                                                    <span className="text-base text-white">Starting at</span>
                                                    <p className="text-3xl font-black text-white pb-10">$12<span className="text-base font-normal text-white"> /month</span></p>
                                                </div>
                                                <Button subclasses1="font-black " subclasses2="hidden" customClass="btn-wide" subtext1="Get Started" subtext2="" />
                                            </div>
                                        </td>

                                        <td className="py-5 px-6">
                                            <div className="flex flex-col space-y-2 mx-auto">
                                                <div className="flex flex-col space-y-2 h-40">
                                                    <span className="text-lg md:text-2xl font-extrabold text-white text-left">Team</span>
                                                    <span className="text-base text-white opacity-50 text-left">Streamlined code reviews and consistent code quality for teams of 3 to 149</span>
                                                </div>
                                                <div className="flex flex-col space-y-2 h-28">
                                                    <span className="text-base text-white opacity-0">custom pricing</span>
                                                    <p className="text-3xl font-black text-white pb-10">Custom pricing</p>
                                                </div>
                                                <Button subclasses1="font-black " subclasses2="hidden" customClass="btn-wide" subtext1="Get Started" subtext2="" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* table end */}
                {/* FAQS */}
                <div className="px-5 lg:px-10 xl:px-0 max-w-7xl flex flex-col items-center mx-auto space-y-5 py-14">
                    <h3 className="text-3xl lg:text-5xl max-w-md text-center text-blue-dark font-black capitalize pb-10">
                        Frequently asked questions
      </h3>
                    {/* <!-- FAQ Item  --> */}
                    <Faqs
                    question="What’s included in Pro Plan?"
                    answer="Duplicate code detection scans a folder or your whole project and flags repeated section of code, helping you make maintenance easier."
                    show={true}
                    textColor="text-blue-lighter"/>
                   
                    {/* <!-- FAQ Item 2 --> */}
                    <Faqs
                    question="What’s included in Team Plan?"
                    answer=" Duplicate code detection scans a folder or your whole project and flags repeated section of code, helping you make maintenance easier."
                    show={this.state.show2}
                    textColor="text-blue-dark"/>
                    
                    {/* <!-- FAQ Item 3 --> */}
                    <Faqs
                    question=" Is there Trial version?"
                    answer="Duplicate code detection scans a folder or your whole project and flags repeated section of code, helping you make maintenance easier."
                    show={this.state.show}
                    textColor="text-blue-dark"/>
                   </div>
                   
                {/* faqs end */}
                {/* sub footrt */}
                <SubFooter />
                <Footer/>

            </>
        )
    }
}
