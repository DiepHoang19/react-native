import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const Register = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome Onboard!</Text>
                <Text style={styles.content}>Let’s help you meet up your tasks.</Text>
            </View>
            <Image
                style={styles.logo}
                source={require('../../image/login.png')}
            />
            <View style={styles.input}>
                <TextInput placeholder='User Name'
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
                <TextInput placeholder='Email'
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
                <Button title='Submit' color="#50C2C9" />
            </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
    },
    button: {
        width: 315,
        height: 50,
        left: 29,
        marginTop: 30,

    },
    input: {
        marginTop: 200,
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
    content: {
        position: "absolute",
        width: 295,
        height: 25,
        left: 37,
        top: 239,
        fontWeight: "400",
        textAlign: "center",
        lineHeight: 18,
        fontStyle: 'normal',
        fontSize: 12,
        color: "#000000",
    },
})