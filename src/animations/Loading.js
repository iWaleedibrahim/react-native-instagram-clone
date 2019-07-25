import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class Loading extends React.Component {

    /*
     * implement loading stopping.
     */
    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <View style={styles.animationContainer}>
                <Lottie
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 400,
                        height: 400,
                    }}

                    source={require('../../assets/loading.json')}
                />
                <Text style={{ fontSize: 30, color: '#544334' }}>
                    {"Loading..."}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});
