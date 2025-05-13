import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <Logo />
                    <HeaderMenu />
                    <MobileMenu />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 40px 0;
    background-color: rgba(25,25,25,0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
`
