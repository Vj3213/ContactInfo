import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    imageAndNameCont: {
        alignItems: 'center',
        paddingTop: 16
    },
    photo: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    name: {
        marginTop: 16,
        fontSize: 32,
        fontWeight: '500'
    },
    detailsCont: {
        marginHorizontal: 24,
        marginBottom: 32,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        elevation: 5,
    },
    textAndIconCont: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center'
    },
    detailsTextStyle: {
        fontSize: 16,
        opacity: 0.5,
        fontWeight: '500',
        marginLeft: 16
    }
})

export default styles;