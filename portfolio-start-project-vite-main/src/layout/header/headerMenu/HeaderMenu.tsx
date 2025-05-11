import {Menu} from "../../../components/menu/Menu.tsx";
import {SocialMedia} from "../../../components/social_media/SocialMedia.tsx";
import styled from "styled-components";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <Menu menuItems={items} />
            <SocialMedia />
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 820px) {
        display: none;
    }
`