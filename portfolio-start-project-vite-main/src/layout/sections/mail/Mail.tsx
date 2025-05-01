import styled from "styled-components";
import {TextGradient} from "../../../components/TextGradient.tsx";

export const Mail = () => {
    return (
        <StyledMail>
            <Text>For any questions please mail me:<br/>
            <TextGradient>hi@pavanmg.in</TextGradient>
            </Text>
        </StyledMail>
    );
};

const StyledMail = styled.section`
    text-align: center;
    font-size: 58px;
`

const Text = styled.p`
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    text-align: center;
    color: #ccc;
`
