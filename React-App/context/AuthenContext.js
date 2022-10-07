import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useState } from 'react';
import axios from 'axios';
import { BASE_URL_SERVER } from '../config/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(false);

    const register = (username, email, password) => {
        setLoading(true)

        axios.post(`${BASE_URL_SERVER}/api/v1/accounts/register`, {
            username,
            email,
            password
        })
            .then((res) => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setLoading(false);
                console.log(userInfo)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }


    const login = (username, password) => {
        setLoading(true);
        axios.post(`${BASE_URL_SERVER}/api/va/accounts/login`, {
            username,
            password
        })
            .then((res) => {
                let userInfo = res.data;
                console.log(userInfo);
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setLoading(false);
            })
            .catch(e => {
                console.log(`login error ${e}`);
                setLoading(false);
            });
    }
    const logout = () => {
        setLoading(true);
        AsyncStorage.removeItem('userInfo');

    };

    return (
      <AuthContext.Provider
        value={{
            loading,
            userInfo,
            register,
            login,
            logout
        }}
      >
        {children}
      </AuthContext.Provider>
    )
}

export default AuthProvider;

const styles = StyleSheet.create({})