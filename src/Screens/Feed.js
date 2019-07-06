import React, { Component } from 'react'
import { FlatList, ScrollView, Image, Text, View, StyleSheet, Dimensions } from 'react-native'
import { f, auth, database, storage } from '../config/config'
class Feed extends Component {

    constructor(props) {
        super(props);
        // var data = [...Array(40).keys()].map((item) => `https://source.unsplash.com/random/${item}`);
        this.state = {
            photoFeed: [],
            loading: true,
            refresh: false
        }
    }

    componentDidMount = () => {
        //    check this out "https://i.pravatar.cc/300"
    }

    loadFeed = () => {
        // 1- reset state
        this.setState({ refresh: true, photoFeed: [] })
        // 2 - semi bind this inside firebase context
        var that = this
        // fetch recent photos first, || get them according to child 'posted'
        database.ref('photos').orderByChild('posted').once('value')
            .then(function (snapshot) {
                const exists = (snapshot.val() != null)
                if (exists)
                    data = snapshot.val()
                var photoFeed = that.state.photoFeed
                for (photo in data) {
                    var photobj = data[photo]
                    database.ref('users').child(photobj.auther).once('value')
                        .then(function (snapshot) {
                            const exists = (snapshot.val() != null)
                            if (exists)
                                data = snapshot.val()
                            photoFeed.push({
                                id: photo,
                                url: photobj.url,
                                caption: photobj.posted,
                                auther: database.username
                            });
                            that.setState({
                                refresh: false,
                                loading: false
                            });
                        }).catch((error) => console.log("Error1 =>", error))
                }
            }).catch((error) => console.log("Error2 =>", error))
    }


    loadNew = () => {
        this.setState({ refresh: true })
        this.setState({ photoFeed: [...Array(40).keys() + 40].map((item) => `https://source.unsplash.com/random/item/${item}`), refresh: false })
    }

    render() {
        const { refresh, photoFeed } = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    refreshing={refresh}
                    onRefresh={() => this.loadNew}
                    data={photoFeed}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.list}
                    renderItem={(item, index) => (
                        <View key={index} style={styles.item}>
                            <View style={styles.subItem}>
                                <Text>{"Time Ago"}</Text>
                                <Text> {"@iWaleed"} </Text>
                            </View>
                            <View style={styles.imageView}>
                                {item.item !== 'undefined' || null ?
                                    <Image
                                        source={{ uri: item.item }}
                                        style={styles.image}
                                    /> : null
                                }
                                {console.log(item.item)}
                            </View>
                            <View>
                                <Text> {"Caption text here..."}</Text>
                                <Text> {"View Comments..."}</Text>
                            </View>
                        </View>
                    )}
                />
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

