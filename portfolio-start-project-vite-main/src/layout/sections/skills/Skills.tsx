import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionText, SectionTitle, SectionTitles} from "../../../components/SectionTitles.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitles>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionText> Technologies I’ve been working with recently</SectionText>
                </SectionTitles>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"html"} width={"120"} height={"120"} viewBox={"0 0 120 120"} />
                    <Skill iconId={"css"} width={"120"} height={"119"} viewBox={"0 0 120 119"} />
                    <Skill iconId={"js"} width={"120"} height={"120"} viewBox={"0 0 120 120"} />
                    <Skill iconId={"react"} width={"113"} height={"101"} viewBox={"0 0 113 101"} />
                    <Skill iconId={"vector14"} width={"105"} height={"100"} viewBox={"0 0 105 100"} />
                    <Skill iconId={"bootstrap"} width={"88"} height={"87"} viewBox={"0 0 88 87"} />
                    <Skill iconId={"tailwind"} width={"131"} height={"131"} viewBox={"0 0 131 131"} />
                    <Skill iconId={"sass"} width={"117"} height={"87"} viewBox={"0 0 117 87"} />
                    <Skill iconId={"git"} width={"105"} height={"105"} viewBox={"0 0 105 105"} />
                    <Skill iconId={"cibGreensock"} width={"120"} height={"120"} viewBox={"0 0 120 120"} />
                    <Skill iconId={"vscode"} width={"112"} height={"112"} viewBox={"0 0 112 112"} />
                    <Skill iconId={"githubFill"} width={"88"} height={"88"} viewBox={"0 0 88 88"} />
                </FlexWrapper>
        </Container>
        </StyledSkills>
    );
};

const StyledSkills  = styled.section`
`