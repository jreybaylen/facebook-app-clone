import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
    }
})

export { styles }
