import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DangerZone } from 'expo';
import { Animated, Easing } from 'react-native';

const { Lottie } = DangerZone;


/*
 * Adjusting Timers, strting and ending, adding loop to rainbow.
 */

export default class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progressFriends: new Animated.Value(0),
            progressRainBow: new Animated.Value(0),
        };
    }


    componentDidMount() {
        Animated.timing(this.state.progressFriends, {
            toValue: 1,
            duration: 400,
            easing: Easing.linear,
        }).start();
        Animated.timing(this.state.progressRainBow, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <View style={styles.animationContainer} >
                <Lottie
                    autoplay
                    loop
                    style={{
                        width: 400,
                        height: 400,
                        marginTop: 10
                    }}
                    progress={this.state.progressFriends}
                    source={require('../../assets/friends.json')}
                // OR find more Lottie files @ https://lottiefiles.com/featured
                // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                />
                <Text
                    style={styles.msg}
                > {'Welcome to Instagram'} </Text>
                <Lottie
                    ref={animation => {
                        this.animation = animation;
                    }}
                    loop={true}
                    style={{
                        width: 200,
                        height: 200,
                        marginTop: 10
                    }}
                    progress={this.state.progressRainBow}
                    source={require('../../assets/loadingrainbow.json')}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#3490dc',
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
    msg: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '400'
    }
});
