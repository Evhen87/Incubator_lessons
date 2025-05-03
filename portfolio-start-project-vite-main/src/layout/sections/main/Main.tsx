import styled from "styled-components";
import photo from "../../../assets/images/photos/50353683 1.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {TextGradient} from "../../../components/TextGradient.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <MainBody>
                        <Text>Hi 👋,<br/>
                        My name is <br/>
                        <TextGradient>Kushner Yauheni</TextGradient> <br/>
                        I build things for web</Text>
                    </MainBody>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    background-color: #191919;
    display: flex;
`
const MainBody =styled.div`
    text-align: left;
`
const Text =styled.h2`    
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;
    color: ${theme.colors.font1};
`
const PhotoWrapper =styled.div`
    
`

const Photo = styled.img`
    border-radius: 50%;
    max-width: 349px;
    max-height: 349px;
    object-fit: cover;
    position: relative;
    top: 8px;
    left: 8px;
    &:before {
        content: "";
        display: inline-block;
        width: 500px;
        height: 500px;
        background: linear-gradient(#E70FAA, #00C0FD);
        position: absolute;
        top: 0;
        left: 0;
    }
`
/*const PhotoGradient = styled.div`
    position: relative;
    background: linear-gradient(#E70FAA, #00C0FD);    
    width: 365px;
    height: 365px;
    border-radius: 50%;
`*/
