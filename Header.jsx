import React, { useState, useEffect } from 'react';
import './css/Header.css';

// SVG Icons
const MenuIcon = () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>;
const CloseIcon = () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>;
const SearchIcon = () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>;
const CloudIcon = () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/></svg>;
const PersonIcon = () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const ChevronDownIcon = () => <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>;
const HomeIcon = () => <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>;

// Small chevrons for the side menu accordion
const ChevronRightIconSmall = () => <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>;
const ChevronDownIconSmall = () => <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>;

const navLinks =["News", "Local", "Sports", "Obituaries", "Things to Do", "Business", "Real Estate", "Opinion", "Marketplace", "e-Edition"];

// Updated Submenu Mapping Array
const sidebarLinksData =[
    { name: "News", subLinks:["News", "Latest Headlines", "Crime and Public Safety", "California News", "National News", "World News", "Politics", "Education", "Environment", "Science", "Health", "Transportation", "Weather"] },
    { name: "Local", subLinks:["Bay Area", "San Jose", "Santa Clara County", "Peninsula", "San Mateo County", "Alameda County", "Santa Cruz County", "Sal Pizarro"] },
    { name: "Obituaries", subLinks:["Obituaries", "News Obituaries", "Place an Obituary"] },
    { name: "Opinion", subLinks:["Opinion", "Editorials", "Opinion Columnists", "Letters to the Editor", "Commentary", "Cartoons", "Election Endorsements"] },
    { name: "Sports", subLinks:["Sports", "San Francisco 49ers", "San Francisco Giants", "Golden State Warriors", "Raiders", "Athletics", "San Jose Sharks", "San Jose Earthquakes", "Bay FC", "College Sports", "Wilner Hotline", "High School Sports", "Other Sports", "Sports Columnists", "Sports Blogs", "Golden States", "Valkyries"] },
    { name: "Things To Do", subLinks:["Entertainment", "Readers Choice", "Things To Do", "Restaurants, Food and Drink", "Celebrities", "TV Streaming", "Movies", "Music", "Theater", "Lifestyle", "Cannabis", "Advice", "Travel", "Pets and Animals", "Comics", "Puzzles and Games", "Horoscopes", "Event Calendar"] },
    { name: "Business", subLinks:["Business", "Housing", "Economy", "Technology", "Best Reviews", "SiliconValley.com"] },
    { name: "Marketplace", subLinks:["Branded Content", "Partner Content", "BayArea.com"] },
    { name: "Real Estate", subLinks: null },
    { name: "Branded Content", subLinks: ["Paid Content by Brandpoint"] },
    { name: "Subscribe", subLinks: null },
    { name: "Advertise", subLinks: null },
    { name: "Log in", subLinks: null }
];

// Reusable Sub-Components
const SearchBarDropdown = () => (
    <div className="search-bar-container px-4 py-2 d-flex align-items-center">
        <SearchIcon />
        <label htmlFor="site-search-input" className="visually-hidden">Type your search</label>
        <input id="site-search-input" type="text" className="search-input mx-3" placeholder="Type your search" autoFocus />
        <button className="btn-mercury" style={{ width: '90px' }}>Search</button>
    </div>
);

