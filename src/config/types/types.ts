export type Colors = {
    primaryYellow: string,
    primaryDarkBlue: string,
    primaryWhite: string,
    title: string,
    text: string,
    gradient: string,
    black: string,
    white: string,
    subtitleLightBg: string,
    subtitleDarkBg: string,
}

export type ServicesCardType = {
    icon: React.ReactNode,
    title: string,
    description: string,
}

export type SubtitleType = {
    text: string,
    bgColor: string,
    textColor: string,
}

export type TitleType = {
    text: string,
    width?: string
    textColor: string,
    fontSize: string,
    fontWeight: string,
}

export type TransportationCardType = {
    title: string,
    desc: string, 
    image: string,
}

export type FeedbackCardType = {
    title: string,
    company: string,
    image: string,
    feedback: string,
    rating: number,
    bgColor: string,
    textColor: string,
    feedbackTextColor: string,
}

export type RatingType = {
    stars: number,
}