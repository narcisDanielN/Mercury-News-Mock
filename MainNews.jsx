import React from 'react';
import './css/MainNews.css';

const MainNews = () => {
    // Placeholder Data
    const relatedArticles =[
        { title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod", time: "3 days ago" },
        { title: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris", time: "3 days ago" },
        { title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum", time: "2 weeks ago" }
    ];

    const randomArticles =[
        { title: "Excepteur sint occaecat cupidatat non proident sunt in culpa", img: "https://placehold.co/600x400/eeeeee/999999?text=Article+1" },
        { title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem", img: "https://placehold.co/600x400/eeeeee/999999?text=Article+2" },
        { title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut", img: "https://placehold.co/600x400/eeeeee/999999?text=Article+3" },
        { title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet", img: "https://placehold.co/600x400/eeeeee/999999?text=Article+4" }
    ];

    const latestHeadlines =[
        { title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit ", time: "11 hours ago" },
        { title: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ", time: "11 hours ago" },
        { title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui ", time: "28 minutes ago" },
        { title: "Blanditiis praesentium voluptatum deleniti atque corrupti quos ", time: "58 minutes ago" },
        { title: "Et harum quidem rerum facilis est et expedita distinctio nam libero ", time: "2 hours ago" },
        { title: "Temporibus autem quibusdam et aut officiis debitis aut rerum ", time: "3 hours ago" },
        { title: "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis ", time: "4 hours ago" }
    ];

    return (
        <section className="mt-3 mb-5" aria-label="Main News Section">
            <div className="row">

                {/* LEFT CONTENT AREA (Main Article + 4 Random Articles) */}
                <div className="col-12 col-lg-8 pe-lg-4 mb-2 mb-lg-0">

                    {/* --- MAIN ARTICLE: SIDE-BY-SIDE LAYOUT --- */}
                    {/* Visible on 4-column (>= 1400px) and 2-column (768px - 991px) views */}
                    <article className="d-none d-md-flex d-lg-none d-xxl-flex row mb-5 pb-3 border-bottom">
                        <div className="col-6 pe-4 d-flex flex-column">
                            <a href="#main" className="news-link">
                                <h2 className="news-title-serif main-article-title" title="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </h2>
                            </a>
                            <p className="article-desc mb-0">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p><br />

                            <div className="related-section mt-auto">
                                <span className="related-label">Related</span>
                                <ul className="related-list">
                                    {relatedArticles.map((art, i) => (
                                        <li key={i}>
                                            <a href={`#rel${i}`} className="news-link" title={art.title}>{art.title}</a> <span className="time-ago">{art.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <a href="#main" tabIndex="-1">
                                <img src="https://placehold.co/800x500/eeeeee/999999?text=Main+News+Image" alt="Main News Placeholder" className="img-fluid w-100" />
                            </a>
                        </div>
                    </article>

                    {/* --- MAIN ARTICLE: STACKED LAYOUT --- */}
                    {/* Visible on 3-column (992px - 1199px), 4-column shrinked (1200px - 1399px), and 1-column (< 768px) views */}
                    <article className="d-flex d-md-none d-lg-flex d-xxl-none flex-column mb-2 pb-3 border-bottom">
                        <a href="#main" className="news-link">
                            <h2 className="news-title-serif main-article-title mb-3" title="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </h2>
                        </a>
                        <a href="#main" tabIndex="-1">
                                <img src="https://placehold.co/800x500/eeeeee/999999?text=Main+News+Image" alt="Main News Placeholder" className="img-fluid w-100 mb-3" />
                            </a>
                            <p className="article-desc">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                        <div className="related-section mb-0">
                            <span className="related-label">Related</span>
                            <ul className="related-list">
                                {relatedArticles.map((art, i) => (
                                    <li key={i}>
                                        <a href={`#rel${i}`} className="news-link" title={art.title}>{art.title}</a> <span className="time-ago">{art.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>


                    {/* --- 4 RANDOM ARTICLES GRID --- */}
                    <div className="row">
                        {randomArticles.map((art, i) => (
                            /*
                                col-12: Mobile (1 col)
                                col-md-6 / col-lg-6: Tablet & Small Desktop (2 col grid)
                                col-xl-12: Shrinked Desktop (1 col list - overrides to Title Left / Image Right)
                                col-xxl-6: Massive Desktop (Expands back to 2 col grid)
                            */
                            <article key={i} className="col-12 col-md-6 col-lg-6 col-xl-12 col-xxl-6 mb-2 mb-md-4 random-article-col">
                                <a href={`#rand${i}`} className="random-article-link">
                                    <div className="random-article-img-wrapper">
                                        <img src={art.img} alt={`Random article ${i+1}`} className="img-fluid w-100" />
                                    </div>
                                    <div className="random-article-title-wrapper">
                                        <h3 className="news-title-serif fs-5 news-link mb-0" title={art.title}>{art.title}</h3>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDEBAR AREA (Latest Headlines + Sign Up) */}
                {/* On lg, xl, xxl it sits on the right for 3 and 4 column views. 
                    On md (< 992px) it drops below the articles for 1 and 2 column views. */}
                <aside className="col-12 col-lg-4 ps-lg-3 mt-4 mt-lg-0" aria-label="Sidebar Content">

                    <div className="sidebar-heading-container">
                        <h2 className="sidebar-heading">LATEST HEADLINES</h2>
                    </div>

                    <div className="latest-headlines-list">
                        {latestHeadlines.map((headline, i) => (
                            <article key={i} className="latest-headline-item">
                                <h3 className="latest-headline-title">
                                    <a href={`#latest${i}`} className="news-link" title={headline.title}>{headline.title}</a>
                                    <span className="time-ago">{headline.time}</span>
                                </h3>
                            </article>
                        ))}
                    </div>

                    <div className="newsletter-box">
                        <p className="newsletter-text">Get Morning Report and other email newsletters</p>
                        <button className="btn-newsletter">SIGN UP</button>
                    </div>

                </aside>

            </div>
        </section>
    );
};

export default MainNews;