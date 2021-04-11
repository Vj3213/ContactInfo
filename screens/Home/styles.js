import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    errText: {
        fontSize: 54,
        fontWeight: '500',
        opacity: 0.8,
        marginHorizontal: 40
    },
    buttonCont: {
        borderWidth: 1.5,
        padding: 16,
        paddingHorizontal: 40,
        marginTop: 100
    },
    userContainer: {
        flexDirection: 'row', 
        paddingHorizontal: 10, 
        paddingVertical: 7.5
    },
    userDetailsContainer: {
        flex: 1, 
        flexDirection: 'row-reverse', 
        marginHorizontal: 10, 
        justifyContent: 'space-between'
    },
    photo: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    nameAndNumber: {
        flex: 1, 
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: '600'
    },
    number: {
        fontSize: 12,
        opacity: 0.6
    }
})

export default styles;