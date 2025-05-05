import styled from "styled-components";
import photo from "../../../assets/images/photos/50353683 1.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {TextGradient} from "../../../components/TextGradient.tsx";
import {theme} from "../../../styles/Theme.ts";
import abstract from "../../../assets/images/abstract.svg"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper wrap={"wrap"} align={"center"} justify={"space-around"}>
                    <MainBody>
                        <Text>Hi 👋,<br/>
                        My name is <br/>
                        <TextGradient>Kushner Yauheni</TextGradient> <br/>
                        I build things for web</Text>
                    </MainBody>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                        <Abstract src={abstract} alt=""/>
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
    overflow: hidden;
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
    position: relative;    
    &:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        max-width: 365px;
        max-height: 365px;
        width: 104%;
        height: 104%;
        background: linear-gradient(#E70FAA, #00C0FD);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }    
`

const Photo = styled.img`
    border-radius: 50%;
    max-width: 349px;
    max-height: 349px;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;    
`

const Abstract = styled.img`
    border-radius: 50%;
    max-width: 180.5%;
    max-height: 180.5%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`