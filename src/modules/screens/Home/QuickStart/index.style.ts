import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    quickChatContainer: {
        marginBottom: 15,
        borderTopWidth: 0.5,
        flexDirection: 'row',
        borderColor: '#65676b',
        backgroundColor: '#fff'
    },
    quickChatButton: {
        flex: 1,
        paddingVertical: 12
    },
    quickChatLabel: {
        fontSize: 14,
        color: '#65676b',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRightWidth: 1,
        borderRightColor: '#ccc'
    },
    quickChatRoom: {
        fontSize: 14,
        color: '#65676b',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export { styles }
