import React, { Component } from 'react'
import VisaIcon from '../../assets/imgs/visa.png'
import Button from '../buttons/button'


export default class Billings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showCoupanModal: false,
            historyModal: false,
            showToolTip: false,
        }
    }
    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    handleCoupanModal = () => {
        this.setState({
            showCoupanModal: !this.state.showCoupanModal
        })
    }
    handleHistoryModal = () => {
        this.setState({
            historyModal: !this.state.historyModal
        })
    }
    render() {
        return (
            <>
                {/* Payment method Modal */}
                {this.state.showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative  flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div class="bg-white max-w-lg mx-auto border p-10 rounded">
                                        <div class="flex items-center justify-between w-full">
                                            <h2 class="text-2xl font-extrabold text-black-light py-9">Payment Method</h2>
                                            <span onClick={this.handleModal}> <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div class="sm:grid sm:grid-cols-2 space-y-7">
                                            <div class="col-span-2">
                                                <label for="name" class="block text-sm font-extrabold text-black">Name</label>
                                                <div class="mt-1.5">
                                                    <input type="text" name="name" id="name" class="border w-full py-3 pl-3 text-sm rounded-none text-black font-medium" placeholder="e.g John Doe" />
                                                </div>
                                            </div>
                                            <div class="col-span-2">
                                                <label for="cardNumber" class="block text-sm font-extrabold text-black">Card number</label>
                                                <div class="mt-1.5">
                                                    <input type="text" name="cardNumber" id="cardNumber" class="border w-full py-3 pl-3 text-sm rounded-none text-black font-medium" placeholder="xxxx xxxx xxxx 1234 " />
                                                </div>
                                            </div>
                                            <div class="col-span-1">
                                                <label for="exDate" class="block text-sm font-extrabold text-black">Expiration date</label>
                                                <div class="mt-1.5">
                                                    <input type="number" name="exDate" id="exDate" class="border w-full py-3 pl-3 text-sm rounded-none text-black font-medium" placeholder="MM/YY" />
                                                </div>
                                            </div>
                                            <div class="col-span-1 sm:ml-7">
                                                <label for="CVC" class="block text-sm font-extrabold text-black">CVC</label>
                                                <div class="mt-1.5">
                                                    <input type="text" name="CVC" id="CVC" class="border w-full py-3 pl-3 text-sm rounded-none text-black font-medium" placeholder="123" />
                                                </div>
                                            </div>
                                            <div class="col-span-2 flex justify-center sm:justify-end space-x-4">
                                                <span onClick={this.handleModal}>
                                                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange-outline" subtext1="" subtext2="Cancel" />
                                                </span>
                                                <span onClick={this.handleModal}>
                                                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange" subtext1="" subtext2="Updade" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-40 h-full w-full absolute inset-0 z-40 bg-black-dark"></div>
                    </>
                ) : null}

                {/* payment modal end */}
                {/* coupon method Modal */}
                {this.state.showCoupanModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-full my-6 mx-auto max-w-xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div class="bg-white w-full mx-auto border p-10 rounded">
                                        <div class="flex items-center justify-between w-full">
                                            <h2 class="text-2xl font-extrabold text-black-light py-9">Redeem a coupon</h2>
                                            <span onClick={this.handleCoupanModal}>  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div class="sm:grid sm:grid-cols-2 space-y-7">
                                            <div class="col-span-2">
                                                <label for="couponCode" class="block text-sm font-extrabold text-black">Coupon code</label>
                                                <div class="mt-1.5">
                                                    <input type="text" name="couponCode" id="couponCode" class="border focus:border-yellow-500 focus:outline-none w-full py-3 pl-3 text-sm rounded-none text-black font-medium" placeholder="Enter coupon code" />
                                                </div>
                                            </div>
                                            <div class="col-span-2 flex justify-center sm:justify-end space-x-4">
                                                <span onClick={this.handleCoupanModal}>
                                                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange-outline" subtext1="" subtext2="Cancel" />
                                                </span>
                                                <span onClick={this.handleCoupanModal}>
                                                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange" subtext1="" subtext2="Redeem" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-40 h-full w-full absolute inset-0 z-40 bg-black-dark"></div>
                    </>
                ) : null}

                {/* coupon modal end */}
                {/* history method Modal */}
                {this.state.historyModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-full my-6 mx-auto max-w-3xl 2xl:max-w-5xl rounded">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div class="bg-white w-full px-10">
                                        <div class="flex items-center justify-between w-full">
                                            <h2 class="text-2xl font-extrabold text-black-light py-9">Payment history</h2>
                                            <span onClick={this.handleHistoryModal}>  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            </span>
                                        </div>
                                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                <div class="overflow-hidden">
                                                    <table class="min-w-full divide-y divide-gray-200">
                                                        <thead class="bg-white text-left">
                                                            <tr>
                                                                <th scope="col" class="w-10 text-center text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                                    Status
                      </th>
                                                                <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                                    ID
                      </th>
                                                                <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                                    Date
                      </th>
                                                                <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                                    Payment method
                      </th>
                                                                <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                                    Amount
                      </th>
                                                                <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                                    Receipt
                      </th>
                                                                </tr>
                                                        </thead>
                                                        <tbody class="bg-white divide-y divide-gray-200">
                                                            <tr>
                                                                <td scope="col" class="w-10 text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg class="h-5 w-5 mx-auto" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.99914 10.2L2.49914 6.7C2.10914 6.31 1.48914 6.31 1.09914 6.7C0.709141 7.09 0.709141 7.71 1.09914 8.1L5.28914 12.29C5.67914 12.68 6.30914 12.68 6.69914 12.29L17.2991 1.7C17.6891 1.31 17.6891 0.69 17.2991 0.3C16.9091 -0.0900003 16.2891 -0.0900003 15.8991 0.3L5.99914 10.2Z" fill="#73DA90" />
                                                                    </svg>
                                                                </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    UOZ23HGDD
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    1 Dec 2020
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    Visa
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    $0.00
                        </td>
                                                                <td scope="col" class="relative text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg class="h-5 w-5 cursor-pointer" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M18 0.210001C17.87 0.210001 17.74 0.260001 17.65 0.360001L16.86 1.15C16.66 1.35 16.35 1.35 16.15 1.15L15.36 0.360001C15.16 0.160001 14.85 0.160001 14.65 0.360001L13.86 1.15C13.66 1.35 13.35 1.35 13.15 1.15L12.36 0.360001C12.16 0.160001 11.85 0.160001 11.65 0.360001L10.86 1.15C10.66 1.35 10.35 1.35 10.15 1.15L9.36 0.360001C9.16 0.160001 8.85 0.160001 8.65 0.360001L7.86 1.15C7.66 1.35 7.35 1.35 7.15 1.15L6.35 0.350001C6.15 0.150001 5.84 0.150001 5.64 0.350001L4.85 1.15C4.65 1.35 4.34 1.35 4.14 1.15L3.35 0.350001C3.15 0.150001 2.84 0.150001 2.64 0.350001L1.85 1.15C1.65 1.35 1.34 1.35 1.14 1.15L0.35 0.350001C0.26 0.260001 0.13 0.210001 0 0.210001V19.8C0.13 19.8 0.26 19.75 0.35 19.65L1.14 18.86C1.34 18.66 1.65 18.66 1.85 18.86L2.64 19.65C2.84 19.85 3.15 19.85 3.35 19.65L4.14 18.86C4.34 18.66 4.65 18.66 4.85 18.86L5.64 19.65C5.84 19.85 6.15 19.85 6.35 19.65L7.14 18.86C7.34 18.66 7.65 18.66 7.85 18.86L8.64 19.65C8.84 19.85 9.15 19.85 9.35 19.65L10.14 18.86C10.34 18.66 10.65 18.66 10.85 18.86L11.64 19.65C11.84 19.85 12.15 19.85 12.35 19.65L13.14 18.86C13.34 18.66 13.65 18.66 13.85 18.86L14.64 19.65C14.84 19.85 15.15 19.85 15.35 19.65L16.14 18.86C16.34 18.66 16.65 18.66 16.85 18.86L17.64 19.65C17.74 19.75 17.87 19.8 17.99 19.8V0.210001H18ZM14 15H4C3.45 15 3 14.55 3 14C3 13.45 3.45 13 4 13H14C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15ZM14 11H4C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" fill="#F7931E" />
                                                                    </svg>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" class="w-10 text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg class="h-5 w-5 mx-auto" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.99914 10.2L2.49914 6.7C2.10914 6.31 1.48914 6.31 1.09914 6.7C0.709141 7.09 0.709141 7.71 1.09914 8.1L5.28914 12.29C5.67914 12.68 6.30914 12.68 6.69914 12.29L17.2991 1.7C17.6891 1.31 17.6891 0.69 17.2991 0.3C16.9091 -0.0900003 16.2891 -0.0900003 15.8991 0.3L5.99914 10.2Z" fill="#73DA90" />
                                                                    </svg>
                                                                </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    UOZ23HGDD
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    1 Dec 2020
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    Visa
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    $0.00
                        </td>
                                                                <td scope="col" class="relative text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg class="h-5 w-5 cursor-pointer" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M18 0.210001C17.87 0.210001 17.74 0.260001 17.65 0.360001L16.86 1.15C16.66 1.35 16.35 1.35 16.15 1.15L15.36 0.360001C15.16 0.160001 14.85 0.160001 14.65 0.360001L13.86 1.15C13.66 1.35 13.35 1.35 13.15 1.15L12.36 0.360001C12.16 0.160001 11.85 0.160001 11.65 0.360001L10.86 1.15C10.66 1.35 10.35 1.35 10.15 1.15L9.36 0.360001C9.16 0.160001 8.85 0.160001 8.65 0.360001L7.86 1.15C7.66 1.35 7.35 1.35 7.15 1.15L6.35 0.350001C6.15 0.150001 5.84 0.150001 5.64 0.350001L4.85 1.15C4.65 1.35 4.34 1.35 4.14 1.15L3.35 0.350001C3.15 0.150001 2.84 0.150001 2.64 0.350001L1.85 1.15C1.65 1.35 1.34 1.35 1.14 1.15L0.35 0.350001C0.26 0.260001 0.13 0.210001 0 0.210001V19.8C0.13 19.8 0.26 19.75 0.35 19.65L1.14 18.86C1.34 18.66 1.65 18.66 1.85 18.86L2.64 19.65C2.84 19.85 3.15 19.85 3.35 19.65L4.14 18.86C4.34 18.66 4.65 18.66 4.85 18.86L5.64 19.65C5.84 19.85 6.15 19.85 6.35 19.65L7.14 18.86C7.34 18.66 7.65 18.66 7.85 18.86L8.64 19.65C8.84 19.85 9.15 19.85 9.35 19.65L10.14 18.86C10.34 18.66 10.65 18.66 10.85 18.86L11.64 19.65C11.84 19.85 12.15 19.85 12.35 19.65L13.14 18.86C13.34 18.66 13.65 18.66 13.85 18.86L14.64 19.65C14.84 19.85 15.15 19.85 15.35 19.65L16.14 18.86C16.34 18.66 16.65 18.66 16.85 18.86L17.64 19.65C17.74 19.75 17.87 19.8 17.99 19.8V0.210001H18ZM14 15H4C3.45 15 3 14.55 3 14C3 13.45 3.45 13 4 13H14C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15ZM14 11H4C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" fill="#F7931E" />
                                                                    </svg>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" class="w-10 text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg class="h-5 w-5 mx-auto" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.99914 10.2L2.49914 6.7C2.10914 6.31 1.48914 6.31 1.09914 6.7C0.709141 7.09 0.709141 7.71 1.09914 8.1L5.28914 12.29C5.67914 12.68 6.30914 12.68 6.69914 12.29L17.2991 1.7C17.6891 1.31 17.6891 0.69 17.2991 0.3C16.9091 -0.0900003 16.2891 -0.0900003 15.8991 0.3L5.99914 10.2Z" fill="#73DA90" />
                                                                    </svg>
                                                                </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    UOZ23HGDD
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    1 Dec 2020
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    Visa
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    $0.00
                        </td>
                                                                <td scope="col" class="relative text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg class="h-5 w-5 cursor-pointer" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M18 0.210001C17.87 0.210001 17.74 0.260001 17.65 0.360001L16.86 1.15C16.66 1.35 16.35 1.35 16.15 1.15L15.36 0.360001C15.16 0.160001 14.85 0.160001 14.65 0.360001L13.86 1.15C13.66 1.35 13.35 1.35 13.15 1.15L12.36 0.360001C12.16 0.160001 11.85 0.160001 11.65 0.360001L10.86 1.15C10.66 1.35 10.35 1.35 10.15 1.15L9.36 0.360001C9.16 0.160001 8.85 0.160001 8.65 0.360001L7.86 1.15C7.66 1.35 7.35 1.35 7.15 1.15L6.35 0.350001C6.15 0.150001 5.84 0.150001 5.64 0.350001L4.85 1.15C4.65 1.35 4.34 1.35 4.14 1.15L3.35 0.350001C3.15 0.150001 2.84 0.150001 2.64 0.350001L1.85 1.15C1.65 1.35 1.34 1.35 1.14 1.15L0.35 0.350001C0.26 0.260001 0.13 0.210001 0 0.210001V19.8C0.13 19.8 0.26 19.75 0.35 19.65L1.14 18.86C1.34 18.66 1.65 18.66 1.85 18.86L2.64 19.65C2.84 19.85 3.15 19.85 3.35 19.65L4.14 18.86C4.34 18.66 4.65 18.66 4.85 18.86L5.64 19.65C5.84 19.85 6.15 19.85 6.35 19.65L7.14 18.86C7.34 18.66 7.65 18.66 7.85 18.86L8.64 19.65C8.84 19.85 9.15 19.85 9.35 19.65L10.14 18.86C10.34 18.66 10.65 18.66 10.85 18.86L11.64 19.65C11.84 19.85 12.15 19.85 12.35 19.65L13.14 18.86C13.34 18.66 13.65 18.66 13.85 18.86L14.64 19.65C14.84 19.85 15.15 19.85 15.35 19.65L16.14 18.86C16.34 18.66 16.65 18.66 16.85 18.86L17.64 19.65C17.74 19.75 17.87 19.8 17.99 19.8V0.210001H18ZM14 15H4C3.45 15 3 14.55 3 14C3 13.45 3.45 13 4 13H14C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15ZM14 11H4C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" fill="#F7931E" />
                                                                    </svg>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="col" class="w-10 text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg class="h-5 w-5 mx-auto" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5.99914 10.2L2.49914 6.7C2.10914 6.31 1.48914 6.31 1.09914 6.7C0.709141 7.09 0.709141 7.71 1.09914 8.1L5.28914 12.29C5.67914 12.68 6.30914 12.68 6.69914 12.29L17.2991 1.7C17.6891 1.31 17.6891 0.69 17.2991 0.3C16.9091 -0.0900003 16.2891 -0.0900003 15.8991 0.3L5.99914 10.2Z" fill="#73DA90" />
                                                                    </svg>
                                                                </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    UOZ23HGDD
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    1 Dec 2020
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    Visa
                        </td>
                                                                <td scope="col" class="text-sm font-extrabold text-black px-4 py-6">
                                                                    $0.00
                        </td>
                                                                <td scope="col" class="relative text-sm font-extrabold text-black px-4 py-6">
                                                                    <svg onMouseOver={()=>{
                                                                            this.setState
                                                                            ({
                                                                            showToolTip:true
                                                                            })
                                                                        }} onMouseOut={()=>{
                                                                            this.setState
                                                                            ({
                                                                            showToolTip:false
                                                                            })
                                                                        }} class="h-5 w-5 cursor-pointer" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M18 0.210001C17.87 0.210001 17.74 0.260001 17.65 0.360001L16.86 1.15C16.66 1.35 16.35 1.35 16.15 1.15L15.36 0.360001C15.16 0.160001 14.85 0.160001 14.65 0.360001L13.86 1.15C13.66 1.35 13.35 1.35 13.15 1.15L12.36 0.360001C12.16 0.160001 11.85 0.160001 11.65 0.360001L10.86 1.15C10.66 1.35 10.35 1.35 10.15 1.15L9.36 0.360001C9.16 0.160001 8.85 0.160001 8.65 0.360001L7.86 1.15C7.66 1.35 7.35 1.35 7.15 1.15L6.35 0.350001C6.15 0.150001 5.84 0.150001 5.64 0.350001L4.85 1.15C4.65 1.35 4.34 1.35 4.14 1.15L3.35 0.350001C3.15 0.150001 2.84 0.150001 2.64 0.350001L1.85 1.15C1.65 1.35 1.34 1.35 1.14 1.15L0.35 0.350001C0.26 0.260001 0.13 0.210001 0 0.210001V19.8C0.13 19.8 0.26 19.75 0.35 19.65L1.14 18.86C1.34 18.66 1.65 18.66 1.85 18.86L2.64 19.65C2.84 19.85 3.15 19.85 3.35 19.65L4.14 18.86C4.34 18.66 4.65 18.66 4.85 18.86L5.64 19.65C5.84 19.85 6.15 19.85 6.35 19.65L7.14 18.86C7.34 18.66 7.65 18.66 7.85 18.86L8.64 19.65C8.84 19.85 9.15 19.85 9.35 19.65L10.14 18.86C10.34 18.66 10.65 18.66 10.85 18.86L11.64 19.65C11.84 19.85 12.15 19.85 12.35 19.65L13.14 18.86C13.34 18.66 13.65 18.66 13.85 18.86L14.64 19.65C14.84 19.85 15.15 19.85 15.35 19.65L16.14 18.86C16.34 18.66 16.65 18.66 16.85 18.86L17.64 19.65C17.74 19.75 17.87 19.8 17.99 19.8V0.210001H18ZM14 15H4C3.45 15 3 14.55 3 14C3 13.45 3.45 13 4 13H14C14.55 13 15 13.45 15 14C15 14.55 14.55 15 14 15ZM14 11H4C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11ZM14 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H14C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" fill="#F7931E" />
                                                                    </svg>
                                                                    {this.state.showToolTip ?<div class="absolute -left-4 md:-left-8 -top-2 md:-top-5 bg-white tooltip py-1.5 px-1 md:px-5">
                                                                        <span class="text-xs text-black-light">Tooltip center</span>
                                                                        <svg class="absolute text-white h-3 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" ><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                                                                    </div>:null}
                                                                </td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-40 h-full w-full absolute inset-0 z-40 bg-black-dark"></div>
                    </>
                ) : null}

                {/* history modal end */}
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    {/* <!-- Content Header --> */}
                    <div className="border-b py-3  px-5 2xl:px-0">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <h3 className="text-lg font-extrabold text-black-light">Billing</h3>
                            <a href="#" className="flex space-x-3 items-center">
                                <img className="inline-block h-8 w-8 rounded-full"
                                    src="https://via.placeholder.com/1x1"
                                    alt="" />
                                <span className="text-sm font-bold text-black-light">Iva Pezic</span>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Content Body --> */}
                    <div className="max-w-7xl mx-auto px-5 2xl:px-0">

                        {/* <!-- 1st Row --> */}
                        <h2 className="text-2xl font-extrabold text-black-light mt-10 py-3">Subscription</h2>
                        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row items-center md:justify-between border p-7 pb-5 md:pb-7">
                            <div className="flex flex-col space-y-5 w-full md:w-auto">
                                <h3 className="text-sm font-extrabold text-black-light opacity-50">Your plan (billed yearly)</h3>
                                <div className="flex items-center gap-x-5">
                                    <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 26.2075L18.8957 15.8632L36.9996 25.745V29.6556L18.4998 39.9999L0 29.6556V26.2075Z" fill="#31313A" />
                                        <path opacity="0.8" d="M18.4998 20.0954V39.9999L0 29.6556V10.3442L18.4998 20.0954Z" fill="#F7931E" />
                                        <path opacity="0.7" d="M36.9998 9.88174V29.6556L18.5 39.9999V20.0954L36.9998 9.88174Z" fill="#F7931E" />
                                        <path opacity="0.8" d="M0 10.3443L18.8957 0L36.9996 9.88188V19.7738L18.4998 30.1181L0 19.7738V10.3443Z" fill="#FBB03B" />
                                    </svg>
                                    <h2 className="text-2xl font-extrabold text-black-light">Sourcery Free</h2>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-5 w-full md:w-auto">
                                <span onClick={this.handleModal}>
                                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange" subtext1="" subtext2="Upgrade plan" />
                                </span>
                                <p className="text-xs text-black-light opacity-50 w-40">
                                    Upgrade to use advanced Sourcery features
                                </p>
                            </div>
                        </div>
                        {/* <!-- 2nd Row --> */}
                        <h2 className="text-2xl font-extrabold text-black-light mt-10 py-3">Billing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 xl:space-y-0 md:gap-x-5">
                            <div className="col-span-1 flex flex-col space-y-5 p-7 pb-5 border">
                                <span className="text-sm font-extrabold text-black-light opacity-50">Current yearly total</span>
                                <h2 className="text-3xl font-extrabold text-black-light">$208.00</h2>
                            </div>
                            <div className="col-span-1 flex flex-col space-y-5 p-7 pb-5 border">
                                <span className="text-sm font-extrabold text-black-light opacity-50">Current yearly total</span>
                                <h2 className="text-2xl font-extrabold text-black-light">March 20, 2021</h2>
                                <div className="divider border-t border-opacity-50"></div>
                                <a onClick={this.handleHistoryModal} href="#" className="text-sm font-bold text-orange-light">Payment history</a>
                            </div>
                            <div className="col-span-1 flex flex-col space-y-5 p-7 pb-5 border">
                                <span className="text-sm font-extrabold text-black-light opacity-50">Current yearly total</span>
                                <a href="#" className="text-sm font-bold text-orange-light">Update payment method</a>
                                <a href="#" className="text-sm font-bold text-orange-light">View payment history</a>
                                <a href="#" className="text-sm font-bold text-orange-light">Explore subscription options</a>
                            </div>
                        </div>
                        {/* <!-- 3rd Row --> */}
                        <h2 className="text-2xl font-extrabold text-black-light mt-10 py-3">Payment information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 xl:space-y-0 md:gap-x-5">
                            <div className="col-span-1 flex flex-col space-y-5 p-7 pb-5 bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-extrabold text-black-light opacity-50">Payment method</span>
                                    <a href="#" className="text-sm font-bold text-orange-light">Edit</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <img src={VisaIcon} alt="" />
                                    <span className="flex items-center text-sm font-bold text-black-light">&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 1234</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs font-bold text-black-light opacity-40">Visa</span>
                                    <span className="text-xs font-bold text-black-light opacity-40">&#9679;</span>
                                    <span className="text-xs font-bold text-black-light opacity-40">Expires 05/2021</span>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col space-y-5 p-7 pb-5 bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-extrabold text-black-light opacity-50">Last payment</span>
                                    <a href="#" className="text-sm font-bold text-orange-light">View all</a>
                                </div>
                                <h2 className="text-3xl font-extrabold text-black-light">$0.00</h2>
                                <span className="text-xs text-black-light opacity-40">paid on <span className="font-bold">1 Dec 2020</span></span>
                            </div>
                            <div className="col-span-1 flex flex-col space-y-5 p-7 pb-5 bg-gray-50">
                                <span className="text-sm font-extrabold text-black-light opacity-50">Coupon</span>
                                <span className="text-sm font-bold text-black-light">No active coupon.</span>
                                <span onClick={this.handleCoupanModal} > <a href="#" className="flex items-center space-x-2 text-sm font-bold text-orange-light">
                                    <span>Redeem a Coupan</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                </span>
                            </div>
                        </div>
                    </div>

                </main>
            </>
        )
    }
}
