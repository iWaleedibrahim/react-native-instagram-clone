
import { Dimensions, StyleSheet } from 'react-native'


export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;

const fieldWidth = (width - 10);
const fieldheight = (height / 8) - 50;
const buttonWidth = (width - 150);
const buttonheight = (height / 8) - 50;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 10
    },
    field: {
        width: fieldWidth,
        height: fieldheight,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 20,
        padding: 15,
        margin: 2
    },
    button: {
        height: buttonheight,
        width: buttonWidth
    }
});
