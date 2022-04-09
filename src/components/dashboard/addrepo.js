import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../buttons/button'

export default class Addrepo extends Component {
    render() {
        return (
            <>
                <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    {/* <!-- Content Header --> */}
                    <div class="border-b py-3  px-5 2xl:px-0">
                        <div class="max-w-7xl mx-auto flex justify-between items-center">
                            <Link to="/dashboard/github" class="flex items-center space-x-4 text-lg font-extrabold text-black-light">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 9H3.83L9.42 14.59L8 16L0 8L8 0L9.41 1.41L3.83 7L16 7V9Z" fill="#1B1B1B" />
                                </svg>
                                <span>Back to Active Repos</span>
                            </Link>
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
                            <div class="flex flex-col space-y-5 md:space-y-0 md:flex-row items-center md:justify-between pt-7 pb-5">
                                <a href="#" class="text-2xl font-extrabold text-orange-light py-3">angrycaptain19/Advent-of-Code-2020</a>
                                <div class="flex order-1 md:order-2 py-5 md:py-0 space-x-5 w-full justify-end md:w-auto">
                                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange" subtext1="" subtext2="Refresh" />
                                </div>
                            </div>
                            {/* <!-- 2nd Row --> */}
                            <h2 class="text-2xl font-extrabold text-black-light mt-10 py-3">Refactor Branch</h2>
                            <div class="grid grid-cols-1 md:grid-cols-4 space-y-5 lg:space-y-0 md:space-x-5">
                                <div class="col-span-1 flex flex-col relative">
                                    <select id="branch" name="branch" class="border py-3 pl-3 text-sm text-black font-bold">
                                        <option>master</option>
                                        <option>Local</option>
                                        <option>Remote</option>
                                    </select>
                                </div>
                                <div class="col-span-1 flex flex-col relative">
                                    <Button subclasses1="hidden" subclasses2="text-sm font-extrabold" customClass="btn-short btn-orange" subtext1="" subtext2="Refactor" />
                                </div>
                            </div>
                            {/* <!-- 1st Row --> */}
                            <h2 class="flex justify-between items-center text-2xl font-extrabold text-black-light mt-10 py-3">
                                <span>Refactoring Jobs</span>
                                <a href="#" class="text-xs md:text-sm font-bold text-orange-light">View all Sourcery PRs</a>
                            </h2>
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full divide-y divide-gray-200 border">
                                            <thead class="bg-white text-left">
                                                <tr>
                                                    <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                        Created
                        </th>
                                                    <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                        Type
                        </th>
                                                    <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                        Status
                        </th>
                                                    <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                        Branch
                        </th>
                                                    <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                        Base PR number
                        </th>
                                                    <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                        # Refactorings
                        </th>
                                                    <th scope="col" class="text-sm font-semibold text-black opacity-40 px-4 py-3">
                                                        Head PR number
                        </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        1 Dec 2020
                          </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        pull_request
                          </td>
                                                    <td scope="col" class="text-sm font-bold text-green-light px-4 py-6">
                                                        Success
                          </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        sourcery/Day-8
                          </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">
                                                        <span>17</span>
                                                        <a href="#">
                                                            <svg class="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13 13.8333H3C2.54167 13.8333 2.16667 13.4583 2.16667 13V3C2.16667 2.54167 2.54167 2.16667 3 2.16667H7.16667C7.625 2.16667 8 1.79167 8 1.33333C8 0.875 7.625 0.5 7.16667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8.83333C15.5 8.375 15.125 8 14.6667 8C14.2083 8 13.8333 8.375 13.8333 8.83333V13C13.8333 13.4583 13.4583 13.8333 13 13.8333ZM9.66667 1.33333C9.66667 1.79167 10.0417 2.16667 10.5 2.16667H12.6583L5.05 9.775C4.725 10.1 4.725 10.625 5.05 10.95C5.375 11.275 5.9 11.275 6.225 10.95L13.8333 3.34167V5.5C13.8333 5.95833 14.2083 6.33333 14.6667 6.33333C15.125 6.33333 15.5 5.95833 15.5 5.5V0.5H10.5C10.0417 0.5 9.66667 0.875 9.66667 1.33333Z" fill="#F7931E" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td scope="col" class="text-sm font-bold text-black pl-16 px-4 py-6">

                                                    </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        1 Dec 2020
                        </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        pull_request
                        </td>
                                                    <td scope="col" class="text-sm font-bold text-green-light px-4 py-6">
                                                        Success
                        </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        sourcery/Day-8
                        </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">
                                                        <span>17</span>
                                                        <a href="#">
                                                            <svg class="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13 13.8333H3C2.54167 13.8333 2.16667 13.4583 2.16667 13V3C2.16667 2.54167 2.54167 2.16667 3 2.16667H7.16667C7.625 2.16667 8 1.79167 8 1.33333C8 0.875 7.625 0.5 7.16667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8.83333C15.5 8.375 15.125 8 14.6667 8C14.2083 8 13.8333 8.375 13.8333 8.83333V13C13.8333 13.4583 13.4583 13.8333 13 13.8333ZM9.66667 1.33333C9.66667 1.79167 10.0417 2.16667 10.5 2.16667H12.6583L5.05 9.775C4.725 10.1 4.725 10.625 5.05 10.95C5.375 11.275 5.9 11.275 6.225 10.95L13.8333 3.34167V5.5C13.8333 5.95833 14.2083 6.33333 14.6667 6.33333C15.125 6.33333 15.5 5.95833 15.5 5.5V0.5H10.5C10.0417 0.5 9.66667 0.875 9.66667 1.33333Z" fill="#F7931E" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td scope="col" class="text-sm font-bold text-black pl-16 px-4 py-6">

                                                    </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        1 Dec 2020
                          </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        pull_request
                          </td>
                                                    <td scope="col" class="text-sm font-bold text-red-500 px-4 py-6">
                                                        Not handled
                          </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        sourcery/Day-8
                          </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">
                                                        <span>17</span>
                                                        <a href="#">
                                                            <svg class="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13 13.8333H3C2.54167 13.8333 2.16667 13.4583 2.16667 13V3C2.16667 2.54167 2.54167 2.16667 3 2.16667H7.16667C7.625 2.16667 8 1.79167 8 1.33333C8 0.875 7.625 0.5 7.16667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8.83333C15.5 8.375 15.125 8 14.6667 8C14.2083 8 13.8333 8.375 13.8333 8.83333V13C13.8333 13.4583 13.4583 13.8333 13 13.8333ZM9.66667 1.33333C9.66667 1.79167 10.0417 2.16667 10.5 2.16667H12.6583L5.05 9.775C4.725 10.1 4.725 10.625 5.05 10.95C5.375 11.275 5.9 11.275 6.225 10.95L13.8333 3.34167V5.5C13.8333 5.95833 14.2083 6.33333 14.6667 6.33333C15.125 6.33333 15.5 5.95833 15.5 5.5V0.5H10.5C10.0417 0.5 9.66667 0.875 9.66667 1.33333Z" fill="#F7931E" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td scope="col" class="text-sm font-bold text-black pl-16 px-4 py-6">
                                                        3
                          </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">
                                                        <span>13</span>
                                                        <a href="#">
                                                            <svg class="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13 13.8333H3C2.54167 13.8333 2.16667 13.4583 2.16667 13V3C2.16667 2.54167 2.54167 2.16667 3 2.16667H7.16667C7.625 2.16667 8 1.79167 8 1.33333C8 0.875 7.625 0.5 7.16667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8.83333C15.5 8.375 15.125 8 14.6667 8C14.2083 8 13.8333 8.375 13.8333 8.83333V13C13.8333 13.4583 13.4583 13.8333 13 13.8333ZM9.66667 1.33333C9.66667 1.79167 10.0417 2.16667 10.5 2.16667H12.6583L5.05 9.775C4.725 10.1 4.725 10.625 5.05 10.95C5.375 11.275 5.9 11.275 6.225 10.95L13.8333 3.34167V5.5C13.8333 5.95833 14.2083 6.33333 14.6667 6.33333C15.125 6.33333 15.5 5.95833 15.5 5.5V0.5H10.5C10.0417 0.5 9.66667 0.875 9.66667 1.33333Z" fill="#F7931E" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        1 Dec 2020
                        </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        pull_request
                        </td>
                                                    <td scope="col" class="text-sm font-bold text-green-light px-4 py-6">
                                                        Success
                        </td>
                                                    <td scope="col" class="text-sm font-bold text-black px-4 py-6">
                                                        sourcery/Day-8
                        </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">
                                                        <span>17</span>
                                                        <a href="#">
                                                            <svg class="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13 13.8333H3C2.54167 13.8333 2.16667 13.4583 2.16667 13V3C2.16667 2.54167 2.54167 2.16667 3 2.16667H7.16667C7.625 2.16667 8 1.79167 8 1.33333C8 0.875 7.625 0.5 7.16667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8.83333C15.5 8.375 15.125 8 14.6667 8C14.2083 8 13.8333 8.375 13.8333 8.83333V13C13.8333 13.4583 13.4583 13.8333 13 13.8333ZM9.66667 1.33333C9.66667 1.79167 10.0417 2.16667 10.5 2.16667H12.6583L5.05 9.775C4.725 10.1 4.725 10.625 5.05 10.95C5.375 11.275 5.9 11.275 6.225 10.95L13.8333 3.34167V5.5C13.8333 5.95833 14.2083 6.33333 14.6667 6.33333C15.125 6.33333 15.5 5.95833 15.5 5.5V0.5H10.5C10.0417 0.5 9.66667 0.875 9.66667 1.33333Z" fill="#F7931E" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td scope="col" class="text-sm font-bold text-black pl-16 px-4 py-6">
                                                        3
                        </td>
                                                    <td scope="col" class="flex items-center ml-10 text-sm font-bold text-orange-light px-4 py-6">
                                                        <span>13</span>
                                                        <a href="#">
                                                            <svg class="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13 13.8333H3C2.54167 13.8333 2.16667 13.4583 2.16667 13V3C2.16667 2.54167 2.54167 2.16667 3 2.16667H7.16667C7.625 2.16667 8 1.79167 8 1.33333C8 0.875 7.625 0.5 7.16667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8.83333C15.5 8.375 15.125 8 14.6667 8C14.2083 8 13.8333 8.375 13.8333 8.83333V13C13.8333 13.4583 13.4583 13.8333 13 13.8333ZM9.66667 1.33333C9.66667 1.79167 10.0417 2.16667 10.5 2.16667H12.6583L5.05 9.775C4.725 10.1 4.725 10.625 5.05 10.95C5.375 11.275 5.9 11.275 6.225 10.95L13.8333 3.34167V5.5C13.8333 5.95833 14.2083 6.33333 14.6667 6.33333C15.125 6.33333 15.5 5.95833 15.5 5.5V0.5H10.5C10.0417 0.5 9.66667 0.875 9.66667 1.33333Z" fill="#F7931E" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
