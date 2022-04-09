import React, { Component } from 'react'
import BlogsCard from '../blogsCard/blogsCard'
import Logo2 from '../../assets/imgs/logo2.png'
import NavBar from '../navbars/navbar'
import Header from './header'
import SubFooter from '../footer/subFooter'
import Footer from '../footer/footer'
export default class Blogs extends Component {
    render() {
        return (
            <>
            {/* navbar */}
             <NavBar logo={Logo2} bgColor="bg-white" />
             {/* end */}
             {/* header */}
             <Header/>
             {/* end */}
                <div class="">
                    <div class="max-w-screen-2xl 2xl:mx-auto mx-5 lg:mx-16 justify-center items-center">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5">
                            <BlogsCard
                            img="https://via.placeholder.com/300/130A44/F7931E?text=sourcey"
                            uperText="Code"
                            heading="Making lunch faster with Python concurrency"
                            description="  A lunchtime story to demonstrate threading, asyncio, multiprocessing & cloud functions"
                            />
                            <BlogsCard
                            img="https://via.placeholder.com/300/605AF6/FFFFFF?text=sourcey"
                            uperText="Code"
                            heading="Python Refactorings - Part 6"
                            description=" Six more examples of ways to refactor your Python code, and why they are improvements"
                            />
                            <BlogsCard
                            img="https://via.placeholder.com/300/FEE7C5/000000?text=sourcey"
                            uperText="Code"
                            heading="Python Refactorings - Part 5"
                            description=" Six more examples of ways to refactor your Python code, and why they are improvements"
                            />
                            {/* second row */}
                                  <BlogsCard
                            img="https://via.placeholder.com/300/605AF6/FFFFFF?text=sourcey"
                            uperText="News"
                            heading="Sourcery now available in Sublime!"
                            description=" Instantly refactor your Python code"
                            />
                            <BlogsCard
                            img="https://via.placeholder.com/300/130A44/F7931E?text=sourcey"
                            uperText="Product News"
                            heading="Introducing Sourcery Pro!"
                            description="Don't miss out on these powerful new features - write better code faster today."
                            />
                            <BlogsCard
                            img="https://via.placeholder.com/300/FEE7C5/000000?text=sourcey"
                            uperText="Code"
                            heading="Can you fit all of this code in your head?"
                            description="Measuring how hard code is to understand with our new working memory metric"
                            />
                            {/* third row */}
                            <BlogsCard
                            img="https://via.placeholder.com/300/605AF6/FFFFFF?text=sourcey"
                            uperText="News"
                            heading="Sourcery now available in Sublime!"
                            description=" Instantly refactor your Python code"
                            />
                            <BlogsCard
                            img="https://via.placeholder.com/300/130A44/F7931E?text=sourcey"
                            uperText="Product News"
                            heading="Introducing Sourcery Pro!"
                            description="Don't miss out on these powerful new features - write better code faster today."
                            />
                            <BlogsCard
                            img="https://via.placeholder.com/300/FEE7C5/000000?text=sourcey"
                            uperText="Code"
                            heading="Can you fit all of this code in your head?"
                            description="Measuring how hard code is to understand with our new working memory metric"
                            />
                        </div>
                    </div>
                </div>
                <SubFooter/>
                <Footer/>
            </>
        )
    }
}
