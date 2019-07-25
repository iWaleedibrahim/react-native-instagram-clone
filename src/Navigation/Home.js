
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Feed, Profile, Upload, Comments } from '../Screens'

const Home = createStackNavigator({

    Container: createBottomTabNavigator(
        {
            Feed: { screen: Feed },
            Profile: { screen: Profile },
            Upload: { screen: Upload },
        },
        {
            initialRouteName: 'Feed',
        }
    ),
    Comments: { screen: Comments },
}, {
        navigationOptions: {

        }
    }
)

export default Home;
