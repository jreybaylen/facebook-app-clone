import { CardActionsProps } from '@components/Card/Actions/index.interface'

interface CardProps extends CardActionsProps {
    name: string
    caption: string
    photo: JSX.Element
    reaction: Array<JSX.Element>
    thumbnail: Array<JSX.Element>
    contentReactions: Array<string>
    emojiReactions: Array<JSX.Element>
}

type PartialCardProps = Partial<CardProps>

export type {
    CardProps,
    PartialCardProps
}
