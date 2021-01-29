import React from 'react'
import { SvgXml } from 'react-native-svg'

import { SVGProps } from './index.interface'

function MenuSVG (props: Partial<SVGProps>) {
    const { width = "100%", height = "100%", active } = props
    const activeColor = active ? '#1877f2' : '#65676b'
    const xml = `
        <svg fill=${ activeColor } viewBox="0 0 28 28">
            ${ active
                ? '<path d="M25 4a1.0 1.0 0 110 2h-23a1.0 1.0 0 110-2h19zm0 18a1.0 1.0 0 110 2h-23a1.0 1.0 0 110-2h19zm0-9a1.0 1.0 0 110 2h-23a1.0 1.0 0 110-2h19z"></path>'
                : '<path d="M25 4a1.0 1.0 0 110 2h-23a1.0 1.0 0 110-2h19zm0 18a1.0 1.0 0 110 2h-23a1.0 1.0 0 110-2h19zm0-9a1.0 1.0 0 110 2h-23a1.0 1.0 0 110-2h19z"></path>' }
        </svg>
    `
    const menuSVGElement = (
        <SvgXml xml={ xml } width={ width } height={ height } />
    )

    return menuSVGElement
}

export { MenuSVG }
