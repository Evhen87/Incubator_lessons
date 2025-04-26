import styled from "styled-components";
import Logo from "../../components/logo/Logo.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Tech Stack</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #4ba631;
`

