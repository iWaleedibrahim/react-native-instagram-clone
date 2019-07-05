

import { createAppContainer, createStackNavigator } from 'react-navigation'
import Auth from './Auth'
import Feed from '../Feed'

const Root = createStackNavigator({
    Auth: { screen: Auth },
    Feed: { screen: Feed }
}, {
        initialRouteName: 'Auth',
        headerMode: 'none'
    })


export default createAppContainer(Root)

