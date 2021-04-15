# Project Auth

This week's project is to build an API with authentication to implement a registration flow, and a frontend with forms to register, sign in, and view some content once you're logged in through a login portal. 

## The problem

The project is built on a backend API, and a React frontend. We created a `User` model using mongoose, with properties for a registered user, and to store a user's access token.
On the frontend side we built up a registration form that POSTs to the API. We stored the access token we got back in the browser using local storage, and then used that token when making other requests to the API.

In the frontend we also added error messages for when login did not succeed as well as a lottie animation for successful logins. 

## Learning objectives 🧠

- How to build a registration flow
- How to handle authentication, both in the frontend and in the backend
- How to build a frontend and backend at the same time

## View it live

https://agnes-emma-login.netlify.app/

