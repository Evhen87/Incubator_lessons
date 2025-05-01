import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type WorkPropsType = {
    title: string
    text: string
    src: string
    stackText: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <WorkBody>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkText>{props.text}</WorkText>
                <WorkStack>{props.stackText}</WorkStack>
                <WorkPreview>
                    <LivePreview>
                        <LivePreviewLink href={"#"}>
                            <Icon iconId={"linkChain"} height={"20"} width={"20"} viewBox={"0 0 20 20"}></Icon>
                            <WorkPreviewText>Live Preview</WorkPreviewText>
                        </LivePreviewLink>
                    </LivePreview>
                    <ViewCode>
                        <ViewCodeLink href={"#"}>
                            <Icon iconId={"githubFillSmall"} height={"20"} width={"20"} viewBox={"0 0 20 20"}></Icon>
                            <WorkPreviewText>View Code</WorkPreviewText>
                        </ViewCodeLink>
                    </ViewCode>
                </WorkPreview>
            </WorkBody>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: black;
    max-width: 375px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const WorkBody = styled.div`
    font-family: "Poppins", sans-serif;
`
const WorkTitle = styled.h4`
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    text-align: center;
    color: #ccc;
`
const WorkText = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: #ccc;
`
const WorkStack = styled.p`
    line-height: 1.625;
    color: #ccc;
    font-weight: 300;
    font-size: 14px;
`
const WorkPreview = styled.div`
    
`
const LivePreview = styled.div`
    
`
const ViewCode = styled.div`
    
`
const WorkPreviewText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
`
const LivePreviewLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
`
const ViewCodeLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
`