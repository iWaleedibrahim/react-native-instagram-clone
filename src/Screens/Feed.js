
import React, { Component } from 'react'
import { FlatList, ScrollView, Image, Text, View, StyleSheet, Dimensions } from 'react-native'
import { f, auth, database, storage } from '../config/config'

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo_feed: [],
            loading: true,
            refresh: false
        }
    }

    componentDidMount = () => {
        this.loadFeed()
    }

    pluralCheck = s => {
        if (s === 1) {
            return 'ago'
        }
        else {
            return 's ago'
        }
    }

    timeConverter = (timestamp) => {
        var a = new Date(timestamp * 1000)
        var seconds = Math.floor((new Date() - a) / 1000);
        var interval = Math.floor(seconds / 31536000)
        if (interval > 1) return interval + ' year' + this.pluralCheck(interval)
        var interval = Math.floor(seconds / 2592000)
        if (interval > 1) return interval + ' month' + this.pluralCheck(interval)
        var interval = Math.floor(seconds / 86400)
        if (interval > 1) return interval + ' day' + this.pluralCheck(interval)
        var interval = Math.floor(seconds / 3600)
        if (interval > 1) return interval + ' hour' + this.pluralCheck(interval)
        var interval = Math.floor(seconds / 60)
        if (interval > 1) return interval + ' minute' + this.pluralCheck(interval)
        return Math.floor(seconds) + ' second' + this.pluralCheck(seconds)
    }

    loadFeed = () => {
        this.setState({ refresh: true, photo_feed: [] });
        var that = this
        database.ref('photos').orderByChild('posted').once('value')
            .then(function (snapshot) {
                const exists = (snapshot.val() !== null);
                if (exists) data = snapshot.val();
                var photo_feed = that.state.photo_feed
                for (var photo in data) {
                    var photoobj = data[photo];
                    database.ref('users').child(photoobj.author).child('username').once('value')
                        .then(function (snapshot) {
                            const exists = (snapshot.val() !== null);
                            if (exists) data = snapshot.val()
                            photo_feed.push({
                                url: photoobj.url,
                                caption: photoobj.caption,
                                posted: that.timeConverter(photoobj.posted),
                                author: data.username
                            })
                            console.log(photoobj.posted)
                            that.state.photo_feed = photo_feed
                            that.setState({
                                refresh: false,
                                loading: false
                            })
                        }).catch(e => console.log("First ERORR: => ", e))
                }
                // console.log(that.state.photo_feed)
                // that.state.photo_feed = photo_feed
            }).catch(e => console.log("Second ERORR: => ", e))
    }

    loadNew = () => {
        this.loadFeed()
    }

    render() {
        const { refresh, photo_feed } = this.state
        return (
            <View style={styles.container}>
                {this.state.loading == true ?
                    <View>
                        <Text> {"Loading..."} </Text>
                    </View> :
                    (
                        <FlatList
                            refreshing={refresh}
                            onRefresh={() => this.loadNew}
                            data={photo_feed}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.list}
                            renderItem={({ item, index }) => {
                                return (
                                    <View key={index} style={styles.item}>
                                        <View style={styles.subItem}>
                                            {/* <Text>{item.posted}</Text> */}
                                            <Text>{item.posted}</Text>
                                            <Text> {item.author} </Text>
                                        </View>
                                        <View style={styles.imageView}>
                                            <Image
                                                source={{ uri: item.url }}
                                                style={styles.image}
                                            />
                                        </View>
                                        <View>
                                            <Text> {item.caption}</Text>
                                            <Text> {"View Comments..."}</Text>
                                        </View>
                                    </View>
                                )

                            }}
                        />
                    )}
            </View >
        )
    }
}

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    item: {
        flex: 1,
        width: width,
        overflow: 'hidden',
        marginBottom: 5,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    subItem: {
        padding: 5,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageView: {
        width: '100%',
        height: height * 0.4
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 275
    },
    list: {
        flex: 1,
        color: '#eee'
    }
});


export { Feed };



