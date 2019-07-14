

import { createAppContainer, createStackNavigator } from 'react-navigation'
import Auth from './Auth'
import Home from './Home'


const Root = createStackNavigator({
    Auth: { screen: Auth },
    Home: { screen: Home }
}, {
        initialRouteName: 'Home',
        headerMode: 'none'
    })

export default createAppContainer(Root)

