


import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Welcome } from '../Screens'
import Root from './Root'
import Entry from '../animations/Entry'
import Loading from '../animations/Loading'



const Startup = createSwitchNavigator({
    Root: { screen: Root },
    Welcome: { screen: Welcome },
}, {
        initialRouteName: 'Welcome',
        headerMode: 'none'
    })

export default createAppContainer(Startup)
