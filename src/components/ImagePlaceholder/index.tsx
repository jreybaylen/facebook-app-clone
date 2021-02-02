import React from 'react'
import { Image } from 'react-native'

import { styles } from './index.style'
import placholder from '@assets/images/placeholder.jpg'

function ImagePlaceholder (): JSX.Element {
    const imagePlaceholderElement = (
        <Image
            resizeMode="cover"
            source={ placholder } 
            style={ styles.thumbnail } 
        />
    )

    return imagePlaceholderElement
}

export { ImagePlaceholder }
