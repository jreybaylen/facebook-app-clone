import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { styles } from './index.style'

import { ImagePlaceholder } from '@components/ImagePlaceholder'

function MyDay () {
    const myDayElement = (
        <ScrollView style={ styles.myDay } showsHorizontalScrollIndicator={ false } horizontal>
            <View style={ styles.myDayItem }>
                <ImagePlaceholder />
            </View>
            <View style={ styles.myDayItem }>
                <ImagePlaceholder />
            </View>
            <View style={ styles.myDayItem }>
                <ImagePlaceholder />
            </View>
            <View style={ styles.myDayItem }>
                <ImagePlaceholder />
            </View>
            <View style={ styles.myDayItem }>
                <ImagePlaceholder />
            </View>
        </ScrollView>
    )

    return myDayElement
}

export { MyDay }
