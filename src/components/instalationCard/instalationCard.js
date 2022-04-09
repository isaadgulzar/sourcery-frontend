import React, { Component } from 'react'
import Button from '../buttons/button'

export default class InstalationCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      customClass:this.props.customClass,
      subclasses1:this.props.subclasses1,
      subtext2:this.props.buttonText,
    }
    
}
toggleClass=()=>{
  console.log(this.props.id, 'sada')

  if(this.props.id==="install"){
    this.setState({
      customClass:"btn-short btn-green-outline cursor-not-allowed",
      subclasses1: "fas fa-check",
      subtext2: "Installed"
    })
  }else{
    this.setState({
      customClass:this.props.customClass,
      subclasses1:this.props.subclasses1,
      subtext2:this.props.buttonText
    })
  }
}
    
    render() {
      
        return (
            <>
             <div class="col-span-1 flex flex-col p-7 pb-5 border">
                <img src={this.props.Img} alt="" class="w-20 h-20"/>
                <h3 class="text-lg font-extrabold text-black-light mt-6">{this.props.heading}</h3>
                <p class="text-sm text-black-light opacity-50 mt-2 mb-6">
                 {this.props.description}
                </p>
               <span onClick={this.toggleClass} > 
                  <Button subclasses1={this.state.subclasses1} subclasses2={this.props.textClasses} customClass={this.state.customClass} subtext1="" subtext2={this.state.subtext2} />
               </span>
              </div>
            </>
        )
    }
}
