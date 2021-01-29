import React from 'react'
import { View } from 'react-native'

import { styles } from './index.style'

function NewsFeed () {
    const newsFeedElement = (
        <React.Fragment>
            <View style={ styles.content } />
        </React.Fragment>
    )

    return newsFeedElement
}

export { NewsFeed }
