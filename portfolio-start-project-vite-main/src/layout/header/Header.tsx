import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #191919;
    display: flex;
    justify-content: space-between;
`

