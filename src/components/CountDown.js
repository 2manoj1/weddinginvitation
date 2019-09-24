import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [isExpired, setIsExpired] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const countDownDate = new Date("Dec 11, 2019 22:53:35").getTime();
        const x = setInterval(() => {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((distance % (1000 * 60)) / 1000);
            if (days !== day) {
                setDays(day);
            }
            if (hours !== hour) {
                setHours(hour);
            }
            if (minutes !== minute) {
                setMinutes(minute);
            }
            if (seconds !== second) {
                setSeconds(second);
            }

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                setIsExpired(true);
            }
        }, 1000);

        return () => {
            clearInterval(x);
        }

    }, [days, hours, minutes, seconds]);

    return (
        <section className="section counter-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <h2 className="title">Don't miss it!</h2>
                            <span className="heading-bottom"><i className="color-white icon icon-star"></i></span>
                        </div>
                    </div>

                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">

                        <div className="remaining-time">
                            {isExpired
                                ? <div>Yay....</div>
                                :
                                <div id="clock">
                                    <div className="time-sec"><span className="title">{days}</span> Days </div>
                                    <div className="time-sec"><span className="title">{hours}</span> Hours </div>
                                    <div className="time-sec"><span className="title">{minutes}</span> Minutes </div>
                                    <div className="time-sec"><span className="title">{seconds}</span> Seconds </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
        );
}

export default CountDown;


