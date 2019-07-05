import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native'
// import Loader from './Loader'


// this screen still has a lot of work


class ForgetPassword extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}> {"please enter your email"}</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"#ddd"}
                    placeholder={"Email..."}
                // value={password}
                // onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity
                    // onPress={() => logUserin(email, password)}
                    style={styles.button}
                >
                    <Text style={styles.login}>{"submit"}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1306C',
    },
    message: {
        color: '#ddd',
        fontSize: 33,
        margin: 10
    },
    logo: {
        width: width * 0.85,
        height: height * 0.15,
        margin: 20
    },
    input: {
        borderRadius: 5,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        height: 50,
        width: width * 0.9,
        borderWidth: 1,
        justifyContent: "center",
        fontSize: 16,
        backgroundColor: 'rgba(221, 221, 221, 0.1)',
        margin: 1
    },
    button: {
        borderRadius: 5,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        height: 50,
        width: width * 0.9,
        borderWidth: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(225, 48, 108, 0.22)',
        margin: 10
    },
    login: {
        alignSelf: 'center',
        color: '#ddd',
        fontSize: 18,
        fontWeight: '600'

    }
});


export { ForgetPassword };
