import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'

import { styles } from './index.style'
import { renderScene, routesConfig } from './index.config'
import { IconSVG } from '@components/Icons/index.interface'
import { TabBarProps, RoutesProps } from './index.interface'

import { Icon } from '@components/Icons'

function AccountScreen (): JSX.Element {
    const [ icon, setIcon ] = React.useState<string>('home')
    const [ index, setIndex ] = React.useState<number>(0)
    const [ routes ] = React.useState<Array<RoutesProps>>(routesConfig)
    const accountScreenElement = (
        <TabView
            onIndexChange={ setIndex }
            renderScene={ renderScene }
            renderTabBar={ (props: TabBarProps): JSX.Element => (
                <TabBar
                    { ...props }
                    style={ styles.tabBar }
                    indicatorStyle={ styles.tabBarIndicator }
                    renderTabBarItem={ ({ key, route }) => {
                        const activeIcon = icon === route.key
                        const routeKey = route.key as IconSVG['name']
                        const handleTabPress = () => {
                            setIcon(routeKey)
                            props.jumpTo(routeKey)
                        }
                        
                        return (
                            <TouchableOpacity key={ key } onPress={ handleTabPress } style={ styles.tabBarItem }>
                                <Icon active={ activeIcon } name={ routeKey } width={ 30 } height={ 30 } />
                            </TouchableOpacity>
                        )
                    } }
                />
            ) }
            navigationState={{ index, routes }}
            initialLayout={ styles.initialLayout }
        />
    )

    return accountScreenElement
}

export { AccountScreen }
