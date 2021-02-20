import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { styles } from './index.style'
import { CardActionProps, CardActionsProps } from'./index.interface'

function Actions(props: CardActionsProps): JSX.Element {
    const defaulHandler = () => { }
    const actionElement = (
        <View style={ styles.container }>
            { (props.actions || []).map(
                (action: CardActionProps, index: number): JSX.Element => (
                    <TouchableOpacity
                        style={ styles.action }
                        key={ `action-${ index }` }
                        onPress={ action.handler || defaulHandler }
                    >
                        <Text>{ action.label }</Text>
                    </TouchableOpacity>
                )
            ) }
        </View>
    )

    return actionElement
}

export { Actions }
