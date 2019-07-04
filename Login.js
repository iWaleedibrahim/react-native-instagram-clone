import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { PlainInput } from './components/InputField'

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PlainInput
                    placeHolder={"Email..."}
                // placeHolderTextColor={"black"}
                />
                <PlainInput
                    secureTextEntry
                    placeHolder={"Password..."}
                />
                <Button title="Log in" onPress={() => console.log("Pressed")} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    }
});


export default Login;
