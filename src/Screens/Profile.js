import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import { f, auth, database, storage } from '../config/config'
import Header from '../components/header'


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
            <View style={{ flex: 1, padding: 5 }}>
                <Header
                    headerText={"Profile"}
                />
                {this.state.loggedin == true ? (
                    // loggedin
                    <View style={{ flex: 1 }}>
                        {/*
                         * Header
                         */}

                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingVertical: 10, marginTop: 20 }}>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/300' }}
                                style={{ marginLeft: 10, width: 100, height: 100, borderRadius: 50 }}
                            />
                            <View style={{ marginRight: 10 }}>
                                <Text>{"Name"}</Text>
                                <Text>{"@Username"}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 40, paddingVertical: 15, borderRadius: 20, borderColor: 'grey', borderWidth: 1.5 }}>
                                <Text style={{ color: 'grey', textAlign: 'center' }}> {'Logout'} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10, marginHorizontal: 40, paddingVertical: 15, borderRadius: 20, borderColor: 'grey', borderWidth: 1.5 }}>
                                <Text style={{ textAlign: 'center', color: 'grey' }}>{'Edit Profile'} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Upload")}
                                style={{ marginTop: 10, marginHorizontal: 40, paddingVertical: 25, backgroundColor: 'grey', borderRadius: 20, borderColor: 'grey', borderWidth: 1.5 }}>
                                <Text style={{ textAlign: 'center', color: '#fff' }}>{'Upload New +'} </Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={{ borderColor: '#555', borderWidth: 1 }} /> */}
                        <View style={{ backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
                            <Text>{"Loading Photos..."}</Text>
                        </View>
                    </View>
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
