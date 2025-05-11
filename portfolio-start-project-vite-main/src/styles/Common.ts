import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, Fmin, Fmax, lineHeight }: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font2};
    lineHeight: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1250 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`