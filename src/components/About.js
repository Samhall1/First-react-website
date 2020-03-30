import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1 className="heading">Up coming events</h1>
            <p className="dets">Details will be laid out in full 8 weeks prior to the events taking place. </p>
            <p className="dets">Tickets will go on sale 6 weeks prior keep an eye on this page for more info.</p>
            <p className="dets">In the mean time keep an eye on all our products for the up coming sale.</p>
            <ul className="event">
                <li>03/April/2020 @ The 02 Arena - London</li>
                <li>15/May/2020 @ The MEN Arena - Manchester</li>
                <li>22/June/2020 @ Victoria Warehouse Manchester</li>
            </ul>
        </div>
    )
}

export default About;