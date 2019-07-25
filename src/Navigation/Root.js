

import { createAppContainer, createStackNavigator } from 'react-navigation'
import Auth from './Auth'
import Home from './Home'

const Root = createStackNavigator({
    Auth: { screen: Auth },
    Home: { screen: Home }
}, {
        initialRouteName: 'Auth',
        headerMode: 'none',
        mode: 'modal',
    })

export default createAppContainer(Root)

