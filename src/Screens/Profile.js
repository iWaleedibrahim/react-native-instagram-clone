import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { database } from '../config/config'
import Loading from '../animations/Loading'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            name: '',
            username: '',
            avatar: '',
            userId: null
        }
    }

    /*
     * Some Cleanup
     * sloidfy logic
     */



    checkParams = () => {
        var params = this.props.navigation.state.params;
        if (params.userId) {
            this.setState({ userId: params.userId })
        }
        this.fetchUserInfo(params.userId)
    }

    renderNoUser = () => {
        return (
            <View style={styles.container}>
                <Text> {"Please Login to View You Profile"}</Text>
                <Text> {"Don't Have account?"}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text> {"SignUp"}</Text>
                    <TouchableOpacity>
                        <Text> {"Here"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    fetchUserInfo = (userId) => {
        var that = this
        database.ref('users').child(userId).child('username').once('value')
            .then(function (snapshot) {
                const exists = (snapshot.val() !== null)
                if (exists) data = snapshot.val();
                that.setState({ username: data })
            }).catch(e => console.log(e))

        database.ref('users').child(userId).child('name').once('value')
            .then(function (snapshot) {
                const exists = (snapshot.val() !== null)
                if (exists) data = snapshot.val();
                that.setState({ name: data })
            }).catch(e => console.log(e))

        database.ref('users').child(userId).child('avatar').once('value')
            .then(function (snapshot) {
                const exists = (snapshot.val() !== null)
                if (exists) data = snapshot.val();
                that.setState({ avatar: data, loaded: true })
            }).catch(e => console.log(e))
    }

    // componentDidMount() {
    //     this.checkParams()
    // }

    componentDidMount() {
        this.checkParams()
    }


    render() {
        return (
            <View style={{ flex: 1, padding: 5 }}>
                {this.state.loaded == false ?
                    (
                        <Loading />
                    )
                    : (
                        // loggedin
                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingVertical: 10, marginTop: 20 }}>
                                <Image
                                    source={{ uri: this.state.avatar }}
                                    style={{ marginLeft: 10, width: 100, height: 100, borderRadius: 50 }}
                                />
                                <View style={{ marginRight: 10 }}>
                                    <Text>{this.state.name}</Text>
                                    <Text>{this.state.username}</Text>
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
                    )
                }
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
