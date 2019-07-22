import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Comments extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text styles={styles.text}>
                    {"Comments here..."}
                </Text>
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


export { Comments };
