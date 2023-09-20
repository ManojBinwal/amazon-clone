import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';


const Subtotal = () => {
  return (
    <div className="subtotal">
        <CurrencyFormat 
            renderText={(value)=>(
                <>
                    <p>
                        subtotal (0 items): <strong>{`${value}`}</strong>
                        <strong>{`value`}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" />This order contains a gift
                    </small>
                    <button className='substotal__checkoutButton'>Proceed to checkout</button>
                </>
            )}
            decimalScale={2}
            value = {0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />
    </div>
  )
}

export default Subtotal