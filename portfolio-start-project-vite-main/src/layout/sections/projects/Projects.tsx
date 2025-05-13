import styled from "styled-components";
import {SectionText, SectionTitle, SectionTitles} from "../../../components/SectionTitles.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import firstImage from "../../../assets/images/photos/Rectangle 18.jpg"
import secondImage from "../../../assets/images/photos/Rectangle 16.jpg"
import thirdImage from "../../../assets/images/photos/Rectangle 8.jpg"
import fourthImage from "../../../assets/images/photos/Rectangle 24.jpg"
import fifthImage from "../../../assets/images/photos/Rectangle 23.jpg"
import sixthImage from "../../../assets/images/photos/Rectangle 22.jpg"
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

const projectItems = ["All", "landing page", "React", "spa"]

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitles>
                    <SectionTitle>Projects</SectionTitle>
                    <SectionText>Things I’ve built so far</SectionText>
                </SectionTitles>

                <MenBox>
                    <Menu menuItems={projectItems}/>
                </MenBox>

                <FlexWrapper wrap={"wrap"} justify={"space-between"} columnGap={"46px"} rowGap={"65px"}>
                    <Work text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stackText={"Tech stack : HTML , JavaScript, SASS, React"}
                          title={"Project Tile goes here"}
                          src={firstImage}/>
                    <Work
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} stackText={"Tech stack : HTML , JavaScript, SASS, React"}
                        title={"Project Tile goes here"}
                        src={secondImage}
                    />
                    <Work
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} stackText={"Tech stack : HTML , JavaScript, SASS, React"}
                        title={"Project Tile goes here"}
                        src={thirdImage}
                    />
                    <Work
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} stackText={"Tech stack : HTML , JavaScript, SASS, React"}
                        title={"Project Tile goes here"}
                        src={fourthImage}
                    />
                    <Work
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} stackText={"Tech stack : HTML , JavaScript, SASS, React"}
                        title={"Project Tile goes here"}
                        src={fifthImage}
                    />
                    <Work
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} stackText={"Tech stack : HTML , JavaScript, SASS, React"}
                        title={"Project Tile goes here"}
                        src={sixthImage}
                    />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    ${FlexWrapper} {
        @media screen and (max-width: 1240px) {
            column-gap: 35px;
            row-gap: 45px;
        }
        @media ${theme.media.tablet} {
            column-gap: 30px;
            row-gap: 40px;
        }
        @media ${theme.media.mobile} {
            column-gap: 15px;
            row-gap: 20px;
        }
    }
    
`
const MenBox = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`
