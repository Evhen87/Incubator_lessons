import styled from "styled-components";
import photo from "../../../assets/images/photos/50353683 1.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <MainBody>
                    <p>Hi 👋,<br/>
                    My name is <br/>
                    <span>Kushner Yauheni</span> <br/>
                    I build things for web</p>
                </MainBody>
                <PhotoGradient>
                    <Photo src={photo} alt=""/>
                </PhotoGradient>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #191919;
`
const MainBody =styled.div`  
    * {        
        text-align: left;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 58px;
        line-height: 1.2069;
        letter-spacing: -0.02em;
        color: #d9d9d9;
    }
    span {
        background: -webkit-linear-gradient(180deg, #13b0f5 2.6%, #e70faa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;    
    }
`


const Photo = styled.img`
    border-radius: 50%;
    width: 349px;
    height: 349px;
    object-fit: cover;
    position: absolute;
    top: 8px;
    left: 8px;
`
const PhotoGradient = styled.div`
    position: relative;
    background: linear-gradient(#E70FAA, #00C0FD);    
    width: 365px;
    height: 365px;
    border-radius: 50%;
`
