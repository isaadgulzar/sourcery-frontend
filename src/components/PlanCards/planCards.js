import React, { Component } from 'react'
import Button from '../buttons/button'

export default class PlanCards extends Component {
    render() {
        let TickIcon = <>
            <svg className="h-6 w-6 text-orange-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </>
        let arrow = <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>

        </>
        return (
            <>
                <div className="flex flex-col rounded-md shadow-3xl bg-white">
                    <div className="flex flex-col space-y-5 text-center sm:text-left py-10 bg-white px-5 sm:px-10 h-72 rounded-md">
                        <div>
                            <span className="text-base uppercase text-gray-400">
                                {this.props.uperText}
                            </span>
                        </div>
                        <div className="lg:pt-5 text-6xl text-center sm:text-left font-extrabold">
                            {this.props.heading}
                        </div>
                        <p className="text-base text-gray-400">
                            {this.props.subHeading}
                        </p>
                    </div>
                    <div className="flex  flex-col justify-between mx-auto sm:mx-0 px-5 sm:px-10 pt-5 bg-white space-y-6 h-60 lg:h-72">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="flex-shrink-0">
                                    {TickIcon}
                                </div>
                                <p className="ml-3 text-xl text-gray-700">
                                    {this.props.listItem1}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0">
                                    {TickIcon}
                                </div>
                                <p className="ml-3 text-xl text-gray-700">
                                    {this.props.listItem2}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0">
                                    {TickIcon}
                                </div>
                                <p className="ml-3 text-xl text-gray-700">
                                    {this.props.listItem3}
                                </p>
                            </li>
                            <li className={`flex items-start ${this.props.displayItem4}`}>
                                <div className="flex-shrink-0">
                                    {TickIcon}
                                </div>
                                <p className="ml-3 text-xl text-gray-700">
                                    {this.props.listItem4}
                                </p>
                            </li>
                            <li className={`flex items-start ${this.props.displayItem5}`}>
                                <div className="flex-shrink-0">
                                    {TickIcon}
                                </div>
                                <p className="ml-3 text-xl text-gray-700">
                                    {this.props.listItem5}
                                </p>
                            </li>
                            <li className={`flex items-start ${this.props.displayItem6}`}>
                                <div className="flex-shrink-0">
                                    {TickIcon}
                                </div>
                                <p className="ml-3 text-xl text-gray-700">
                                    {this.props.listItem6}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="my-14 flex justify-center h-16 mx-5">
                        <Button subclasses1="font-black pl-2" subclasses2="pr-2" customClass={this.props.customClass} subtext1={this.props.buttonText} subtext2={arrow} />
                    </div>
                </div>


            </>
        )
    }
}
