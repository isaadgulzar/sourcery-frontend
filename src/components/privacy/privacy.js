import React, { Component } from 'react'
import NavBar from '../navbars/navbar'
import Header from './header'
import Logo from '../../assets/imgs/Logo.png'
import SubFooter from '../footer/subFooter'
import Footer from '../footer/footer'

export default class Privacy extends Component {
    render() {
        return (
            <>
                {/* navbar start */}
                <NavBar logo={Logo} bgColor="bg-blue-dark" textColor="text-white" />
                {/* navbar end */}
                <Header />
                {/* section start */}
                <div class="max-w-4xl mx-5 lg:mx-auto justify-center items-center mb-10">
                    {/* Starting parahgraphs */}
                    <div className="flex flex-col space-y-8 mt-20 px-0 md:px-16">
                        <p className="text-base text-black-dark text-center md:text-left font-medium">
                            This document describes the information that we (“Sourcery AI Limited”) collect when you interact with our website and services. We are committed to ensuring the privacy of our users and their code.
                            This is why all code analysis performed by our services takes place locally on the user's machine.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-8 mt-20 px-0 md:px-16">
                        <h3 className="text-2xl md:text-4xl text-center md:text-left text-magento-dark font-black">Information we collect</h3>
                        <p className="text-base text-black-dark text-center md:text-left font-medium">
                            We are the data controller for the following information:<br/>
                            Information about yourself that you voluntarily provide to us such as your name, email address and other contact information.<br/>
                            Anonymised usage data collected by our services. These include information on your OS version and the versions of our services that you use, as well as anonymised reports of which types of refactorings have been suggested and accepted. We do not collect information on your code.
                            Anonymised error reports provided by the third-party Sentry.io error reporting service, which is fully GDPR and EU-US Privacy Shield compliant.<br/>
                            Information provided to us by cookies and related technologies such as Google Analytics.
                        </p>
                    </div>
                    {/* second parahgraph */}
                    <div className="flex flex-col space-y-8 mt-20 px-0 md:px-16">
                        <h3 className="text-2xl md:text-4xl text-center md:text-left text-magento-dark font-black">More on cookies</h3>
                        <p className="text-base text-black-dark text-center md:text-left font-medium">
                            A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the Service each time the visitor returns. 
                            Sourcery uses cookies to help Sourcery identify and track visitors. Sourcery visitors who do not wish to have cookies placed on their computers should set their browsers 
                            to refuse cookies when using Sourcery's website.
                        </p>
                    </div>
                    {/* third parah */}
                    <div className="flex flex-col space-y-8 mt-20 px-0 md:px-16">
                        <h3 className="text-2xl md:text-4xl text-center md:text-left text-magento-dark font-black">What we use the information for</h3>
                        <p className="text-base text-black-dark text-center md:text-left font-medium">
                        Sourcery collects information to provide a better service to all our users and visitors. We use the information to provide, maintain, protect and improve our website and services. 
                        If you have signed up to receive updates from us we will use your information to periodically contact you with information about our products and services. 
                        Our legal basis for processing the information we are the data controller for, is the implicit consent that you provide when submitting your 
                        information through a website form or emailing us. In some circumstances, we may also process information on the basis of our legitimate interest in improving our service.
                        </p>
                    </div>
                    {/* fourth parah */}
                    <div className="flex flex-col space-y-8 mt-20 px-0 md:px-16">
                        <h3 className="text-2xl md:text-4xl text-center md:text-left text-magento-dark font-black">Third part service providers</h3>
                        <p className="text-base text-black-dark text-center md:text-left font-medium">
                            Sourcery uses services from auth0, GitHub, and Google to allow users to create and log into accounts. No additional information is shared with these service providers outside of the information required to create and log into an account.
                        </p>
                        <p className="text-base text-black-dark text-center md:text-left font-medium">
                            Sourcery uses payment services from Stripe to process payments for Sourcery Pro and Team services. No additional information is shared with Stripe outside of the information required to create and manage invoices, payments, and subscriptions.
                        </p>
                        <p className="text-base text-black-dark text-center md:text-left font-medium">
                            Sourcery uses analytics services from Google Analytics. All information sent to Google Analytics is anonymised.
                        </p>
                    </div>
                </div>
                {/* section start */}
                    <SubFooter/>
                    <Footer/>
            </>
        )
    }
}
