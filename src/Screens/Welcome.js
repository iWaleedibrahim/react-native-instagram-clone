
import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import Entry from '../animations/Entry'
import Swiper from 'react-native-swiper'


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            flag: false,
            uri: ["https://source.unsplash.com/collection/4687444/random1",
                "https://source.unsplash.com/collection/4687444/random2",
                "https://source.unsplash.com/collection/4687444/random3",
                "https://source.unsplash.com/collection/4687444/random3"]
        }
        setTimeout(() => this.setState({ flag: true }), 5000)
    }

    render() {
        const { flag, uri, loading } = this.state
        if (flag === false) {
            return <Entry />
        }
        else {
            return (
                <Swiper style={styles.wrapper} loop={false}>
                    <View style={styles.slide1}>
                        <ImageBackground
                            style={styles.background}
                            source={loading ? require('../../assets/default.jpg') : { uri: uri[0] }}
                        >
                            <Text style={styles.text}>{"Connect With your Friends"}</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.slide2}>
                        <ImageBackground
                            style={styles.background}
                            source={loading ? require('../../assets/default.jpg') : { uri: uri[1] }}
                        >
                            <Text style={styles.text}>{"Share your photos"}</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.slide3}>
                        <ImageBackground
                            style={styles.background}
                            source={loading ? require('../../assets/default.jpg') : { uri: uri[2] }}
                        >
                            <Text style={styles.text}>{" and get in touch with the world"}</Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.slide3}>
                        <ImageBackground
                            style={styles.background}
                            source={loading ? require('../../assets/default.jpg') : { uri: uri[3] }}
                            blurRadius={5}
                        >
                            <Button
                                title={"Start Using instagram Now"}
                                onPress={() => this.props.navigation.navigate("Root")}

                            />
                        </ImageBackground>
                    </View>
                </Swiper >
            )
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#314411',
        fontSize: 30,
        fontWeight: 'bold'
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    enter: {
        width: 70,
        height: 50,
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: '#ddd',
        fontSize: 13
    }
})


export { Welcome }
