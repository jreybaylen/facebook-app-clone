import React from 'react'
import { TouchableOpacity } from 'react-native'

import { styles } from './index.style'

import { Dot } from '@components/Dot'

function CardOptions (): JSX.Element {
    const optionsElement = (
        <TouchableOpacity style={ styles.cardHeaderOption }>
            <Dot distance={ 1.3 } dimension={ 5.5 } size={ 3 } />
        </TouchableOpacity>
    )

    return optionsElement
}

export { CardOptions }
