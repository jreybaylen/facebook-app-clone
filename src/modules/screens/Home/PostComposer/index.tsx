import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { styles } from './index.style'

import { ImagePlaceholder } from '@components/ImagePlaceholder'

function PostComposer () {
    const postComposerElement = (
        <View style={ styles.container }>
            <View style={ styles.createPost }>
                <View style={ styles.author }>
                    <ImagePlaceholder />
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
