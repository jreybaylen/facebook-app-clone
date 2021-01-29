import { SceneRendererProps, NavigationState } from 'react-native-tab-view'

interface RoutesProps {
    key: string
    title: string
}

interface TabBarProps extends SceneRendererProps {
    navigationState: NavigationState<RoutesProps> 
}

export type { RoutesProps, TabBarProps }
