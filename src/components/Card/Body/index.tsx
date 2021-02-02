import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './index.style'
import { CardBodyProps } from './index.interface'

function CardBody (props: CardBodyProps): JSX.Element {
    const { caption, thumbnail } = props
    const cardBodyElement = (
        <View style={ styles.cardBody }>
            { caption && (
                <Text numberOfLines={ 6 } style={ styles.cardBodyContent }>
                    { caption }
                </Text>
            ) }
            { thumbnail && (
                <View style={ styles.cardBodyThumbnail }>
                    { thumbnail }
                </View>
            ) }
        </View>
    )

    return cardBodyElement
}

export { CardBody }
