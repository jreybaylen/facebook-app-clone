interface PartialProps {
    distance: number
    dimension: number
}

interface DotProps extends Partial<PartialProps> {
    size: number
}

export type { DotProps }
