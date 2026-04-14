import React from 'react';
import './css/BottomCategories.css';

const BottomCategories = () => {
    //custom arrow SVG
    const ChevronRight = () => (
        <svg className="bottom-cat-arrow" aria-hidden="true" focusable="false" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
    );

    //category titles
    const categories =[
        "THINGS TO DO", "RESTAURANTS, FOOD AND DRINK", "OPINION",
        "BUSINESS", "CELEBRITIES", "HOUSING", "BEST REVIEWS"
    ];

    //side articles
    const subTitles =[
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        "Excepteur sint occaecat cupidatat non proident sunt in culpa",
        "Sunt in culpa qui officia deserunt mollit anim id est laborum"
    ];

    return (
        <div className="bottom-categories-wrapper mt-5 pt-3">
            {categories.map((cat, idx) => (
                <section key={idx} className="bottom-cat-section mb-5 pb-2" aria-label={cat}>
                    {/* Category Header */}
                    <div className="bottom-cat-header">
                        <h2 className="bottom-cat-title">{cat}</h2>
                        <ChevronRight />
                    </div>

                    <div className="bottom-cat-grid">
                        {/* Area: img */}
                        <div className="cat-img">
                            <a href={`#cat-${idx}`} tabIndex="-1" className="bottom-cat-img-link">
                                <img src={`https://placehold.co/400x300/eeeeee/999999?text=${cat.split(' ')[0]}`} className="img-fluid w-100 h-100" alt={cat} />
                            </a>
                        </div>

                        {/* Area: title + description */}
                        <div className="cat-text">
                            <a href={`#cat-main-${idx}`} className="bottom-cat-main-title" title="Lorem ipsum dolor sit amet consectetur adipiscing elit">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit
                            </a>
                            <p className="bottom-cat-desc">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        {/* Area: 3 side articles */}
                        <div className="cat-list">
                            <ul className="list-unstyled m-0">
                                {subTitles.map((sub, subIdx) => (
                                    <li key={subIdx} className="bottom-cat-list-item">
                                        <a href={`#sub-${idx}-${subIdx}`} className="bottom-cat-sub-link" title={sub}>{sub}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default BottomCategories;