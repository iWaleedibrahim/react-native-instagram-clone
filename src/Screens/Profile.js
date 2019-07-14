import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text> {"Profile"}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    }
});

export { Profile };
