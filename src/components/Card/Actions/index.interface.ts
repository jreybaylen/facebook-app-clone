interface ActionProps {
    label: string
    handler(): void
}

interface ActionsProps {
    actions: Array<ActionProps>
}

type CardActionProps = Partial<ActionProps>
type CardActionsProps = Partial<ActionsProps>

export type { CardActionProps, CardActionsProps }
