import React, { Component } from 'react'
import Button from '../buttons/button'
import PlanCards from '../PlanCards/planCards'

export default class Header extends Component {
  render() {
    let arrow = <>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>

    </>
    return (
      <>
        <div className="bg-blue-dark">
          <div className="pt-12 sm:pt-16 lg:pt-24">
            <div className="flex flex-col items-center mx-auto py-14">
              <h3 className="text-3xl lg:text-5xl max-w-md text-center text-white font-black">
                Write cleaner code
          </h3>
              <p className="text-xl text-white opacity-50 max-w-md text-center mt-6">
                Go beyond just linting. Pick a plan to make all your code clearer, cleaner, and easier to work with
          </p>
            </div>
          </div>
          <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
            <div className="relative">
              <div className="absolute inset-0 h-3/4 bg-blue-dark"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto space-y-4 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
                  <PlanCards
                    uperText="FOR SIDE PROJECTS"
                    heading="  Free "
                    subHeading=" Basic code quality suggestions"
                    listItem1=" Code quality scores"
                    listItem2=" Function level analysis"
                    listItem3="  Basic Refactorings"
                    buttonText="Get Started"
                    displayItem4="hidden"
                    displayItem5="hidden"
                    displayItem6="hidden"
                    customClass="btn-wide"
                    />
                  {/* second card */}
                  <PlanCards
                    uperText="FOR WORK PROJECTS"
                    heading="    Pro  "
                    subHeading="  Whole project analysis and in depth feedback for your work"
                    listItem1="  Everything in Free"
                    listItem2="  Multi-flee analysis"
                    listItem3="   Duplicate code detection"
                    listItem4="    Advanced Refactorings"
                    buttonText="Get Started"
                    displayItem4=""
                    displayItem5="hidden"
                    displayItem6="hidden"
                    customClass="btn-wide"
                    />


                  {/* third card */}
                  <PlanCards
                    uperText=" FOR TEAMS"
                    heading="  Team "
                    subHeading="  Streamlined code reviews and consistent code quality for teams of 3 to 149"
                    listItem1="  Everything in Pro"
                    listItem2="  Self Hosted CI Integration"
                    listItem3="   Pre Commit Hook"
                    listItem4="   Centralized Billing"
                    listItem5="     Admin Panel"
                    listItem6="    Dedicated Account Manager"
                    buttonText="Get Started"
                    displayItem4=""
                    displayItem5=""
                    displayItem6=""
                    buttonText="Request a Demo"
                    customClass="btn-wide btn-purple-outline" />
                </div>
              </div>
            </div>
            <div className="my-10">
              <a href="#" className="flex items-center justify-center  space-x-2 text-blue-500 hover:text-blue-600">
                <span className="font-black cursor-pointer text-base">See complete feature list</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
