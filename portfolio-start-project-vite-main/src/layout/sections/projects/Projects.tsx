import styled from "styled-components";
import {SectionText, SectionTitle, SectionTitles} from "../../../components/SectionTitles.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitles>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
            </SectionTitles>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`