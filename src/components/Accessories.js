import React from 'react';
import './Accessories.css';

const Accessories = (props) => {
    return (
        <div>
            <h1 className="heading">Welcome to the Accessories page</h1>
           
            <div className="PS5Controller">
                <h3>Playstation 5 Controller</h3>
                <h3>Price: £49.99</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
            <div className="PS4Controller">
                <h3>Playstation 4 Controller</h3>
                <h3>Price: £49.99</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
            <div className="XBOXCONTROLLER">
                <h3>XBOX 360 Controller</h3>
                <h3>Price:49.99</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
            <div className="XBOXONECONTROLLER">
                <h3>XBOX ONE CONTROLLER</h3>
                <h3>Price: £49.99</h3>
                <button onClick={props.myFunc}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Accessories;

