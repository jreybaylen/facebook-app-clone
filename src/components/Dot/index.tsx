import React from 'react'
import { View } from 'react-native'

import { styles } from './index.style'
import { DotProps } from './index.interface'

const { dot: { width, height, marginHorizontal } } = styles

function Dot (props: DotProps): JSX.Element {
    const { size, distance, dimension } = props
    const modifiedStyles = {
        ...styles.dot,
        width: dimension || width,
        height: dimension || height,
        marginHorizontal: distance || marginHorizontal
    }
    const dotElement = (
        <View style={ styles.container }>
            { Array(size).fill(1).map(
                (count: number, index: number) => (
                    <View key={ `dot-${ index }` } style={ modifiedStyles } />
                )
            ) }
        </View>
    )

    return dotElement
}

export { Dot }
