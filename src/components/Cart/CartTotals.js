import React from 'react'
import {Link} from  'react-router-dom'
export default function CartTotals({value}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart}=value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10  mt-10 ml-sm-5 ml-md-auto 
                    text-capitalize text-right col-sm-8">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase
                            mb-3 px-5"  type="button" onClick={()=>clearCart()}> clear cart
                            </button>
                        </Link>
                        <h5>
                        <span className="text-title"> subtotal : </span>
                        <strong>
                        &#8377; {cartSubTotal}
                        </strong>
                        </h5>
                        <h5>
                        <span className="text-title"> tax : </span>
                        <strong>
                        &#8377; {cartTax}
                        </strong>
                        </h5>
                        <h5>
                        <span className="text-title"> total : </span>
                        <strong>
                        &#8377; {cartTotal}
                        </strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
