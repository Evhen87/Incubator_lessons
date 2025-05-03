import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {FooterLogo} from "../../components/logo/FooterLogo.tsx";
import {FooterContacts} from "./FooterContacts.tsx";
import {SocialMedia} from "../../components/social_media/SocialMedia.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import { TextGradient } from "../../components/TextGradient.tsx";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
               <FooterLogo />
                <FooterContacts />
                <SocialMedia />
            </FlexWrapper>
            <FlexWrapper>
                <Menu menuItems={items}/>
                <StyledFooterText>Designed and built by <TextGradient>Yauheny Kushner</TextGradient> with <TextGradient>Love</TextGradient> & <TextGradient>Coffee</TextGradient></StyledFooterText>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #4ba631;
`
const StyledFooterText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    text-align: center;
    color: #a7a7a7;
`