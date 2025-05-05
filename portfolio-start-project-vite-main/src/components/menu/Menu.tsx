import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <MenuList>
                {props.menuItems.map((item, index)=>{
                    return <MenuItem key={index}>
                                <Link href="">
                                    {item}
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                </Link>
                            </MenuItem>
                })}
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    margin-right: 50px;
`
const MenuList = styled.ul`
    display: flex;
    gap: 30px;
`

const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: transparent;
    text-transform: capitalize;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: #a7a7a7;
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }    
`
const MenuItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.font1};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);      
    }

    &:hover {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: #6d23bc;

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }

    }
`