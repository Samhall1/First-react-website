import React from 'react';
import './Home.css';

const Home = (props) => {
    return (
        <div className="home">
            <h1 className="heading">Welcome to the products page</h1>
           
            <div className="pS4">
                <h3>Playstation 4</h3>
                <h3>Price: £399</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
            <div className="pS5">
                <h3>Playstation 5</h3>
                <h3>Price: £499</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
            <div className="xboxOne">
                <h3>XBOX ONE</h3>
                <h3>Price: £349</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
            <div className="XBOX360">
                <h3>XBOX 360</h3>
                <h3>Price: £249</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Home;