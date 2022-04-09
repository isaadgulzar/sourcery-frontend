import React, { Component } from 'react'

export default class Faqs extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:this.props.show,
            textColor:"text-blue-dark"
        }
        
    }
    handleClick=()=>{
        this.setState({ show: !this.state.show }) 
        

    }
    
    render() {
        return (
            <>
                 <div className="flex w-full flex-col rounded-md border border-gray-light">
                        {/* <!-- FAQ Body  --> */}
                        <div className="p-5 md:p-10">
                            {/* <!-- Questin  --> */}
                            <div className="flex w-full justify-between items-center cursor-pointer">
                                <span className={`text-base md:text-4xl font-extrabold ${this.state.show?"text-blue-lighter":"text-blue-dark"}`}>
                                    {this.props.question}
              </span>
                                <span onClick={this.handleClick }>{this.state.show ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-lighter" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>}</span>
                            </div>
                            {/* <!-- Answer - hidden --> */}
                            {this.state.show ? <div className="mt-2">
                                <p className="text-sm md:max-w-4xl text-gray-500">
                                   {this.props.answer}
            </p>
                            </div> : null}
                        </div>
                    </div>
            </>
        )
    }
}
