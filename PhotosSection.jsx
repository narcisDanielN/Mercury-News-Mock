import React, { useState } from 'react';
import './css/PhotosSection.css';

const PhotosSection = () => {
    //monitors whenever the user clicks on the "Show More Photos" button
    const [isExpanded, setIsExpanded] = useState(false);

    //custom arrow SVG
    const ChevronRight = () => (
        <svg className="photos-arrow" aria-hidden="true" focusable="false" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
    );

    //main photo
    const mainPhoto = {
        img: "https://placehold.co/800x500/eeeeee/999999?text=Main+Photo",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
            "Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet."
    };

    //side photos titles
    const sidePhotos =[
        "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam quis nostrud exercitation",
        "Ullamco laboris nisi ut aliquip ex ea commodo",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident sunt"
    ];

    //extra photos titles
    const extraPhotos =[
        "Sunt in culpa qui officia deserunt mollit anim",
        "Sed ut perspiciatis unde omnis iste natus error",
        "Totam rem aperiam eaque ipsa quae ab illo",
        "Inventore veritatis et quasi architecto beatae vitae",
        "Dicta sunt explicabo Nemo enim ipsam voluptatem quia"
    ];

    return (
        <section className="photos-section mt-5" aria-label="Photos Section">
            <div className="photos-header-container">
                <h2 className="photos-title">PHOTOS</h2>
                <ChevronRight />
            </div>

            <div className="row">
                {/* Main Photo Column */}
                {/* takes ~60% width on the 4-column view; takes 100% on 3, 2, and 1-column views */}
                <div className="col-12 col-xl-7 mb-4 mb-xl-0">
                    <a href="#photo-main" className="text-decoration-none text-dark">
                        <img src={mainPhoto.img} alt="Main Photo" className="img-fluid w-100 mb-3" />
                        <h3 className="news-title-serif photos-main-title" title={mainPhoto.title}>{mainPhoto.title}</h3>
                    </a>
                    {/* Description is hidden on 2-column and 1-column views, visible on 3-column and 4-column views */}
                    <p className="photos-main-desc d-none d-lg-block m-0">
                        {mainPhoto.desc}
                    </p>
                </div>

                {/* 6 Side Photos Column */}
                {/* 1 column view on 4-column and 1-column views; 3x2 grid on 3-column and 2-column views */}
                <div className="col-12 col-xl-5">
                    <div className="row">
                        {sidePhotos.map((title, idx) => (
                            <div key={idx} className="col-12 col-md-6 col-lg-6 col-xl-12 side-photo-item">
                                <a href={`#photo-side-${idx}`} className="side-photo-link">
                                    <div className="side-photo-img-wrapper">
                                        <img src={`https://placehold.co/90x60/eeeeee/999999?text=Photo+${idx+1}`} alt={`Side ${idx+1}`} className="img-fluid" />
                                    </div>
                                    <div className="side-photo-title-wrapper">
                                        <h4 className="side-photo-title" title={title}>{title}</h4>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Extra Photos Container (loaded when button is clicked) */}
            {/* 2x4 grid on 4-column view; 2x3 grid on 3-column view; 3x2 grid on 2-column and 1-column view */}
            {isExpanded && (
                <div className="row mt-4">
                    {extraPhotos.map((title, idx) => (
                        <div key={idx} className="col-6 col-lg-4 col-xl-3 mb-4">
                            <a href={`#photo-extra-${idx}`} className="text-decoration-none text-dark">
                                <img src={`https://placehold.co/400x250/eeeeee/999999?text=Extra+${idx+1}`} alt={`Extra ${idx+1}`} className="img-fluid w-100 mb-2" />
                                <h4 className="side-photo-title" title={title}>{title}</h4>
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {/* Show More Button */}
            {!isExpanded && (
                <div>
                    <div className="decorative-divider">
                        <div className="decorative-diamond"></div>
                    </div>
                    <div className="show-more-container">
                        <button className="btn-show-more" onClick={() => setIsExpanded(true)}>
                            SHOW MORE PHOTOS
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PhotosSection;