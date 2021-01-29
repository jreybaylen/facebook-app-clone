import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { styles } from './index.style'

function MyDay () {
    const myDayElement = (
        <ScrollView style={ styles.myDay } showsHorizontalScrollIndicator={ false } horizontal>
            <View style={ styles.myDayItem } />
        </ScrollView>
    )

    return myDayElement
}

export { MyDay }
