
import { createStackNavigator } from 'react-navigation'
import Login from "../Login";
import ForgetPassword from '../ForgetPassword'
import Register from '../Register'



const Auth = createStackNavigator({
    Login: { screen: Login },
    ForgetPassword: { screen: ForgetPassword },
    Register: { screen: Register }
}, {
        initialRouteName: 'Login',
        headerMode: 'none'
    })

export default Auth
