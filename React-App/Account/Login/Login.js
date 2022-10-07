import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';



const Login = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome Back!</Text>
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
                <Button title='login' color="#50C2C9" />
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
        marginTop: 50,

    },
    input: {
        marginTop: 250,
    },
    logo: {
        position: "absolute",
        width: 147,
        height: 136,
        left: 114,
        top: 250,
    },
    title: {
        position: "absolute",
        width: 323,
        height: 27,
        left: 12,
        top: 201,
        //     font- family: ,
        // font- style: normal,
        // font - weight: 600,
        // font - size: 18,
        // line - height: 27,
        /* identical to box height */

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 27,
        display: "flex",
        color: "#000000",
        alignItems: "center",
        textAlign: "center"
    },


})