import 'react-native-gesture-handler'

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { routes } from '@routes/index'
import { RoutesProps } from '@routes/index.interface'

const Stack = createStackNavigator()

function FacebookApp (): JSX.Element {
    const facebookAppElement = (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                { routes.map(
                    (route: RoutesProps) => (
                        <Stack.Screen key={ route.name } { ...route } />
                    )
                ) }
            </Stack.Navigator>
        </NavigationContainer>
    )

    return facebookAppElement
}

export { FacebookApp }
