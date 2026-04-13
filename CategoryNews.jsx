import React from 'react';
import './css/CategoryNews.css';

const CategoryNews = () => {
    // Reusable custom arrow SVG
    const ChevronRight = () => (
        <svg className="category-arrow" aria-hidden="true" focusable="false" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
    );

    // Data structure for the 3 categories
    const categoriesData =[
        {
            category: "CRIME AND PUBLIC SAFETY",
            mainImg: "https://placehold.co/600x400/eeeeee/999999?text=Crime+And+Safety",
            mainTitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            mainDesc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            subArticles:[
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
                "Excepteur sint occaecat cupidatat non proident sunt in culpa",
                "Sunt in culpa qui officia deserunt mollit anim id est laborum"
            ]
        },
        {
            category: "SPORTS",
            mainImg: "https://placehold.co/600x400/eeeeee/999999?text=Sports",
            mainTitle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            mainDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
            subArticles:[
                "Neque porro quisquam est qui dolorem ipsum quia dolor",
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit",
                "At vero eos et accusamus et iusto odio dignissimos ducimus"
            ]
        },
        {
            category: "REAL ESTATE",
            mainImg: "https://placehold.co/600x400/eeeeee/999999?text=Real+Estate",
            mainTitle: "Et harum quidem rerum facilis est et expedita distinctio",
            mainDesc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
            subArticles:[
                "Temporibus autem quibusdam et aut officiis debitis aut rerum",
                "Itaque earum rerum hic tenetur a sapiente delectus ut aut",
                "Maiores alias consequatur aut perferendis doloribus asperiores repellat"
            ]
        }
    ];

    return (
        <section className="container-fluid px-3 px-lg-4 mx-auto mb-5" style={{ maxWidth: '1520px' }} aria-label="Category News Sections">
            <div className="row">
                {categoriesData.map((data, idx) => (
                    /*
                        col-12: 1 column per row on mobile
                        col-md-6: 2 columns per row on tablet/laptop (Item 3 wraps below Item 1)
                        col-xl-4: 3 columns per row on large desktop (All items in one row)
                    */
                    <div key={idx} className="col-12 col-md-6 col-xl-4 mb-5 mb-xl-0 d-flex flex-column">

                        {/* Section Header */}
                        <div className="category-header-container">
                            <h2 className="category-title">{data.category}</h2>
                            <ChevronRight />
                        </div>

                        {/* Main Article */}
                        <div className="category-main-article">
                            <a href={`#category-main-${idx}`} tabIndex="-1">
                                <img src={data.mainImg} alt={`${data.category} main event`} className="category-main-img" />
                            </a>
                            <a href={`#category-main-${idx}`} className="category-main-title" title={data.mainTitle}>
                                {data.mainTitle}
                            </a>
                            <p className="category-main-desc">
                                {data.mainDesc}
                            </p>
                        </div>

                        {/* 3 Sub Articles */}
                        {/* mt-auto pushes the list to the bottom so heights naturally balance */}
                        <ul className="list-unstyled m-0 mt-auto">
                            {data.subArticles.map((subTitle, subIdx) => (
                                <li key={subIdx} className="category-sub-item">
                                    <a href={`#category-sub-${idx}-${subIdx}`} className="category-sub-link" title={subTitle}>
                                        {subTitle}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryNews;