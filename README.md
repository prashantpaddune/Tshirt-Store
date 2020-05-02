# <img height="35" src="https://img.icons8.com/cotton/50/000000/t-shirt.png" /> Tshirt Store

>  Tshirt store app built with the MERN stack.
>
> It's a Platform where you can add, manage product/categories and sell products with Stripe payment integration in the web application. It can be implemented in other business/stores that registers their products to show and sell them to their customers.

## Quick Start

```bash
# Cloning repository
git clone https://github.com/prashantpaddune/Tshirt-Store
```
##### Front End :
```
# Open directory
cd frontend

# Install dependencies for server
npm install

# Stripe API Configuration in StripeCheckout.js
stripeKey="YourPublishablekey"

# Start server for frontend
npm start
```
##### Back End :
```
# Open directory
cd backend

# Install dependencies for server
npm install

# Stripe API Configuration in stripePayment.js 
const stripe = require('stripe')('YourSecretKey');

# Start server for backend
npm start
```
## Screenshots
<img src="https://github.com/prashantpaddune/Tshirt-Store/blob/master/screenshots/Screenshot%20from%202020-05-02%2016-49-04.png" />
<img src="https://github.com/prashantpaddune/Tshirt-Store/blob/master/screenshots/Screenshot%20from%202020-05-02%2016-21-39.png" />
<img src="https://github.com/prashantpaddune/Tshirt-Store/blob/master/screenshots/Screenshot%20from%202020-05-02%2016-22-07.png" />
<img src="https://github.com/prashantpaddune/Tshirt-Store/blob/master/screenshots/Screenshot%20from%202020-05-02%2016-23-13.png" />
<img src="https://github.com/prashantpaddune/Tshirt-Store/blob/master/screenshots/Screenshot%20from%202020-05-02%2016-23-51.png" />

## License

This project is licensed under the MIT License