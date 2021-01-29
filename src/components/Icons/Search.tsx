import React from 'react'
import { SvgXml } from 'react-native-svg'

import { SVGProps } from './index.interface'

function SearchSVG (props: Partial<SVGProps>) {
    const { width = "100%", height = "100%" } = props
    const xml = `
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
            <g fill="none" stroke="#000" strokeWidth="2.5">
                <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
            </g>
        </svg>
    `
    const searchSVGElement = (
        <SvgXml xml={ xml } width={ width } height={ height } />
    )

    return searchSVGElement
}

export { SearchSVG }
