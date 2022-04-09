import React, { Component } from 'react'
import '../../assets/css/button.css'

export default class Button extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <button className={` ${this.props.customClass} flex items-center focus:outline-none`}>
                     <span className={this.props.subclasses1}>{this.props.subtext1}</span>
                     <span className={this.props.subclasses2}>{this.props.subtext2}</span>
                </button>
            </div>
        )
    }
}
