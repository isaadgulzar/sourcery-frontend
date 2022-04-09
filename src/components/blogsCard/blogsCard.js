import React, { Component } from 'react'

export default class BlogsCard extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <>
             <div class="col-span-1 flex flex-col">
                  <img src={this.props.img} alt="" class="w-full h-72"/>
                  <span class="text-sm font-bold text-purple-medium my-5">{this.props.uperText}</span>
                  <h2 class="text-2xl font-extrabold text-black-light -mt-2">{this.props.heading}</h2>
                  <p class="text-sm text-black-light opacity-50 mt-2 mb-6">
                    {this.props.description}
                  </p>
                </div>
                
            </>
        )
    }
}
