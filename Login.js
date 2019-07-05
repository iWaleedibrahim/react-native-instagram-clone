
import React, { Component } from 'react'
import Loader from './Loader'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
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
            password: '',
            loading: false
        }
    }

    componentDidMount() {
        console.disableYellowBox = false
    }

    render() {
        const { email, password } = this.state
        return (
            <View style={styles.container}>
                <Loader
                    loading={this.state.loading} />
                <Image
                    style={styles.logo}
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
                    onPress={() => logUserin(email, password)}
                    style={styles.button}
                >
                    <Text style={styles.login}>{"Login"}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>
                        {"Forgot you login Details? Get Help Signing in"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.fblogin}
                    onPress={() => loginWithFacebook()}
                    loading={this.state.loading}
                >
                    <Image
                        source={require('./assets/fblogin.png')}
                    />
                </TouchableOpacity>
            </View >
        )
    }
}


const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1306C',
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

    },
    forgetPassword: {
        color: '#ddd',
        fontSize: 12,
        margin: 10
    },
    fblogin: {
        width: 300,
        height: 46,
        margin: 20
    }
});


export default Login;
