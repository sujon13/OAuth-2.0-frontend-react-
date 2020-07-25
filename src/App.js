import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
    const login = async () => {
        const config = {
            url: 'http://127.0.0.1:4000/api/v1/oauth/login'
        };
        try {
            const permissionPage = await Axios.request(config);
            console.log(permissionPage.data);
        } catch (error) {
            console.log('Error!');
            console.log(error);
        }
    };
    return (
        <div className="App">
            <a href="https://github.com/login/oauth/authorize?client_id=7d95f74c54996b80ce9b&redirect_uri=http://127.0.0.1:4000/api/v1/oauth/redirect&scope=user">
                click here to get your github profile
            </a>
        </div>
    );
};

export default App;
