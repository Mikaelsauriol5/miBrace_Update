import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,

    },

    button: {
        backgroundColor: 'transparent',
        height: 40,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems:'center',
    },

    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 12,
        textTransform: 'uppercase',
    }
});

export default styles;