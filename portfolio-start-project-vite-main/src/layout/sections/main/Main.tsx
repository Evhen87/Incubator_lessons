import styled from "styled-components";
import photo from "../../../assets/images/photos/50353683 1.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {TextGradient} from "../../../components/TextGradient.tsx";
import {theme} from "../../../styles/Theme.ts";
import abstract from "../../../assets/images/abstract.svg"
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper wrap={"wrap"} align={"center"} justify={"space-between"}>
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
    background-color: ${theme.colors.primaryBg};
    display: flex;
`
const MainBody =styled.div`
    text-align: left;
    margin-right: 20px;
    @media screen and (max-width: 990px) {
        margin: 150px 20px 20px 0;
    }
    @media ${theme.media.mobile} {
        margin: 150px 0 20px 0;
    }
`
const Text =styled.h2`
    ${font({weight: 700, Fmin: 36, Fmax: 58})}
    letter-spacing: -0.02em;
    color: ${theme.colors.font1};
    @media screen and (min-width: 1250px) {
        font-size: 58px;
    }
`
const PhotoWrapper =styled.div`    
    position: relative;
    top: 0;
    right: 0;
    flex: 1 1 auto;
    display: flex;    
    align-items: center;
    height: 100%;
    justify-content: center;
    @media screen and (max-width: 990px) {
        flex: 1 1 100%;
        height: auto;
    }
    
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
    width: 100%;
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
    @media screen and (max-width: 990px) {
        display: none;
    }
`