import React from 'react';
import groom from '../images/manoj1.png';
import bride from '../images/mana2.jpg';
import brideback from '../images/brideback.jpg';
const Invitation = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="heading">
                            <h2>Hello!</h2>
                            <p>We invite you to be with us as we celebrate our new life together</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>

                        <div className="couple-wrap">
                            <div className="couple-half">
                                <div className="groom">
                                    <img src={groom} style={{backgroundImage: `url(${brideback})`, backgroundSize: 'cover',
    backgroundRepeat: "no-repeat"}}  alt="groom" className="img-responsive" />
                                </div>
                                <div className="desc-groom">
                                    <h3>Manoj Mukherjee</h3>
                                    <h5>S/O Subal Mukherjee</h5>
                                    <h5>Mamata Mukherjee</h5>
                                </div>
                            </div>
                            <p className="center-text heartp">
                                <svg className="heart" viewBox="0 0 32 29.6">
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                                </svg>
                            </p>
                            <div className="couple-half">
                                <div className="bride">
                                    <img src={bride} alt="bride" className="img-responsive" />
                                </div>
                                <div className="desc-bride">
                                    <h3>Iva Chatterjee</h3>
                                    <h5>D/O Prabir Chatterjee</h5>
                                    <h5>Iti Chatterjee</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invitation;