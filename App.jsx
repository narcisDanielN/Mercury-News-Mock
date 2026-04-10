import React from 'react';
import Header from './Header';

function App() {
    return (
        <div className="app-container" style={{ backgroundColor: '#f5f5f5' }}>
            {/* Header Implementation */}
            <Header />

            {/* Placeholder Content Wrapper (Required for scrolling and WAVE compliance) */}
            <main id="main-content" className="container mt-4 pb-5">
                <h2 className="mb-4">Top Stories</h2>

                {/* Lipsum Placeholder Content mapped to mimic a long scrolling page */}
                {[...Array(6)].map((_, i) => (
                    <article key={i} className="row mb-5 bg-white p-4 shadow-sm border">
                        <div className="col-md-5">
                            {/* placehold.co utilized for images */}
                            <img
                                src={`https://placehold.co/600x400/eeeeee/999999?text=News+Image+${i + 1}`}
                                alt={`Placeholder representative for article ${i + 1}`}
                                className="img-fluid w-100 mb-3 mb-md-0"
                            />
                        </div>
                        <div className="col-md-7 d-flex flex-column justify-content-center">
                            <h3>Lorem Ipsum Dolor Sit Amet {i + 1}</h3>
                            <p className="text-muted mb-2">By <strong>Lorem Ipsum</strong> | April 10, 2026</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
}

export default App;