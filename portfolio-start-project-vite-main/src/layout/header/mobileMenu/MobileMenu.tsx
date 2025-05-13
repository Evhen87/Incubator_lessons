import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {MobileMenuList} from "../../../components/menu/MobileMenuList.tsx";
import {SocialMediaMobile} from "../../../components/social_media/media/SocialMediaMobile.tsx";
import {useState} from "react";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const MobileMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen( !menuIsOpen )}
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen} onClick={ ()=>{setmenuIsOpen( false )} }>
                <MobileMenuList menuItems={items} />
                <SocialMediaMobile />
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.div`
    display: none;
    
    align-items: center;
    @media screen and (max-width: 820px) {
        display: flex;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -80px;
    right: -100px;
    z-index: 999999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font2};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font2};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0px);
        `}
        }
        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font2};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`               
                transform: rotate(45deg) translateY(0px);
        `}
        }
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    flex-direction: column;
    align-items: center;
    position: fixed;
    background-color: ${theme.colors.secondaryBg};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: none;    
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    `}
    
`