import React from 'react'
import { SvgXml } from 'react-native-svg'

import { SVGProps } from './index.interface'

function UserSVG (props: Partial<SVGProps>) {
    const { width = "100%", height = "100%" } = props
    const xml = `
        <svg viewBox="0 0 24 24" focusable="false" role="presentation">
            <g fill="#fff" fill-rule="evenodd">
                <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
                <circle cx="12" cy="7" r="4" fill="#fff"></circle>
            </g>
        </svg>
    `
    const userSVGElement = (
        <SvgXml xml={ xml } width={ width } height={ height } />
    )

    return userSVGElement
}

export { UserSVG }
