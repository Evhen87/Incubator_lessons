import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {FooterLogo} from "../../components/logo/FooterLogo.tsx";
import {FooterContacts} from "./FooterContacts.tsx";
import {SocialMedia} from "../../components/social_media/SocialMedia.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import { TextGradient } from "../../components/TextGradient.tsx";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTop>
                    <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"} rowGap={"20px"}>
                        <FooterLogo />
                        <FlexWrapper wrap={"wrap"} columnGap={"83px"} rowGap={"20px"}>
                            <FooterContacts />
                            <SocialMedia />
                        </FlexWrapper>
                    </FlexWrapper>
                </FooterTop>
                <FooterBottom>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Menu menuItems={items}/>
                        <StyledFooterText>Designed and built by <TextGradient>Yauheny Kushner</TextGradient> with <TextGradient>Love</TextGradient> & <TextGradient>Coffee</TextGradient></StyledFooterText>
                    </FlexWrapper>
                </FooterBottom>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 60px 0;
    background-color: ${theme.colors.primaryBg};
`
const StyledFooterText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    text-align: center;
    color: ${theme.colors.font3};
`
const FooterTop = styled.div`
    padding-bottom: 42px;
    border-bottom: 2px solid #42446E;
`
const FooterBottom = styled.div`
    padding: 45px 0 60px 0;
`