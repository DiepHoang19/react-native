import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';



const Login = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>Login</Text>
            </View>
            <Image
                style={styles.logo}
                source={require('../../image/login.png')}
            />
            <View style={styles.input}>

                <TextInput placeholder='Email'
                    style={{
                        width: 297,
                        height: 57,
                        left: 36,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 50,
                        padding: 15,
                        marginTop: 200
                    }}
                />
                <TextInput placeholder='Password'
                    style={{
                        width: 297,
                        height: 57,
                        left: 36,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 50,
                        padding: 15,
                        marginTop: 20

                    }}
                />
            </View>
            <View style={styles.button}>
                <Button title='login' />
            </View>
              
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",

    },
    button: {
        width: 315,
        height: 50,
        left: 29,
        marginTop: 100,
        backgroundColor: "#50C2C9"
    },
    input: {
        marginTop: 50,
    }

})