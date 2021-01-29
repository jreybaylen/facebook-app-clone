interface SVGProps {
    width: number
    height: number
    active?: boolean
}

interface IconSVG extends Partial<SVGProps> {
    name: 'facebook' | 'home' | 'flag' | 'page' | 'watch' | 'play' | 'notification' | 'bell' | 'menu' | 'setting' | 'user' | 'chat' | 'search'
}

export type { SVGProps, IconSVG }
