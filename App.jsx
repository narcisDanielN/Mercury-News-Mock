import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from "./Footer";
import TrendingSection from './TrendingSection';
import MainNews from './MainNews';
import CategoryNews from "./CategoryNews";
import PhotosSection from "./PhotosSection";
import BottomCategories from "./BottomCategories";

function App() {
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerWidth < 1200 ? 10 : 120;
            setIsScrolled(window.scrollY > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app-container" style={{ backgroundColor: '#ffffff' }}>
            {/* Header Implementation */}
            <Header isScrolled={isScrolled} />

            {/* Trending Section - Responsive and responsive to scroll state */}
            <TrendingSection isScrolled={isScrolled} />

            {/* Placeholder Content Wrapper (Required for scrolling and WAVE compliance) */}
            <main id="main-content" className="container-fluid px-3 px-lg-4 mx-auto mt-4 pb-5" style={{ maxWidth: '1520px', minHeight: '80vh' }}>
                {/* Main News Section */}
                <MainNews />

                {/* CRIME AND PUBLIC SAFETY, SPORTS and REAL ESTATE Section */}
                <CategoryNews />

                {/* Photos Section */}
                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-12 pe-lg-4 pe-xl-0">
                        <PhotosSection />
                    </div>
                </div>

                {/* Bottom Categories Section */}
                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-12 pe-lg-4 pe-xl-0">
                        <BottomCategories />
                    </div>
                </div>
            </main>

            {/* Implementing the new Footer component */}
            <Footer />
        </div>
    );
}

export default App;