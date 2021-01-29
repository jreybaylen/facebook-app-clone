import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    initialLayout: {
        width: Dimensions.get('window').width
    },
    tabBar: {
        elevation: 0,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderBottomColor: '#ccc'
    },
    tabBarIndicator: {
        backgroundColor: '#1877F2'
    },
    tabBarItem: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export { styles }