const SideMenu = ({ expandedSections, toggleAccordion }) => (
    <div className="side-menu pb-5" role="dialog" aria-label="All Sections Navigation">
        <div className="p-2">
            <button className="btn-mercury btn-mercury-block">Subscribe Now</button>
        </div>

        <div className="d-lg-none p-2 mb-1 text-start">
            <div className="d-flex align-items-center fw-bold text-nowrap" style={{ fontSize: '1.05rem' }}>
                <span>57°F</span>
                <span className="mx-1 d-flex align-items-center"><CloudIcon /></span>
                <span className="ms-1">Friday, April 10th 2026</span>
            </div>
            <a href="#eedition" className="text-secondary d-block mt-1 eedition" style={{fontSize: '0.9rem'}}>
                Today's e-Edition
            </a>
        </div>

        <div className="p-2">
            <span className="text-dark d-flex align-items-center fw-bold cursor-default" style={{ cursor: 'default' }}>
                <HomeIcon /> <span className="ms-3">Home Page</span>
            </span>
        </div>

        <nav aria-label="Sidebar Sections">
            <ul className="list-unstyled mb-0">
                {sidebarLinksData.map((link) => {
                    const isExpanded = expandedSections[link.name];
                    return (
                        <li key={link.name}>
                            {/* Plain Text Parent Button Toggle */}
                            <button
                                type="button"
                                className="menu-accordion-btn side-menu-link text-dark d-flex justify-content-between align-items-center px-2 py-2"
                                onClick={() => link.subLinks ? toggleAccordion(link.name) : null}
                                aria-expanded={isExpanded}
                                style={{ cursor: link.subLinks ? 'pointer' : 'default' }}
                            >
                                <span className="fw-bold fs-6">{link.name}</span>
                                {link.subLinks && (
                                    <span className={`accordion-chevron ${isExpanded ? 'is-open' : ''}`}>
                                            <ChevronRightIconSmall />
                                        </span>
                                )}
                            </button>

                            {/* Sub-menu Expanded List */}
                            {link.subLinks && (
                                <div className={`accordion-panel ${isExpanded ? 'is-open' : ''}`}>
                                    <ul className="list-unstyled mb-0 bg-light">
                                        {link.subLinks.map(subLink => (
                                            <li key={subLink}>
                                                    <span className="side-menu-sublink d-block px-4 py-2 text-dark" style={{ fontSize: '0.95rem' }}>
                                                        {subLink}
                                                    </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>

        <div className="p-3 mt-3 text-center mb-5 pb-4">
            <p className="fw-bold mb-3" style={{fontSize: '0.9rem'}}>Get Morning Report and other email newsletters</p>
            <button className="btn-mercury btn-mercury-block">Sign Up</button>
        </div>
    </div>
);

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Tracks which accordion sections in the side menu are open
    const [expandedSections, setExpandedSections] = useState({});

    // Handle Scroll Sticky Header
    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerWidth < 992 ? 50 : 120;
            setIsScrolled(window.scrollY > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    const isMobileSticky = isScrolled || isMenuOpen || isUserMenuOpen || isSearchOpen;

    const closeAll = () => {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
        setIsUserMenuOpen(false);
    };

    // Handle Escape Key & Body Scroll Lock
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeAll();
            }
        };

        // Freeze background website scrolling when overlays are open
        if (isSearchOpen || isMenuOpen || isUserMenuOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isSearchOpen, isMenuOpen, isUserMenuOpen]);

    // Toggles to ensure only one overlay is open at a time
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsMenuOpen(false);
        setIsUserMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSearchOpen(false);
        setIsUserMenuOpen(false);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        setIsSearchOpen(false);
        setIsMenuOpen(false);
    };

    const toggleAccordion = (name) => {
        setExpandedSections(prev => {
            const isAlreadyOpen = !!prev[name];
            // If it's already open, close it (reset to empty).
            // If it's not open, close everything else and open this one.
            return isAlreadyOpen ? {} : { [name]: true };
        });
    };

    const UserMenuDropdown = () => (
        <div className="user-menu-dropdown">
            <button className="btn-mercury btn-mercury-block">Subscribe</button>
            <button className="btn-mercury btn-mercury-block">Log in</button>
            <div className="mt-3 border-top pt-3 text-center mb-5 pb-4">
                <p className="fw-bold mb-2" style={{fontSize: '0.9rem'}}>Get Morning Report and other email newsletters</p>
                <button className="btn-mercury btn-mercury-block">Sign Up</button>
            </div>
        </div>
    );

    return (
        <>
            <div className={`header-desktop-container d-none d-lg-block ${isScrolled ? 'has-sticky' : ''}`}>
                <header className={`mercury-header ${isScrolled ? 'sticky-header animate-sticky' : ''}`}>
                    <div className="header-top-layer">
                        <div className={`px-4 ${isScrolled ? 'py-2' : 'pt-3 pb-2'}`}>
                            <div className={`d-flex justify-content-between position-relative ${isScrolled ? 'align-items-center' : 'align-items-start'}`}>

                                <div className="header-left">
                                    <button
                                        className="icon-btn fw-bold mt-1"
                                        aria-expanded={isMenuOpen}
                                        aria-label={isMenuOpen ? "Close All Sections Menu" : "Open All Sections Menu"}
                                        onClick={toggleMenu}
                                    >
                                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />} <span className="ms-2">All Sections</span>
                                    </button>

                                    {(!isScrolled && !isSearchOpen) && (
                                        <div className="mt-4 text-start text-nowrap">
                                            <div className="d-flex align-items-center fw-bold" style={{ fontSize: '0.95rem' }}>
                                                <span>57°F</span>
                                                <span className="mx-1 d-flex align-items-center"><CloudIcon /></span>
                                                <span className="ms-1">Friday, April 10th 2026</span>
                                            </div>
                                            <a href="#eedition" className="text-secondary d-block mt-1 eedition" style={{fontSize: '0.85rem'}}>
                                                Today's e-Edition
                                            </a>
                                        </div>
                                    )}
                                </div>

                                <div className="header-center d-flex justify-content-center align-items-start">
                                    <a href="/" className="text-decoration-none" aria-label="The Mercury News Homepage">
                                        <h1 className="site-logo">The Mercury News</h1>
                                    </a>
                                </div>

                                <div className={`header-right ${isScrolled ? 'align-items-center' : 'justify-content-end'}`}>
                                    <div className="d-flex align-items-center gap-2 mt-1">
                                        <button className="btn-mercury">Subscribe</button>
                                        <button className="btn-mercury">Log in</button>
                                        <button
                                            className="icon-btn search-icon-desktop ms-2"
                                            aria-label="Toggle search bar"
                                            aria-expanded={isSearchOpen}
                                            onClick={toggleSearch}
                                        >
                                            <SearchIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isSearchOpen && <SearchBarDropdown />}
                        {isMenuOpen && <SideMenu expandedSections={expandedSections} toggleAccordion={toggleAccordion} />}
                    </div>

                    {(isSearchOpen || isMenuOpen) && (
                        <div className="search-backdrop" onClick={() => {setIsSearchOpen(false); setIsMenuOpen(false);}} aria-hidden="true"></div>
                    )}

                    {!isScrolled && (
                        <div className="header-bottom-layer">
                            <div className="px-4 pb-2">
                                <nav className="top-nav mt-3 mb-1" aria-label="Main Navigation">
                                    <ul className="d-flex justify-content-center list-unstyled m-0 gap-3 gap-xl-4 text-nowrap">
                                        {navLinks.map((link) => (
                                            <li key={link}>
                                                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </header>
            </div>

            {/* Mobile Header */}
            <header className={`mercury-header d-lg-none ${isMobileSticky ? 'sticky-header' : 'position-relative'} ${isScrolled ? 'animate-sticky' : ''}`}>
                <div className="header-top-layer">
                    <div className="px-3 py-2 d-flex justify-content-between align-items-center">
                        <button className="icon-btn" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close All Sections Menu" : "Open All Sections Menu"}>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>

                        <a href="/" className="text-decoration-none">
                            <h1 className="site-logo site-logo-mobile">The Mercury News</h1>
                        </a>

                        <div className="d-flex align-items-center gap-3">
                            <button className="icon-btn" onClick={toggleUserMenu} aria-expanded={isUserMenuOpen} aria-label={isUserMenuOpen ? "Close User Menu" : "Open User Menu"}>
                                <PersonIcon /> <ChevronDownIcon />
                            </button>
                            <button className="icon-btn" onClick={toggleSearch} aria-expanded={isSearchOpen} aria-label={isSearchOpen ? "Close Search Bar" : "Open Search Bar"}>
                                <SearchIcon />
                            </button>
                        </div>
                    </div>

                    {isSearchOpen && <SearchBarDropdown />}
                    {isMenuOpen && <SideMenu expandedSections={expandedSections} toggleAccordion={toggleAccordion} />}
                    {isUserMenuOpen && <UserMenuDropdown />}
                </div>

                {(isSearchOpen || isMenuOpen || isUserMenuOpen) && (
                    <div className="search-backdrop" onClick={closeAll} aria-hidden="true"></div>
                )}
            </header>
        </>
    );
};

export default Header;