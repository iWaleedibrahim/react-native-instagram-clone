

import { createStackNavigator } from 'react-navigation'
import { Register, ForgetPassword, Login } from '../Screens'


const Auth = createStackNavigator({
    Login: { screen: Login },
    ForgetPassword: { screen: ForgetPassword },
    Register: { screen: Register }
}, {
        initialRouteName: 'Login',
        headerMode: 'none'
    })

export default Auth

