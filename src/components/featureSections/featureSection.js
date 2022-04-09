import React, { Component } from 'react'
import greaterIcon from '../../assets/imgs/greaater.png'

export default class FeatureSection extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div className="bg-gray-100">
                    <div className="max-w-screen-2xl mx-auto flex justify-center overflow-x-hidden items-center">
                        <div className={`grid lg:grid-cols-2 grid-cols-1 justify-center items-center space-y-7 w-screen py-10 md:py-24`}>
                            <div className={` col-span-1 ${this.props.orderClass}`} >
                                <img className="mx-auto" src={this.props.img} alt="" />
                            </div>
                            <div className={`col-span-1 ${this.props.orderClass2} lg:max-w-lg px-4 lg:px-0`}>
                                <p className="text-sm pb-5 text-black text-center lg:text-left font-bold opacity-40 lg:max-w-lg">
                                    {this.props.uperText}
                                </p>
                                <h3 className="text-2xl lg:text-4xl text-center lg:text-left text-magento-dark font-black">{this.props.heading}</h3>
                                <p className="text-xl text-black-dark text-center lg:text-left font-medium mt-6 lg:mr-5 lg:mr-0">
                                    {this.props.description}
                                </p>
                                <div className="col-span-1">
                                    <a className="flex items-center justify-center lg:justify-start space-x-2 text-blue-500 hover:text-blue-600 mt-7">
                                        <span className={`font-black cursor-pointer text-lg ${this.props.buttonClass}`}>{this.props.buttonText}</span><img className={this.props.greaterIcon} src={greaterIcon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
