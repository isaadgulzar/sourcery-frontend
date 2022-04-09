import React, { Component } from 'react'
import Logo2 from '../../assets/imgs/logo2.png'
import Footer from '../footer/footer'
import SubFooter from '../footer/subFooter'
import NavBar from '../navbars/navbar'
import Header from './header'
import Img from '../../assets/imgs/blog-post1.png'
import Img2 from '../../assets/imgs/blog-post2.png'
import Button from '../buttons/button'
import pcIcon from '../../assets/imgs/pc-icon-black.png'
import vsIcon from '../../assets/imgs/vs-icon-black.png'
import BlogsCard from '../blogsCard/blogsCard'

export default class BlogPosts extends Component {
    render() {
        let arrow = <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>

        </>
        return (
            <>
                {/* navbar */}
                <NavBar logo={Logo2} bgColor="bg-white" />
                {/* end */}
                {/* header */}
                <Header />
                {/* end */}
                <div class="max-w-4xl mx-5 lg:mx-auto justify-center items-center">
                    <div class="sm:grid grid-cols-4 my-10">
                        <div class="col-span-1 gap-x-4 sm:gap-x-0 sm:space-y-7 flex flex-wrap items-center sm:items-start sm:flex-col">
                            <div class="flex flex-col space-y-1">
                                <span class="text-xs text-black opacity-50">
                                    Author
                                </span>
                                <p class="text-sm font-bold text-black">
                                    Nick Thapen
                                </p>
                            </div>
                            <div class="flex flex-col space-y-1">
                                <span class="text-xs text-black opacity-50">
                                    Category
                                </span>
                                <p class="text-sm font-bold text-black">
                                    Code
                                </p>
                            </div>
                            <div class="flex flex-col space-y-1">
                                <span class="text-xs text-black opacity-50">
                                    Date
                                </span>
                                <p class="text-sm font-bold text-black">
                                    Feb 3, 2021
                                </p>
                            </div>
                            <div class="flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-7 pt-2 sm:pt-10 sm:ml-1">
                                <a href="#">
                                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M11.9883 13.125H8.76562V22.75H4.46875V13.125H0.988281V9.12891H4.46875V6.12109C4.46875 4.97526 4.68359 4.0013 5.11328 3.19922C5.54297 2.39714 6.14453 1.79557 6.91797 1.39453C7.72005 0.964844 8.63672 0.75 9.66797 0.75C10.1263 0.75 10.6133 0.778646 11.1289 0.835938C11.6445 0.864583 12.0456 0.907552 12.332 0.964844L12.7617 1.00781V4.40234H11.043C10.2409 4.40234 9.65365 4.61719 9.28125 5.04688C8.9375 5.44792 8.76562 5.94922 8.76562 6.55078V9.12891H12.5898L11.9883 13.125Z" fill="#1B1B1B" fill-opacity="0.5" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M19.7227 5.28125C19.7513 5.39583 19.7656 5.58203 19.7656 5.83984C19.7656 7.35807 19.4792 8.8763 18.9062 10.3945C18.3333 11.8841 17.5169 13.2591 16.457 14.5195C15.4258 15.7513 14.0794 16.7539 12.418 17.5273C10.7565 18.3008 8.92318 18.6875 6.91797 18.6875C4.39714 18.6875 2.09115 18.0143 0 16.668C0.315104 16.6966 0.673177 16.7109 1.07422 16.7109C3.16536 16.7109 5.04167 16.0664 6.70312 14.7773C5.70052 14.7773 4.8125 14.4909 4.03906 13.918C3.29427 13.3164 2.77865 12.5716 2.49219 11.6836C2.77865 11.7122 3.05078 11.7266 3.30859 11.7266C3.70964 11.7266 4.11068 11.6836 4.51172 11.5977C3.82422 11.4544 3.20833 11.168 2.66406 10.7383C2.11979 10.3086 1.6901 9.79297 1.375 9.19141C1.0599 8.5612 0.902344 7.88802 0.902344 7.17188V7.08594C1.53255 7.45833 2.20573 7.65885 2.92188 7.6875C1.57552 6.77083 0.902344 5.51042 0.902344 3.90625C0.902344 3.10417 1.11719 2.34505 1.54688 1.62891C2.66406 3.03255 4.02474 4.14974 5.62891 4.98047C7.26172 5.8112 8.99479 6.26953 10.8281 6.35547C10.7708 6.01172 10.7422 5.66797 10.7422 5.32422C10.7422 4.09245 11.1719 3.03255 12.0312 2.14453C12.9193 1.25651 13.9792 0.8125 15.2109 0.8125C16.5286 0.8125 17.6315 1.28516 18.5195 2.23047C19.5508 2.02995 20.5104 1.67188 21.3984 1.15625C21.0547 2.21615 20.3958 3.04688 19.4219 3.64844C20.2812 3.53385 21.1406 3.29036 22 2.91797C21.3698 3.83464 20.6107 4.6224 19.7227 5.28125Z" fill="#1B1B1B" fill-opacity="0.5" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M8.76562 0.0078125C10.8568 0.0078125 12.6615 0.666667 14.1797 1.98438C15.7266 3.30208 16.5 5.00651 16.5 7.09766C16.5 8.12891 16.3568 9.13151 16.0703 10.1055C15.8125 11.0794 15.4258 11.9818 14.9102 12.8125C14.3945 13.6432 13.6927 14.3021 12.8047 14.7891C11.9453 15.276 10.9714 15.5195 9.88281 15.5195C9.3099 15.5195 8.73698 15.3906 8.16406 15.1328C7.59115 14.8464 7.17578 14.4596 6.91797 13.9727C6.83203 14.3164 6.70312 14.8034 6.53125 15.4336C6.38802 16.0638 6.28776 16.4792 6.23047 16.6797C6.20182 16.8516 6.11589 17.1523 5.97266 17.582C5.85807 18.0117 5.74349 18.3268 5.62891 18.5273C5.54297 18.6992 5.39974 18.957 5.19922 19.3008C5.02734 19.6445 4.82682 19.974 4.59766 20.2891C4.39714 20.6042 4.13932 20.9766 3.82422 21.4062C3.73828 21.4635 3.68099 21.4922 3.65234 21.4922C3.65234 21.4922 3.60938 21.4492 3.52344 21.3633C3.40885 19.9883 3.35156 19.1719 3.35156 18.9141C3.35156 18.1406 3.4375 17.2669 3.60938 16.293C3.8099 15.2904 4.09635 14.0443 4.46875 12.5547C4.86979 11.0651 5.09896 10.1914 5.15625 9.93359C4.86979 9.38932 4.72656 8.65885 4.72656 7.74219C4.72656 6.36719 5.25651 5.45052 6.31641 4.99219C7.17578 4.61979 7.86328 4.7487 8.37891 5.37891C8.63672 5.72266 8.76562 6.15234 8.76562 6.66797C8.76562 7.21224 8.57943 8.02865 8.20703 9.11719C7.83464 10.1771 7.64844 10.9792 7.64844 11.5234C7.64844 12.0677 7.83464 12.526 8.20703 12.8984C8.60807 13.2422 9.08073 13.4141 9.625 13.4141C10.3125 13.4141 10.9284 13.1849 11.4727 12.7266C12.0169 12.2682 12.418 11.681 12.6758 10.9648C12.9622 10.2487 13.1628 9.54688 13.2773 8.85938C13.4206 8.14323 13.4922 7.47005 13.4922 6.83984C13.4922 5.35026 13.0195 4.1901 12.0742 3.35938C11.1576 2.52865 9.9401 2.11328 8.42188 2.11328C6.70312 2.11328 5.27083 2.67188 4.125 3.78906C2.97917 4.90625 2.40625 6.32422 2.40625 8.04297C2.40625 8.70182 2.5638 9.34635 2.87891 9.97656C3.22266 10.6068 3.39453 10.9362 3.39453 10.9648C3.39453 11.194 3.32292 11.5091 3.17969 11.9102C3.0651 12.2826 2.92188 12.4688 2.75 12.4688C2.14844 12.4688 1.53255 12.0247 0.902344 11.1367C0.300781 10.2487 0 9.11719 0 7.74219C0 5.45052 0.873698 3.58854 2.62109 2.15625C4.39714 0.723958 6.44531 0.0078125 8.76562 0.0078125Z" fill="#1B1B1B" fill-opacity="0.5" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M4.29688 20H0.300781V7.15234H4.29688V20ZM2.32031 5.39062C1.6901 5.39062 1.14583 5.16146 0.6875 4.70312C0.229167 4.24479 0 3.70052 0 3.07031C0 2.4401 0.229167 1.89583 0.6875 1.4375C1.14583 0.979167 1.6901 0.75 2.32031 0.75C2.72135 0.75 3.09375 0.85026 3.4375 1.05078C3.8099 1.2513 4.09635 1.53776 4.29688 1.91016C4.52604 2.25391 4.64062 2.64062 4.64062 3.07031C4.64062 3.47135 4.52604 3.85807 4.29688 4.23047C4.09635 4.57422 3.8099 4.86068 3.4375 5.08984C3.09375 5.29036 2.72135 5.39062 2.32031 5.39062ZM19.25 20H15.2539V13.7266C15.2539 13.2396 15.2396 12.8529 15.2109 12.5664C15.1823 12.2513 15.1107 11.9076 14.9961 11.5352C14.8815 11.1341 14.6667 10.8333 14.3516 10.6328C14.0651 10.4323 13.6784 10.332 13.1914 10.332C12.2461 10.332 11.6016 10.6328 11.2578 11.2344C10.9427 11.8359 10.7852 12.638 10.7852 13.6406V20H6.78906V7.15234H10.6562V8.91406H10.6992C10.9857 8.34115 11.4583 7.85417 12.1172 7.45312C12.776 7.02344 13.5638 6.80859 14.4805 6.80859C15.4544 6.80859 16.2565 6.96615 16.8867 7.28125C17.5456 7.56771 18.0326 8.01172 18.3477 8.61328C18.6914 9.1862 18.9206 9.81641 19.0352 10.5039C19.1784 11.1914 19.25 12.0078 19.25 12.9531V20Z" fill="#1B1B1B" fill-opacity="0.5" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M18.3906 15.1211L9.92578 19.2891C9.83984 19.3464 9.73958 19.375 9.625 19.375C9.51042 19.375 9.41016 19.3464 9.32422 19.2891L0.859375 15.1211C0.658854 15.0065 0.658854 14.8919 0.859375 14.7773L2.87891 13.7891C2.99349 13.7318 3.09375 13.7031 3.17969 13.7031C3.29427 13.7031 3.40885 13.7318 3.52344 13.7891L9.32422 16.668C9.41016 16.7253 9.51042 16.7539 9.625 16.7539C9.73958 16.7539 9.83984 16.7253 9.92578 16.668L15.7266 13.7891C15.8411 13.7318 15.9414 13.7031 16.0273 13.7031C16.1419 13.7031 16.2565 13.7318 16.3711 13.7891L18.3906 14.7773C18.5911 14.8919 18.5911 15.0065 18.3906 15.1211ZM18.3906 9.23438C18.5911 9.34896 18.5911 9.44922 18.3906 9.53516L9.92578 13.7461C9.83984 13.8034 9.73958 13.832 9.625 13.832C9.51042 13.832 9.41016 13.8034 9.32422 13.7461L0.859375 9.53516C0.658854 9.44922 0.658854 9.34896 0.859375 9.23438L2.87891 8.24609C2.99349 8.1888 3.09375 8.16016 3.17969 8.16016C3.29427 8.16016 3.40885 8.1888 3.52344 8.24609L9.32422 11.125C9.41016 11.1536 9.51042 11.168 9.625 11.168C9.73958 11.168 9.83984 11.1536 9.92578 11.125L15.7266 8.24609C15.8411 8.1888 15.9414 8.16016 16.0273 8.16016C16.1419 8.16016 16.2565 8.1888 16.3711 8.24609L18.3906 9.23438ZM0.859375 4.33594C0.658854 4.25 0.658854 4.16406 0.859375 4.07812L9.32422 0.167969C9.41016 0.139323 9.51042 0.125 9.625 0.125C9.73958 0.125 9.83984 0.139323 9.92578 0.167969L18.3906 4.07812C18.5911 4.16406 18.5911 4.25 18.3906 4.33594L9.92578 8.24609C9.83984 8.27474 9.73958 8.28906 9.625 8.28906C9.51042 8.28906 9.41016 8.27474 9.32422 8.24609L0.859375 4.33594Z" fill="#1B1B1B" fill-opacity="0.5" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M22 5.85937C21.6317 6.26451 21.2143 6.62054 20.7723 6.92745C18.7221 8.31473 16.6596 9.71429 14.6585 11.1629C13.6272 11.9241 12.3504 12.8571 11.0123 12.8571H11H10.9877C9.64955 12.8571 8.37277 11.9241 7.34152 11.1629C5.3404 9.70201 3.2779 8.31473 1.23996 6.92745C0.785714 6.62054 0.368304 6.26451 0 5.85937V15.6071C0 16.6875 0.883929 17.5714 1.96429 17.5714H20.0357C21.1161 17.5714 22 16.6875 22 15.6071V5.85937ZM22 2.25C22 1.16964 21.1038 0.285714 20.0357 0.285714H1.96429C0.65067 0.285714 0 1.31696 0 2.52009C0 3.63728 1.23996 5.02455 2.11161 5.61384C4.01451 6.93973 5.94196 8.26562 7.84487 9.60379C8.64286 10.1562 9.9933 11.2857 10.9877 11.2857H11H11.0123C12.0067 11.2857 13.3571 10.1562 14.1551 9.60379C16.058 8.26562 17.9855 6.93973 19.9007 5.61384C20.981 4.86495 22 3.625 22 2.25Z" fill="#1B1B1B" fill-opacity="0.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="col-span-3">
                            <div class="flex flex-col space-y-5">
                                <h2 class="text-2xl font-bold text-black">Introduction</h2>
                                <p class="text-base text-black-light">
                                    As developers we've all read code that's too hard to understand in a single pass.
                                </p>
                                <p class="text-base text-black-light">
                                    We start reading from the top and see lots of variables declared. Then there's a complex expression. Then an if statement with a complex conditional,
                                    then a complex function call, and suddenly we realise we don't have any idea what it does. The code has exceeded the number of variables
                                    we can pack into our head at one time, and it's going to need some serious thinking time and another cup of coffee to understand.
                                </p>
                                <p class="text-base text-black-light">
                                    At <a href="#" class="highlight">Sourcery</a> we've created a new code quality metric, called working memory, that captures the level of difficulty of understanding code.
                                    It is based on the maximum number of variables that need to be held in our working memory when reading the code from top to bottom.
                                    Working memory is generally held to be a very limited resource, with a range <a href="#" class="highlight">of 5-9</a> items for an adult.
                                </p>
                            </div>
                            <div class="flex flex-col space-y-5 my-10">
                                <h2 class="text-2xl font-bold text-black">Reducing working memory overhead</h2>
                                <p class="text-base text-black-light">
                                    So how do we improve code that's too complex for working memory? The saving grace that allows us to analyse code successfully is that if several
                                    pieces of state can be chunked together then we just need to hold the chunk in working memory rather than all of the pieces.
                                </p>
                                <p class="text-base text-black-light">
                                    One of the elements of good coding style is recognising where such chunking is possible, and pulling complex logic out into well-named variables or functions.
                                </p>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 space-y-3 md:space-y-0 items-center justify-center md:justify-between p-7 bg-white shadow-3xl">
                                <div class="col-span-1 flex flex-col items-center md:items-start space-y-2.5">
                                    <h1 class="text-lg font-black text-blue-dark">Write cleaner code</h1>
                                    <p class="text-xs text-black-light opacity-50 text-center md:text-left">
                                        Sourcery helps you refactor your code to make it easier to work with
                                    </p>
                                </div>
                                <div class="col-span-2 flex md:ml-auto">
                                    <Button subclasses1="font-black" subclasses2="hidden" customClass="btn-short btn-orange" subtext1="Code with Sourcery" subtext2="" />

                                </div>
                            </div>
                            <div class="flex flex-col space-y-5 my-10">
                                <h2 class="text-2xl font-bold text-black">Conclusion</h2>
                                <p class="text-base text-black-light">
                                    This new metric is a valuable additional tool to use when analysing the complexity of code,
                                    particularly in conjunction with existing metrics such as the cognitive complexity.
                                    It approaches the problem from a new angle, using the established psychological theory of working memory.
                    </p>
                                <p class="text-base text-black-light">
                                    To check out the working memory of your code you can use our PyCharm or VS Code plugins. Code metrics for a function are shown when you hover over its definition.
                    </p>
                                <img class="w-full py-5" src={Img} alt="" />
                                <p class="text-base text-black-light">
                                    This new metric is a valuable additional tool to use when analysing the complexity of code, particularly in conjunction with existing metrics such as the cognitive complexity.
                                    It approaches the problem from a new angle, using the established psychological theory of working memory.
                    </p>
                                <p class="text-base text-black-light">
                                    To check out the working memory of your code you can use our PyCharm or VS Code plugins. Code metrics for a function are shown when you hover over its definition.
                    </p>
                                <img class="w-full pt-5" src={Img2} alt="" />
                                <figcaption class="text-xs text-black opacity-40 text-center">In-line metrics for a function using Sourcery VS Code extension</figcaption>
                                <p class="text-base text-black-light">
                                    You can also see the working memory of your code via the quality reports you get when using our  <a href="#" class="highlight">GitHub bot</a>.
                    </p>
                            </div>
                            <div class="divider border-t border-opacity-50 w-2/5"></div>
                            <p class="text-base italic text-black-light my-10">
                                Thanks to Ovidiu Serban and Alex Raison for their assistance with the article.
                </p>
                            <div class="flex flex-col items-center justify-center p-7 space-y-7 bg-white shadow-3xl">
                                <h1 class="text-4xl font-black text-blue-dark text-center md:text-left">Your code, at its best.</h1>
                                <Button subclasses1="font-black pl-3" subclasses2="hidden" customClass="btn-wide"  subtext1="Upgrade to Sourcery Pro" subtext2={arrow} />
                                <div class="flex flex-col items-center space-y-2">
                                    <span class="text-sm font-bold text-black opacity-20 text-center">Works with your favorite IDEs</span>
                                    <div class="flex items-center space-x-5">
                                        <img class="h-8" src={pcIcon} alt="" />
                                        <img class="h-8" src={vsIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="max-w-screen-2xl 2xl:mx-auto mx-16 justify-center items-center">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5">
                    <div className="col-span-3">
                        <h2 className="">Realated Articles</h2>
                    </div>

                    <BlogsCard
                        img="https://via.placeholder.com/300/130A44/F7931E?text=sourcey"
                        uperText="News"
                        heading="Sourcery now available in Sublime!"
                        description=" Instantly refactor your Python code"
                    />
                    <BlogsCard
                        img="https://via.placeholder.com/300/605AF6/FFFFFF?text=sourcey"
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
                <SubFooter />
                <Footer />
            </>
        )
    }
}
