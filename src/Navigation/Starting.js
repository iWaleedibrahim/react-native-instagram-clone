

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Welcome } from '../Screens'
import Root from './Root'


const Starting = createSwitchNavigator({
    Root: { screen: Root },
    Welcome: { screen: Welcome }
}, {
        initialRouteName: 'Root',
        headerMode: 'none'
    })

export default createAppContainer(Starting)
