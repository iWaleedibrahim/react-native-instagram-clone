import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

class Upload extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text> {"Upload"}</Text>
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

export { Upload };
