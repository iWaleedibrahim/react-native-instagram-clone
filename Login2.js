import React, { Component } from 'react'
import { View, Button, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'
// import { styles } from './SharedStyle'
import PlainInput from './InputField/index'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            modalVisible: false,
            selectedLanguage: null
        }
    }

    instaLogin = () => {
        console.log("Login Pressed!")
    }

    render() {
        // return (
        //     <View style={styles.container}>
        //         <TextInput
        //             style={styles.field}
        //             value={this.state.email}
        //             onChangeText={(text) => this.setState({ email: text })}
        //             placeholder={"Email..."}
        //         />
        //         <TextInput
        //             style={styles.field}
        //             value={this.state.password}
        //             onChangeText={(text) => this.setState({ password: text })}
        //             secureTextEntry
        //             placeholder={"Password..."}
        //         />
        //         <Button
        //             title={"Login"}
        //             style={styles.button}

        //         />
        //     </View>
        // )

        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity
                    style={{ alignItems: "center", paddingTop: 20 }}
                // onPress={() => this.setState({ modalVisible: true })}
                >
                    <Text>{this.state.selectedLanguage}</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.titleText}>{"Instagram"}</Text>

                    <View style={styles.inputWrapper}>
                        <PlainInput placeholder="Phone number, email address or username" />
                    </View>

                    <View style={styles.inputWrapper}>
                        <PlainInput placeholder="Password" secureTextEntry />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Button title="Log in" onPress={() => this.instaLogin()} />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 12, color: "gray", /*fontFamily: "Roboto"*/ }}>
                            Forgotten your login details?{" "}
                            <Text style={{ color: "#000" }}>Get help with signing in.</Text>
                        </Text>
                    </View>

                    <View style={[styles.inputWrapper, styles.textWrapper]}>
                        <View style={styles.line} />
                        <Text style={styles.textStyle}>{"OR"}</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Button
                            title="Log in as"
                            onPress={() => console.log("Navigate")/*this.props.navigation.navigate("AppStack")*/}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.footerContainer}
                    onPress={() => console.log("Navigate") /*this.props.navigation.navigate("SignUpScreen")*/}
                >
                    <Text style={{ color: "gray", /*fontFamily: "Roboto"*/ }}>
                        {" Don't have an account?"}
                        <Text style={{ color: "#000" }}>
                            {" Sign up."}
                        </Text>
                    </Text>
                </TouchableOpacity>
                {/* <LanguagePopUp
                    visible={this.state.modalVisible}
                    language={dataFromChild =>
                        this.setState({ selectedLanguage: dataFromChild })
                    }
                    onRequestClose={dataReceived =>
                        this.setState({
                            modalVisible: false,
                            selectLanguageId: dataReceived
                        })
                    }
                /> */}
            </View >
        )
    }
}


const { width } = Dimensions.get("window");


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        // fontFamily: "lobster_regular",
        fontSize: 56
    },
    inputWrapper: {
        marginTop: 20
    },
    textWrapper: {
        width: width * 0.9,
        alignItems: "center",
        position: "relative"
    },
    textStyle: {
        fontSize: 16,
        textAlign: "center",
        backgroundColor: "white",
        paddingHorizontal: 8,
        // fontFamily: "Roboto",
        color: "gray"
    },
    footerContainer: {
        borderTopWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        paddingVertical: 18
    }
})
