import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user } from '../reducers/user';
import { Heading, Text, UserForm, FormLabel, FormInput, Button } from 'styling/styling';
import { Profile } from './Profile.js';

const SIGNUP_URL = 'https://agnes-emma-login.herokuapp.com/users';

export const SignUpForm = () => {
    const accessToken = useSelector((store) => store.user.login.accessToken);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSuccess = (loginResponse) => {
        dispatch(
            user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
        );
        dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
        dispatch(user.actions.setStatusMessage({ statusMessage: 'Signup Success' }));
        dispatch(user.actions.toggledLoggedState(true)); 
    };

    const handleLoginFailed = (err) => {
        dispatch(user.actions.setAccessToken({ accessToken: null }));
        dispatch(user.actions.setStatusMessage({ statusMessage: 'Failed to signup' })); // previous loginError
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
    };

    const handleSignup = (event) => {
        event.preventDefault();

        fetch(SIGNUP_URL, {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error ('Signup failed.');
                }
                return res.json();
            })
            .then((json) => handleLoginSuccess(json))
            .catch((err) => handleLoginFailed(err))
    };

    if (!accessToken) {

        return (
            <UserForm>
                <Text>Don't have an account?</Text>
                <Heading> SIGN UP </Heading>

                <FormLabel>
                    USERNAME
                    <FormInput
                        type="text"
                        id="name"
                        placeholder="Choose a username"
                        required
                        value={name}
                        onChange={(event => setName(event.target.value))}
                    />
                </FormLabel>

                <FormLabel>
                    PASSWORD
                    <FormInput
                        type="password"
                        id="password"
                        placeholder="Choose a password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </FormLabel>
                <Button type="submit" onClick={handleSignup}>SUBMIT</Button>
            </UserForm>
        );
    } else {
        return <Profile />
    };
};
