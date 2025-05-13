import styled from "styled-components";
import {TextGradient} from "../../../components/TextGradient.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

export const Mail = () => {
    return (
        <StyledMail>
            <Container>
                <Text>For any questions please mail me:<br/>
                    <TextGradient>kushner.aleks@yandex.ru</TextGradient>
                </Text>
            </Container>
        </StyledMail>
    );
};

const StyledMail = styled.section`
    text-align: center;
    
`

const Text = styled.p`
    ${font({Fmin: 20, Fmax: 58, family: '"DM Sans", sans-serif', weight: 700})};    
    line-height: 1.3;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${theme.colors.font2};
    @media screen and (min-width: 1250px) {
        font-size: 58px;
    }
    
`
