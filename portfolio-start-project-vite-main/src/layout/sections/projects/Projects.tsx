import styled from "styled-components";
import {SectionText, SectionTitle, SectionTitles} from "../../../components/SectionTitles.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";

const projectItems = ["All", "landing page", "React", "spa"]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitles>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
            </SectionTitles>
            <Menu menuItems={projectItems}/>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`