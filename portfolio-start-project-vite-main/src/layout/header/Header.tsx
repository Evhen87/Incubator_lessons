import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SocialMedia} from "../../components/social_media/SocialMedia.tsx";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} >
                    <Logo />
                    <FlexWrapper align={"center"}>
                        <Menu menuItems={items} />
                        <SocialMedia />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #984646;    
`

