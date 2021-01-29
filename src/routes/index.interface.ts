import { ComponentClass, FunctionComponent } from 'react'
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'

interface RoutesProps {
    name: string
    options: StackHeaderOptions
    component: ComponentClass | FunctionComponent
}

export type { RoutesProps }
