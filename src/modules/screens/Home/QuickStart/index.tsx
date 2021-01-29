import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { styles } from './index.style'

function QuickStart () {
    const quickStartElement = (
        <View style={ styles.quickChatContainer }>
            <TouchableOpacity style={ styles.quickChatButton }>
                <Text style={ styles.quickChatLabel }>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.quickChatButton }>
                <Text style={ styles.quickChatLabel }>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.quickChatButton }>
                <Text style={ styles.quickChatRoom }>Room</Text>
            </TouchableOpacity>
        </View>
    )

    return quickStartElement
}

export { QuickStart }
