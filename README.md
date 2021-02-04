# Using the mParticle Events API in a React App
This demo shows how to send a `ViewProduct` and `PageView` objects from a React application to the mParticle dashboard. 

In this sample, a `ViewProduct` function in `analytics.js` is passed through multiple UI components, where it is called as an `onClick` event, collects a product details object, and sends the details of viewed products to the mParticle dashboard. `PageView` events are collected via the `useHistory` hook and React Router. 
![](screen_capture_demo.gif)

## Get started
To connect this app to mParticle, add your mPartice ID to the script tag in index.html. After cloning this repo, run `npm start` to run the app on localhost:3000. Open your mParticle dashboard alongside the app running locally. Click product images to send the associated product details object to mParticle. 

