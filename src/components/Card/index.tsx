import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './index.style'
import { PartialCardProps } from './index.interface'

import { Dot } from '@components/Dot'
import { Icon } from '@components/Icons'
import { ImagePlaceholder } from '@components/ImagePlaceholder'

function Card (props: PartialCardProps): JSX.Element {
    const { photo, name, caption, ...rest } = props
    const cardElement = (
        <View style={ styles.card }>
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
                <TouchableOpacity style={ styles.cardHeaderOption }>
                    <Dot distance={ 1.3 } dimension={ 5.5 } size={ 3 } />
                </TouchableOpacity>
            </View>
            <View style={ styles.cardBody }>
                <Text numberOfLines={ 6 } style={ styles.cardBodyContent }>
                    { caption }
                </Text>
                { rest.thumbnail && (
                    <View style={ styles.cardBodyThumbnail }>
                        { rest.thumbnail }
                    </View>
                ) }
            </View>
        </View>
    )

    return cardElement
}

export { Card }
