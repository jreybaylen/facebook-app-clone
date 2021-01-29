import { SceneMap } from 'react-native-tab-view'

import { RoutesProps } from './index.interface'

import { HomeScreen } from '@screens/Home'
import { PageScreen } from '@screens/Page'
import { WatchScreen } from '@screens/Watch'
import { SettingScreen } from '@screens/Setting'
import { NotificationScreen } from '@screens/Notification'

const renderScene = SceneMap({
    home: HomeScreen,
    watch: WatchScreen,
    page: PageScreen,
    notification: NotificationScreen,
    setting: SettingScreen
})

const routesConfig: Array<RoutesProps> = [
    { key: 'home', title: 'Home' },
    { key: 'watch', title: 'Watch' },
    { key: 'page', title: 'Page' },
    { key: 'notification', title: 'Notification' },
    { key: 'setting', title: 'Setting' }
]

export { renderScene, routesConfig }
