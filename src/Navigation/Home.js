

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Feed, Profile, Upload } from '../Screens'


const Home = createBottomTabNavigator({
    Feed: { screen: Feed },
    Profile: { screen: Profile },
    Upload: { screen: Upload }
},
    {
        initialRouteName: 'Feed'
    }
)

export default Home;
