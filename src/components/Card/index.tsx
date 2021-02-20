import React from 'react'
import { View as CardContainer } from 'react-native'

import { styles } from './index.style'
import { PartialCardProps } from './index.interface'

import { CardBody } from './Body'
import { Actions } from './Actions'
import { CardHeader } from './Header'
import { CardOptions } from './Options'

function Card (props: PartialCardProps): JSX.Element {
    const { photo, name, ...rest } = props
    const cardElement = (
        <CardContainer style={ styles.card }>
            <CardHeader
                name={ name }
                photo={ photo }
                options={ <CardOptions /> }
            />
            <CardBody
                caption={ rest.caption }
                thumbnail={ rest.thumbnail }
            />
            <Actions actions={ rest.actions } />
        </CardContainer>
    )

    return cardElement
}

export { Card }
