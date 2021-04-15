import React from 'react';
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { user } from "./reducers/user";
import { Container } from './styling/styling';
import { SignUpForm } from './components/SignUpForm.js';
import { LoginForm } from './components/LoginForm.js';
import { Status } from './components/Status.js';

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Status />
        <SignUpForm />
        <LoginForm />
      </Container>
    </Provider>
  );
};
