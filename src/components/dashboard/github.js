import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../buttons/button'

export default class Github extends Component {
  constructor(props){
    super(props)
    this.state={
      tab: 'tab1'
    }
  }
  render() {
    let plusIcon = <>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg></>

    return (
      <>
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* <!-- Content Header --> */}
          <div class="border-b py-3 px-5 2xl:px-0">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
              <h3 class="text-lg font-extrabold text-black-light">GitHub Code Review</h3>
              <a href="#" class="flex space-x-3 items-center">
                <img class="inline-block h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/1x1"
                  alt="" />
                <span class="text-sm font-bold text-black-light">Iva Pezic</span>
              </a>
            </div>
          </div>
          {/* <!-- Content Body --> */}
          <div class="max-w-7xl mx-auto px-5 2xl:px-0">
            <div>
              {/* <!-- 1st Row --> */}
              <div class="flex flex-col pt-7 pb-5 md:pb-7">
                <div class="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row items-center md:justify-between">
                  <div class="flex order-2 md:order-1 space-x-5 w-full md:w-auto">
                    <ul class="flex space-x-10 border-b py-2">
                      <li><a onClick={()=>{
                        this.setState
                        ({
                          tab:'tab1'
                        })
                      }} class={`text-base ${ this.state.tab == 'tab1' ? 'font-extrabold text-orange-light border-b-4 border-orange-light':'text-black-light'} py-2 cursor-pointer`}>Active Repos</a></li>
                      <li><a onClick={()=>{
                        this.setState
                        ({
                          tab:'tab2'
                        })
                      }} class={`text-base ${ this.state.tab == 'tab2' ? 'font-extrabold text-orange-light border-b-4 border-orange-light':'text-black-light'} py-2 cursor-pointer`}>Inactive Repos</a></li>
                    </ul>
                  </div>
                  <div class="flex order-1 md:order-2 py-5 md:py-0 space-x-5 w-full justify-end md:w-auto">
                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange-outline" subtext1="" subtext2="Upgrade" />
                    <Link to="/dashboard/add-repo"> <Button subclasses1="" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange" subtext1={plusIcon} subtext2="Add Repos" /></Link>
                  </div>
                </div>
                <div class="flex w-full mt-5">
                  {/* <!-- Active Repos --> */}
                 {this.state.tab==="tab1"? <ul  class="flex flex-col w-full divide-y">
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/Advent-of-Code-2020</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/airflow</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/altesk</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/Advent-of-Code-2020</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/airflow</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/altesk</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/Advent-of-Code-2020</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/airflow</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/altesk</a></li>
                  </ul>:null}
                  {/* <!-- Inactive Repos --> */}
                  {this.state.tab==="tab2"? <ul class="flex flex-col w-full divide-y">
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycafptain19/Advent-of-Code-2020</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycafdptain19/airflow</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/altesk</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycfaptain19/Advent-of-Code-2020</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/airflow</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycafptain19/altesk</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/Advent-of-Code-2020</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/airflow</a></li>
                    <li class="flex py-4"><a href="#" class="text-darkblue text-sm font-bold">angrycaptain19/altesk</a></li>
                  </ul>:null}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}
