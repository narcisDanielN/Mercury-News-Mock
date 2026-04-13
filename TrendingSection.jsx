import React from 'react';
import './css/TrendingSection.css';

const TrendingSection = ({ isScrolled }) => {
    // If scrolled, the section completely disappears
    if (isScrolled) return null;

    const trendingItems = [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
        "Incididunt ut labore et dolore",
        "Magna aliqua ut enim",
        "Ad minim veniam quis nostrud"
    ];

    return (
        <section className="trending-section d-none d-xl-flex align-items-center justify-content-center px-4 py-2" aria-label="Trending Topics">
            <span className="trending-label me-3 text-nowrap">TRENDING:</span>
            <ul className="list-unstyled d-flex flex-nowrap m-0 gap-4 overflow-hidden">
                {trendingItems.map((item, index) => (
                    <li key={index} className="text-nowrap">
                        <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="text-decoration-none text-dark">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TrendingSection;