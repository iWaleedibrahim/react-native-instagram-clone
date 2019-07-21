import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { f, auth, database, storage } from '../config/config'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false
        }
    }


    componentDidMount() {
        var that = this
        f.auth().onAuthStateChanged(function (user) {
            if (user) {
                // loggedin
                that.setState({ loggedin: true })
            }
            else {
                // not loggedin
                that.setState({ loggedin: false })
            }
        })
    }


    render() {
        return (
            <View style={styles.container}>
                {this.state.loggedin == true ? (
                    // loggedin
                    <Text> {"IN"} </Text>
                ) :
                    (
                        <View style={styles.container}>
                            <Text> {"OUT"} </Text>
                            <Text> {" \t You Aren't Loggedin"} </Text>
                            <Text> {"Please login to view your profile"} </Text>
                        </View>
                    )}
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
