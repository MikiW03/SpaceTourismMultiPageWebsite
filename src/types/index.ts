interface Destination {
    name: string,
    images: {
        png: string,
        webp: string
    },
    description: string,
    distance: string,
    travel: string,
}

interface CrewMember {
    name: string,
    images: {
        png: string,
        webp: string
    },
    role: string,
    bio: string,
}

interface Technology {
    name: string,
    images: {
        portrait: string,
        landscape: string
    },
    description: string
}

interface Data {
    destinations: Array<Destination>,
    crew: Array<CrewMember>,
    technology: Array<Technology>
}

export type {Destination, CrewMember, Technology, Data}