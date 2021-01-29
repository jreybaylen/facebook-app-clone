import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff'
    },
    createPost: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    author: {
        width: 40,
        height: 40,
        borderWidth: 0.5,
        marginRight: 10,
        borderRadius: 100,
        borderColor: '#ccc',
        backgroundColor: '#c1c7d0'
    },
    composer: {
        flex: 1,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 100,
        paddingHorizontal: 15,
        borderColor: '#65676b',
        justifyContent: 'center'
    },
    composerPlaceholder: {
        fontSize: 17,
        lineHeight: 19
    }
})

export { styles }
