import React, { Component } from 'react'
import Img from '../../assets/imgs/pc-icon.png'
import Img1 from '../../assets/imgs/vscode-icon.png'
import Img2 from '../../assets/imgs/github.png'
import InstalationCard from '../instalationCard/instalationCard'
import Button from '../buttons/button'

export default class Home extends Component {
    render() {
        let plusIcon=<>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg></>
        return (
            <>
             
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* <!-- Content Header --> */}
          <div className="border-b py-3 px-5 2xl:px-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h3 className="text-lg font-extrabold text-black-light">Home</h3>
              <a href="#" className="flex space-x-3 items-center">
                <img className="inline-block h-8 w-8 rounded-full"
                      src="https://via.placeholder.com/1x1"
                      alt=""/>
                <span className="text-sm font-bold text-black-light">Iva Pezic</span>
              </a>
            </div>
          </div>
          {/* <!-- Content Body --> */}
          <div className="max-w-7xl mx-auto px-5 2xl:px-0">
            {/* <!-- Section Heading  --> */}
            <h2 className="text-2xl font-extrabold text-black-light mt-10 py-3">Installation options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 xl:space-y-0 md:gap-x-5">
              {/* <!-- 1 Column Component  --> */}
              <InstalationCard
              Img={Img}
              heading="PyCharm"
              description="Editor redefined and optimized for building and debugging modern web and cloud applications"
              buttonText="Install"
              textClasses="text-sm font-extrabold"
              customClass="btn-short btn-orange"
              subclasses1="fas fa-plus"
              id="install"
              />
             
              
              {/* <!-- end  --> */}
              {/* <!-- 2 Column Component  --> */}
              <InstalationCard
              Img={Img1}
              heading="VS Code"
              description="Editor redefined and optimized for building and debugging modern web and cloud applications"
              buttonText="Install"
              textClasses="text-sm font-extrabold"
              customClass="btn-short btn-orange"
              subclasses1="fas fa-plus"
              id="install"
              />
              {/* <!-- 3 Column Component  --> */}
              <InstalationCard
              Img={Img2}
              heading="GitHub"
              description="Editor redefined and optimized for building and debugging modern web and cloud applications"
              buttonText="Install"
              textClasses="text-sm font-extrabold"
              customClass="btn-short btn-orange"
              subclasses1="fas fa-plus"
              id="install"
              />
            </div>
            {/* <!-- Apply Coupan -->
            <!-- Section Heading  --> */}
            <h2 className="text-2xl font-extrabold text-black-light mt-10 py-3">Your token</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 xl:space-y-0 md:gap-x-5">
              <div className="col-span-1 flex flex-col">
                <input type="text" className="border py-3 pl-3 text-sm text-black font-medium"/>
              </div>
              <div className="col-span-1 flex flex-col">
                  
                <Button subclasses1="fas fa-sync" subclasses2="text-sm font-extrabold" customClass="btn-short btn-green-outline" subtext1="" subtext2="Reset token" />
              
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        
      </main>
      
 
  
            </>
        )
    }
}
