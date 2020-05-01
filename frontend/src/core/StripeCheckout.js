import React, {useState} from "react";
import {isAuthenticated} from "../auth/helper";
import {Link} from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";
import {API} from "../backend";

const StripeCheckout = ({products, setReload = f => f, reload = undefined}) => {

    const [data, setData ] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""
    });

    const token = isAuthenticated() && isAuthenticated().token
    const userId = isAuthenticated() && isAuthenticated().user._id

    const TotalPrice = () => {
        let amount = 0
        products.map(p => {
            amount = amount + p.price;
        });
        return amount;
    }

    const makePayment = token => {

        const body = {
            token,
            products
        }

        return fetch(`${API}/stripe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                const {status} = response;
                console.log("Status", status);
            })
            .catch(err => console.log(err));
    }

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <StripeCheckoutButton
                token={makePayment}
                stripeKey=""
                amount={TotalPrice() * 100}
                name="Buy Tshirt"
                shippingAddress
                billingAddress
            >
                <button className="btn btn-success">Pay with Stripe</button>
            </StripeCheckoutButton>
        ) : (
            <Link to="/signin">
                <button className="btn btn-warning">
                    SignIn
                </button>
            </Link>
        )
    }

    return(
        <div>
            <h1>{TotalPrice()}</h1>
            {showStripeButton()}
        </div>
    )
}

export default StripeCheckout;