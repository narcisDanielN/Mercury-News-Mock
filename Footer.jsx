import React, { useState, useEffect } from 'react';
import './css/Footer.css';

// Data structure replicating the footer columns
const footerData = {
    col1:[
        { title: "NEWS ALERTS", links: ["Email Newsletters", "Today's e-Edition", "Mobile Apps", "Site Map"] },
        { title: "MARKETPLACE", links:["Place an Obituary", "Place a Real Estate Ad", "Lottery"] }
    ],
    col2:[
        { title: "CONTACT US", links:["Digital Access FAQ", "Join our Team", "Special Sections", "Sponsor a Group", "Get Sponsored Access", "Privacy Policy", "Accessibility"] }
    ],
    col3:[
        { title: "ADVERTISE WITH US", links:["Network Advertising", "Daily Ads", "Place a Legal Notice", "Public Notices"] }
    ],
    col4: [
        { title: "SUBSCRIBE", links:["Member Services", "Manage Subscriptions", "The Mercury News Store", "Archive Search", "Reprints"] }
    ]
};

const legalLinks =[
    "Terms of Use", "Cookie Policy", "Cookie Preferences", "California Notice at Collection",
    "Notice of Financial Incentive", "Do Not Sell/Share My Personal Information", "Arbitration", "Powered by an UNIFI Student"
];

const Footer = () => {
    // Responsive state for the mobile accordion functionality
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    // SVG Chevrons
    const ChevronDownIcon = () => <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>;
    const ChevronUpIcon = () => <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>;

    // Reusable Component for a footer section (handles both mobile accordion & desktop list)
    const FooterSection = ({ section, isFirstInSectionCol }) => {
        const[isOpen, setIsOpen] = useState(false);
        const sectionId = `footer-section-${section.title.replace(/\s+/g, '-')}`;

        return (
            // Replaced mb-4 with our custom wrapper for perfect margin control
            <div className="footer-section-wrapper">
                {isMobile ? (
                    <>
                        <div className="footer-heading-container">
                            <button
                                className="footer-accordion-btn d-flex justify-content-between align-items-center"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-expanded={isOpen}
                                aria-controls={sectionId}
                            >
                                <span className="footer-heading">{section.title}</span>
                                <span className={`footer-chevron ${isOpen ? 'is-open' : ''}`}>
                                    <ChevronDownIcon />
                                </span>
                            </button>
                        </div>
                        <div id={sectionId} className={`footer-accordion-panel ${isOpen ? 'is-open' : ''}`}>
                            <ul className="list-unstyled m-0">
                                {section.links.map(link => (
                                    <li key={link}>
                                        <a href={`#${link.replace(/\s+/g, '-')}`} className="footer-link">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="footer-heading-container">
                            <h2 className="footer-heading">{section.title}</h2>
                        </div>
                        <ul className="list-unstyled m-0">
                            {section.links.map(link => (
                                <li key={link}>
                                    <a href={`#${link.replace(/\s+/g, '-')}`} className="footer-link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        );
    };

    return (
        <footer className="mercury-footer">
            <div className="container-fluid px-3 px-lg-4 mx-auto" style={{ maxWidth: '1520px' }}>

                {/* Top Logo Row: Separated from the grid to fix Y-alignment, but matches Column 1's exact width */}
                <div className="row mb-2">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-3">
                        <a href="/" className="text-decoration-none d-block w-100" aria-label="The Mercury News Homepage">
                            <div className="footer-logo-wrapper">
                                <svg viewBox="0 0 240 42" className="footer-site-logo-svg" aria-hidden="true">
                                    <text
                                        x="0"
                                        y="34"
                                        fontFamily="'Pirata One', system-ui"
                                        fontSize="42"
                                        fill="#000"
                                        textLength="240"
                                        lengthAdjust="spacing"
                                    >
                                        The Mercury News
                                    </text>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                {/* MOBILE ONLY: Single flat list of all sections */}
                <div className="d-md-none">
                    {[...footerData.col1, ...footerData.col2, ...footerData.col3, ...footerData.col4].map((section, idx) => (
                        <FooterSection key={idx} section={section} />
                    ))}
                    <div className="footer-button-container">
                        <button className="btn-footer-subscribe">SUBSCRIBE NOW</button>
                    </div>
                </div>

                {/* DESKTOP ONLY: Multi-column layout */}
                <div className="row d-none d-md-flex">

                    {/* Column 1 */}
                    <div className="col-md-6 col-lg-5 col-xl-3 footer-col mb-4 mb-xl-0 d-flex flex-column stretch-col">
                        {footerData.col1.map((section, idx) => <FooterSection key={idx} section={section} />)}

                        {/* On 2-columns (md), Column 2 and Column 3 move here */}
                        <div className="d-md-block d-lg-none footer-layout-2col">
                            {footerData.col2.map((section, idx) => <FooterSection key={idx} section={section} />)}
                            {footerData.col3.map((section, idx) => <FooterSection key={idx} section={section} />)}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="d-none d-lg-flex col-lg-3 col-xl-3 footer-col mb-4 mb-xl-0 flex-column stretch-col">
                        {footerData.col2.map((section, idx) => <FooterSection key={idx} section={section} />)}

                        {/* On 3-columns (lg), Column 3 moves here */}
                        <div className="d-lg-block d-xl-none footer-layout-3col">
                            {footerData.col3.map((section, idx) => <FooterSection key={idx} section={section} />)}
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="d-none d-xl-flex col-xl-3 footer-col mb-4 mb-xl-0 flex-column stretch-col">
                        {footerData.col3.map((section, idx) => <FooterSection key={idx} section={section} />)}
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-6 col-lg-4 col-xl-3 footer-col d-flex flex-column stretch-col">
                        {footerData.col4.map((section, idx) => <FooterSection key={idx} section={section} />)}

                        <div className="footer-button-container">
                            <button className="btn-footer-subscribe">SUBSCRIBE NOW</button>
                        </div>
                    </div>

                </div>

                <hr className="footer-divider" />

                {/* Bottom Legal & Logos Section */}
                <div className="row">
                    <div className="col-12">
                        {/* Legal Links */}
                        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-lg-center align-items-start align-items-lg-center mb-3">
                            {legalLinks.map((link) => (
                                <a key={link} href={`#${link.replace(/\s+/g, '-')}`} className="footer-legal-link">
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* Copyright Notice */}
                        <p className="footer-copyright text-md-center mb-5">
                            Copyright 2026 The Mercury News. All rights reserved. The use of any content on this website for the purpose of training artificial intelligence systems, algorithms, machine learning models, text and data mining, or similar use is strictly prohibited without explicit written consent.
                        </p>

                        {/* Partner Logos */}
                        <div className="d-flex flex-column flex-lg-row justify-content-lg-center align-items-start align-items-lg-center gap-4">
                            <img src="https://placehold.co/240x65/eeeeee/000000?text=BayArea+NewsGroup" alt="BayArea News Group Logo" className="footer-logo-img" />
                            <img src="https://placehold.co/240x65/eeeeee/000000?text=Amplified+Content+Studio" alt="Amplified Content Studio Logo" className="footer-logo-img" />
                            <img src="https://placehold.co/240x65/eeeeee/000000?text=MediaNews+Group" alt="MediaNews Group Logo" className="footer-logo-img" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;