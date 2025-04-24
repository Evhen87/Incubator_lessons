import './App.css';
import styled, {css} from "styled-components";
import photo from '../../../Incubator_lessons/styled-components-proj/public/img/desert.jpg'
//import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <StyledBox>
                <StyledCard>
                    <StyledImage src={photo} alt={"Desert"} />
                    <StyledBody>
                        <StyledTitle>Headline</StyledTitle>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <StyledText>Faucibus. Faucibus. Sit sit sapien sit<br/> tempusrisu ut. Sit molestie ornare in venen.</StyledText>
                        <StyledButtons>
                            <StyledBtn btnType={'primary'}>See more</StyledBtn>
                            <StyledBtn btnType={'save'}>Save</StyledBtn>
                        </StyledButtons>
                    </StyledBody>
                </StyledCard>
            </StyledBox>
        </div>
    );
}

export default App;

const StyledBox = styled.div`    
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledCard = styled.div`
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    max-width: 300px;
`
const StyledImage = styled.img`
    width: 100%;
    border-radius: 10px;
`
const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Inter, sans-serif;
    padding: 10px;
`

const StyledTitle = styled.h2`
    font-weight: 700;
    font-size: 16px;
    color: #000;
`
const StyledText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.66667;
    color: #abb3ba;
`
const StyledButtons = styled.div`
    display: flex;  
    gap: 12px;
`
type StyledBtnPropsType = {
    btnType: 'primary' | 'save'
}

const StyledBtn = styled.button<StyledBtnPropsType>`
    min-width: 86px;
    padding: 5px 20px;
    font-weight: 700;
    font-size: 10px;
    line-height: 2;
    border-radius: 5px;
    border: 2px solid #4e71fe;
    cursor: pointer;
    
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        color: #fff;
        background: #4e71fe;

        &:hover {
            color: #fff;
            background: #2f459c;
        }
    `}
    
    ${props => props.btnType === "save" && css<StyledBtnPropsType>`
        color: #4e71fe;
        background: transparent;
        &:hover {
            color: #fff;
            background: #2f459c;
        }
    `}
`