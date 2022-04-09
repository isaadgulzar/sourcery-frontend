import React, { Component } from 'react'
import Button from '../buttons/button'

export default class SubFooter extends Component {
    render() {
        return (
            <>
                <div className="bg-blue-dark -mb-1">
                    <div id="subFooter" className="max-w-screen-2xl mx-auto">
                        <div className="mx-16 py-8 text-center lg:text-left">
                            <div className="md:grid md:grid-cols-3 items-center py-8 md:py-16 md:pb-24">
                                <div className="col-span-2">
                                    <h1 className="text-3xl md:text-5xl text-center md:text-left text-white font-black">Start writing better code</h1>
                                    <p className="text-xl text-white text-center md:text-left opacity-40 max-w-lg md:max-w-xs lg:max-w-lg mt-6">
                                        Get started for free and find out what you can accomplish with the power of Sourcery in your IDE.
                                </p>
                                </div>
                                <div className="col-span-1 flex flex-col items-center lg:items-start space-y-5 mt-5">
                                    <Button subclasses1="font-black text-base" subclasses2="font-light italic" customClass="btn-wide" subtext1="Add to PyCharm" subtext2="It's Free" />
                                    <Button subclasses1="font-black text-base" subclasses2="font-light italic" customClass="btn-wide" subtext1="Add to VS Code" subtext2="It's Free" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
