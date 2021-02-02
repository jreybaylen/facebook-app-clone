import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './index.style'
import { CardHeaderProps } from './index.interface'

import { Dot } from '@components/Dot'
import { Icon } from '@components/Icons'
import { ImagePlaceholder } from '@components/ImagePlaceholder'

function CardHeader (props: CardHeaderProps): JSX.Element {
    const { photo, name, options } = props
    const cardHeaderElement = (
        <View style={ styles.cardHeader }>
            <View style={ styles.cardHeaderPhoto }>
                { photo || <ImagePlaceholder /> }
            </View>
            <View>
                <Text style={ styles.cardHeaderName }>{ name }</Text>
                <View style={ styles.cardHeaderTimeStamp }>
                    <Text style={ styles.time }>1h</Text>
                    <Dot size={ 1 } />
                    <Icon name="earth" width={ 15 } height={ 15 } />
                </View>
            </View>
            { options }
        </View>
    )

    return cardHeaderElement
}

export { CardHeader }
