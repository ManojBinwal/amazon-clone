import React from 'react';
import Subtotal from '../subtotal/Subtotal';
import "./Checkout.css";

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C0423492668_.jpg" alt="checkout__add" className="checkout__ad" />


                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
            </div>
            <div className='chekout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout