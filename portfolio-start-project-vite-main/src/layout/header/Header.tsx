import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo />
                <Menu menuItems={items}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #984646;
    display: flex;
    justify-content: space-between;
`

