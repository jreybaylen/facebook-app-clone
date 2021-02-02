import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    card: {
        paddingTop: 15,
        marginBottom: 15,
        borderTopWidth: 1,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    cardHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    cardHeaderPhoto: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderWidth: 0.5,
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: '#ccc',
        backgroundColor: '#c1c7d0'
    },
    cardHeaderName: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold'
    },
    cardHeaderTimeStamp: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    time: {
        color: '#65676b'
    },
    cardHeaderOption: {
        top: -13,
        marginLeft: 'auto',
        position: 'relative'
    },
    cardBody: {
        marginTop: 5
    },
    cardBodyContent: {
        lineHeight: 20,
        marginBottom: 10
    },
    cardBodyThumbnail: {
        height: 200,
        marginBottom: 15
    }
})

export { styles }
