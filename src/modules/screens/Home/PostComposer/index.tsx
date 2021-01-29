import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { styles } from './index.style'

import { Icon } from '@components/Icons'

function PostComposer () {
    const postComposerElement = (
        <View style={ styles.container }>
            <View style={ styles.createPost }>
                <View style={ styles.author }>
                    <Icon name="user" width={ 40 } height={ 40 } />
                </View>
                <TouchableOpacity style={ styles.composer }>
                    <Text style={ styles.composerPlaceholder }>What's on your mind?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    return postComposerElement
}

export { PostComposer }
