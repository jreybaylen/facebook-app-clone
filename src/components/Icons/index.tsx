import React from 'react'

import { IconSVG } from './index.interface'

import { HomeSVG } from './Home'
import { FlagSVG } from './Flag'
import { PlaySVG } from './Play'
import { BellSVG } from './Bell'
import { MenuSVG } from './Menu'
import { UserSVG } from './User'
import { SearchSVG } from './Search'
import { MessageSVG } from './Message'
import { FacebookSVG } from './Facebook'

function Icon (props: IconSVG): JSX.Element | null {
    const { name, ...rest } = props

    switch (name) {
        case 'search':
            return <SearchSVG { ...rest } />
        case 'chat':
            return <MessageSVG { ...rest } />
        case 'user':
            return <UserSVG { ...rest } />
        case 'facebook':
            return <FacebookSVG { ...rest } />
        case 'home':
            return <HomeSVG { ...rest } />
        case 'menu':
        case 'setting':
            return <MenuSVG { ...rest } />
        case 'page':
        case 'flag':
            return <FlagSVG { ...rest } />
        case 'watch':
        case 'play':
            return <PlaySVG { ...rest } />
        case 'bell':
        case 'notification':
            return <BellSVG { ...rest } />
        default:
            return null
    }
}

export { Icon }
