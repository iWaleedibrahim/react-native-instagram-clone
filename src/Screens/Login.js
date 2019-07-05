
import React, { Component } from 'react'
import Loader from '../components/Loader'
import { f, auth } from '../config/config'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import * as Facebook from 'expo-facebook';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            error: ''
        }
    }


    // registerUser = (email, password) => {
    //     auth.createUserWithEmailAndPassword(email, password)
    //         .then((user) => console.log(email, password, user))
    //         .catch((error) => console.log("Error ==> ", error))
    //     this.setState({ loading: false })
    // }

    logUserin = async (email, password) => {
        this.setState({ loading: true, error: '' })
        try {
            let user = await auth.signInWithEmailAndPassword(email, password)
            this.props.navigation.navigate("Feed");
            console.log(user)
        }

        catch (error) {
            console.log(error)
            this.setState({ error: error })
        }
        this.setState({ loading: false })
    }

    logUserOut = () => {
        auth.signOut().then(() => console.log("User SignedOut"))
            .catch((error) => console.log("Error =>", error))
        this.setState({ loading: false })
    }

    loginWithFacebook = async () => {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            '1048374862028026',
            { permessions: ['email', 'public_Profile'] })
        if (type === 'success') {
            this.props.navigation.navigate("Feed");
            const cred = f.auth.FacebookAuthProvider.credential(token);
            f.auth().signInWithCredential(cred).catch((error) => console.log("Error =>", error))
        }
    }

    checkUserLogin = () => {
        f.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('loggedIn')
                // this.setState({ loggedin: true })
            }
            else {
                console.log('loggedOut')
                // this.setState({ loggedin: false })
            }
        })
    }


    render() {
        const { email, password, error } = this.state
        const { logUserin, loginWithFacebook } = this
        return (
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardDismissMode={'on-drag'}
            >
                <View style={styles.container}>
                    <Loader
                        loading={this.state.loading}
                    />
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
                    {error ? <Text style={styles.error}> {error.message} </Text> : null}
                    <TouchableOpacity
                        onPress={() => logUserin(email, password)}
                        style={styles.button}
                    >
                        <Text style={styles.login}>{"Login"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("ForgetPassword")}
                    >
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
                    <View style={styles.register}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text>
                                {"Don't have account? create account now"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </ScrollView>
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
    scroll: {
        flex: 1,
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
        margin: 10,
    },
    fblogin: {
        width: 300,
        height: 46,
        margin: 20,
    },
    error: {
        fontSize: 12,
        color: '#ddd'
    },
    register: {
        marginTop: height * 0.3,
        color: '#ddd'
    }
});


export { Login };
