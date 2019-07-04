
//exports four main methods Regarding Auth: 

//   * registerUser
//   =  makes a new account with Email And Password
//   * loginUser 
//    = Logs user in using Email and Password
//   * logUserOut
//   * loginWithFacebook
//   * checkUserLogin


import { f, auth } from './config/config'
import { validateEmail } from './regex'
import * as Facebook from 'expo-facebook';


/****************************************************************************** */
/****************************************************************************** */
/**************************** Register User *********************************** */
/****************************************************************************** */
/****************************************************************************** */



export const registerUser = (email, password) => {
    console.log(email, password)
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => console.log(email, password, user))
        .catch((error) => console.log("Error ==> ", error))
}



/****************************************************************************** */
/****************************************************************************** */
/***************************** logUserin ************************************** */
/****************************************************************************** */
/****************************************************************************** */


export const logUserin = async (email, password) => {
    // Error Checking
    switch (email, password) {
        case (email === '' && password === ''): {
            alert("please fill in email and password");
        }
        case (email != '' && password === ''): {
            alert('Password Cannot be blank');
        }
        case (email === '' && password != ''): {
            alert('email cannot be blank')
        }
        case (!validateEmail(email)): {
            alert('Bad Email Format')
        }
        default:
            {
                try {
                    let user = await auth.signInWithEmailAndPassword(email, password);
                    console.log(user)
                }
                catch (error) {
                    console.log(error)
                }
            }
    }
}


/****************************************************************************** */
/****************************************************************************** */
/**************************** logUserOut ************************************** */
/****************************************************************************** */
/****************************************************************************** */



export const logUserOut = () => {
    auth.signOut().then(() => console.log("User SignedOut"))
        .catch((error) => console.log("Error =>", error))
}



/****************************************************************************** */
/****************************************************************************** */
/**************************** loginWithFacebook ******************************* */
/****************************************************************************** */
/****************************************************************************** */



export const loginWithFacebook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1048374862028026',
        { permessions: ['email', 'public_Profile'] })
    if (type === 'success') {
        const cred = f.auth.FacebookAuthProvider.credential(token);
        f.auth().signInWithCredential(cred).catch((error) => console.log("Error =>", error))
    }
    this.checkUserLogin();
}


/****************************************************************************** */
/****************************************************************************** */
/**************************** checkUserLogin ********************************** */
/****************************************************************************** */
/****************************************************************************** */


export const checkUserLogin = () => {
    f.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('loggedIn')
            // this.setState({ loggedin: true })
        }
        else {
            console.log('loggedOut')
            // this.setState({ loggedin: false })
        }
    })
}

