import { guestOptions } from './index.config'
import { RoutesProps } from './index.interface'

import { AccountScreen } from '@modules/screens/Account'

const routes: Array<RoutesProps> = [
    {
        name: 'Guest',
        options: guestOptions,
        component: AccountScreen
    }
]

export { routes }
