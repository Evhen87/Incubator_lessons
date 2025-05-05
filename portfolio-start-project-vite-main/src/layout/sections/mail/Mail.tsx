import styled from "styled-components";
import {TextGradient} from "../../../components/TextGradient.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Mail = () => {
    return (
        <StyledMail>
            <Container>
                <Text>For any questions please mail me:<br/>
                    <TextGradient>hi@pavanmg.in</TextGradient>
                </Text>
            </Container>
        </StyledMail>
    );
};

const StyledMail = styled.section`
    text-align: center;
    font-size: 58px;
`

const Text = styled.p`
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${theme.colors.font2};
`
