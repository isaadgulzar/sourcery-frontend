
import React, { Component } from 'react'
import VisaIcon from '../../assets/imgs/visa.png'
import Button from '../buttons/button'


export default class Refels extends Component {

    render() {
        return (
            <>
                <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    {/* <!-- Content Header --> */}
                    <div class="border-b py-3  px-5 2xl:px-0">
                        <div class="max-w-7xl mx-auto flex justify-between items-center">
                            <h3 class="text-lg font-extrabold text-black-light">Refer Friend</h3>
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

                        {/* <!-- 1st Row --> */}
                        <h2 class="text-2xl font-extrabold text-black-light mt-10 py-3">Invite Friends</h2>
                        <p class="text-sm text-black-light leading-7 max-w-md">
                            You’ll get <span class="text-orange-light font-extrabold">$5</span> in Sourcery credit to every friend who signs up for a Sourcery account with your referral code and another <span class="text-orange-light font-extrabold">$10</span> in credit
    if they sign up to Sourcery Pro. When your friend signs up with your code they get 1 month of free Sourcery Pro!
  </p>
                        {/* <!-- 2nd Row --> */}
                        <h2 class="text-2xl font-extrabold text-black-light mt-10 py-3">Share your referral link</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 space-y-5 lg:space-y-0 md:space-x-5">
                            <div class="col-span-1 flex flex-col relative">
                                <input type="text" value="https://sourcery.ai/refer/asdfjklas" class="border py-3 pl-3 text-sm text-black opacity-60 font-semibold" />
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto">
                                    <a href="#" class="text-sm font-bold text-orange-light">Copy</a>
                                </div>
                            </div>

                        </div>
                        {/* <!-- 3rd Row --> */}
                        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-y-5 xl:space-y-0 md:gap-x-5">
                            <div class="col-span-1">
                                <h2 class="text-2xl font-extrabold text-black-light mt-10 py-3">Referrals</h2>
                                <div class="col-span-1 flex flex-col space-y-5 p-7 pb-5 border">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm text-black-light opacity-50">Invited</span>
                                        <span class="text-sm font-extrabold text-black">12</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm text-black-light opacity-50">Potential credit</span>
                                        <span class="text-sm font-extrabold text-black">$120</span>
                                    </div>
                                    <div class="divider border-t border-opacity-50"></div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm font-extrabold text-black">Signed up</span>
                                        <span class="text-sm font-extrabold text-black">3</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm font-extrabold text-black">You’ve earned</span>
                                        <span class="text-sm font-extrabold text-black">$30</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2">
                                <h2 class="text-2xl font-extrabold text-black-light mt-10 py-3">Your progress</h2>
                                <div class="flex flex-col space-y-5 p-7 pb-5 border">
                                    <div class="flex w-full my-10">
                                        <div class="relative w-full h-5 bg-gray-200 mt-2">
                                            <div class="absolute z-20 bg-blue-dark h-full" style={{ width: '15%' }}>
                                                <div class="absolute -top-2.5 right-0 bg-blue-dark h-10" style={{ width: '3px' }}>
                                                    <span class="absolute text-darkblue -top-7 -left-2 text-sm font-extrabold">$5</span>
                                                </div>
                                            </div>
                                            <div class="absolute z-10 bg-orange-light h-full" style={{ width: '45%' }}>
                                                <div class="absolute -top-2.5 right-0 bg-orange-light h-10" style={{ width: '3px' }}>
                                                    <span class="absolute text-orange-light -top-7 -left-3.5 text-sm font-extrabold">$10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-x-10 items-center py-1.5">
                                        <div class="flex gap-x-2 items-center">
                                            <span class="text-sm text-black opacity-50">$5 referral</span>
                                            <span class="text-sm text-black opacity-50">–</span>
                                            <span class="text-sm font-extrabold text-darkblue">3</span>
                                        </div>
                                        <div class="flex gap-x-2 items-center">
                                            <span class="text-sm text-black opacity-50">$10 referral</span>
                                            <span class="text-sm text-black opacity-50">–</span>
                                            <span class="text-sm font-extrabold text-orange-light">9</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
            </>
        )
    }
}
