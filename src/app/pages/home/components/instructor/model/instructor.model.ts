export interface Instructor {
    name: string,
    img: string,
    desc: string,
    socialMedia: SocialMedia[]
}

export interface SocialMedia {
    icon: string,
    ref: string
}