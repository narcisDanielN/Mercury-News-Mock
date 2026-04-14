import React from 'react';
import './css/MostPopular.css';

const MostPopular = () => {
    //10 Lipsum placeholder articles
    const lipsumArticles =[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit",
        "At vero eos et accusamus et iusto odio dignissimos ducimus",
        "Et harum quidem rerum facilis est et expedita distinctio nam"
    ];

    return (
        <section className="most-popular-section mt-5" aria-label="Most Popular Articles">
            <div className="most-popular-header-container">
                <h2 className="most-popular-title">MOST POPULAR</h2>
            </div>

            <div className="row">
                {/* Left Column (Items 1-5) */}
                {/* col-md-6 makes it 2 columns on tablet/desktop, col-12 makes it 1 column on mobile */}
                <div className="col-12 col-md-6">
                    <ul className="list-unstyled m-0">
                        {lipsumArticles.slice(0, 5).map((title, idx) => (
                            <li key={idx} className="d-flex align-items-start popular-item">
                                <span className="popular-number">{idx + 1}</span>
                                <a href={`#pop${idx}`} className="popular-text">{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column (Items 6-10) */}
                <div className="col-12 col-md-6">
                    <ul className="list-unstyled m-0">
                        {lipsumArticles.slice(5, 10).map((title, idx) => (
                            <li key={idx + 5} className="d-flex align-items-start popular-item">
                                <span className="popular-number">{idx + 6}</span>
                                <a href={`#pop${idx+5}`} className="popular-text">{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MostPopular;