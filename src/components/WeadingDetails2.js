import React from 'react';
import '../OurStory.css';
import img3 from '../images/met5.jpg'
import img2 from '../images/met3.jpg'
import img1 from '../images/met4.jpg'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>We Love Each Other</span>
                            <h2 className="title">Our Story</h2>
                            <p>To love a person is to see all of their magic, and to remind them of it when they have forgotten.</p>
                            <p>Ah, life grows lovely where you are.</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img1})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First We Met</h3>
                                        <span className="date">December 25, 2018</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>After four hours of long drive we met in her home with full of family members, fall in love with each other.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First Date</h3>
                                        <span className="date"><i className="icon icon-date"></i>December 30, 2018</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Came to her home with excitement to meet her again. Our first date. She kisses my hand and I gave her red roses and chocolate.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">In A Relationship</h3>
                                        <span className="date">May 16, 2019</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>It's our engagement time. We started new relationship.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;