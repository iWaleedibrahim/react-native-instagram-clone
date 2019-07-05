
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native'
import {
    loginWithFacebook,
    logUserOut,
    logUserin,
    registerUser,
    checkUserLogin
} from './Auth'



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        console.disableYellowBox = false
    }

    render() {
        const { email, password } = this.state
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: width - 50, height: 100, margin: 20 }}
                    source={require('./assets/insta.png')} />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"#ddd"}
                    placeholder={"Email..."}
                    value={email}
                    onChangeText={(email) => this.setState({ email })}
                />

                <TextInput
                    style={styles.input}
                    placeholderTextColor={"#ddd"}
                    placeholder={"Password..."}
                    value={password}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity
                    onPress={() => registerUser(email, password)}
                    style={styles.button}
                >
                    <Text style={styles.login}>{"Login"}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text
                        style={{ color: '#ddd', fontSize: 12, margin: 10 }}
                    >
                        {"Forgot you login Details? Get Help Signing in"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => loginWithFacebook()}
                    style={{ width: 300, height: 46, margin: 20 }}
                >
                    <Image
                        source={require('./assets/fblogin.png')}
                    />
                </TouchableOpacity>
            </View >
        )
    }
}


const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1306C',
    },
    input: {
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 50,
        width: width * 0.9,
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        backgroundColor: "#cd486b",
        fontSize: 16,
        margin: 2
    },
    button: {
        borderRadius: 5,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        height: 50,
        width: width * 0.9,
        borderWidth: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        fontSize: 16,
        margin: 10
    },
    login: {
        alignSelf: 'center',
        color: '#fff'
    }
});


export default Login;
