import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

import { styles } from './index.style'

import { MyDay } from './MyDay'
import { NewsFeed } from './NewsFeed'
import { Icon } from '@components/Icons'
import { QuickStart } from './QuickStart'
import { PostComposer } from './PostComposer'

function HomeScreen (): JSX.Element {
    const navigation = useNavigation()

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={ styles.headerRight }>
                    <TouchableOpacity style={ styles.headerRightButton }>
                        <Icon name="search" width={ 22 } height={ 20 } />
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.headerRightButton }>
                        <Icon name="chat" width={ 22 } height={ 22 } />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    const homeScreenElement = (
        <ScrollView style={ styles.scrollView } showsVerticalScrollIndicator={ false }>
            <PostComposer />
            <QuickStart />
            <MyDay />
            <NewsFeed />
        </ScrollView>
    )

    return homeScreenElement
}

export { HomeScreen }
