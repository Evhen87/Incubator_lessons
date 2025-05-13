import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionTitles = styled.div`
    text-align: center;
    margin-bottom: 110px;
    @media screen and (max-width: 990px) {
        margin-bottom: 60px;
    }
    @media ${theme.media.tablet} {
        margin-bottom: 40px;
    }
    @media ${theme.media.mobile} {
        margin-bottom: 30px;
    }
`

export const SectionTitle = styled.h2`
    ${font({weight: 700, Fmin: 32, Fmax: 48})}
    color: ${theme.colors.font2};
    margin-bottom: 30px;
    @media ${theme.media.mobile} {
        margin-bottom: 15px;
    }
    @media screen and (min-width: 1250px) {
        font-size: 48px;
    }
`

export const SectionText = styled.h2`
    ${font({weight: 400, Fmin: 26, Fmax: 32})}
    color: ${theme.colors.font3};
    @media screen and (min-width: 1250px) {
        font-size: 32px;
    }
`

