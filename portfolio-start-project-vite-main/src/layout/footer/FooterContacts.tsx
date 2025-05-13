import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const FooterContacts = () => {
    return (
        <StyledFooterContacts>
            <PhoneNumber>+375 29 728 14 62</PhoneNumber>
            <Email>kushner.aleks@yandex.ru</Email>
        </StyledFooterContacts>
    );
};

const StyledFooterContacts = styled.div`
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 63px;
    row-gap: 20px;
    font-family: "DM Sans", sans-serif;
    justify-content: center;
    @media ${theme.media.tablet} {
        margin-left: 0;
    }
`

const PhoneNumber = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
`
const Email = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
`