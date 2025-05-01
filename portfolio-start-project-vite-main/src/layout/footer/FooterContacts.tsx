import styled from "styled-components";

export const FooterContacts = () => {
    return (
        <StyledFooterContacts>
            <PhoneNumber>+375 29 728 14 62</PhoneNumber>
            <Email>kushner.aleks@yandex.ru</Email>
        </StyledFooterContacts>
    );
};

const StyledFooterContacts = styled.div`
    display: flex;
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