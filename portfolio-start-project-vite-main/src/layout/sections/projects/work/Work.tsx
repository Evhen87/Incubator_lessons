import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

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
                <FlexWrapper align={"center"}>
                    <PreviewLink href={"#"}>
                        <FlexWrapper >
                            <Icon iconId={"linkChain"} height={"20"} width={"20"} viewBox={"0 0 20 20"}></Icon>
                            <WorkPreviewText>Live Preview</WorkPreviewText>
                        </FlexWrapper>
                    </PreviewLink>
                    <PreviewLink href={"#"}>
                        <FlexWrapper >
                            <Icon iconId={"githubFillSmall"} height={"20"} width={"20"} viewBox={"0 0 20 20"}></Icon>
                            <WorkPreviewText>View Code</WorkPreviewText>
                        </FlexWrapper>
                    </PreviewLink>
                </FlexWrapper>
            </WorkBody>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    border-radius: 20px;
    background-color: ${theme.colors.secondaryBg};
    max-width: 375px;
    width: 33.333%;
    overflow: hidden;
    margin-bottom: 65px;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const WorkBody = styled.div`
    padding: 28px;
    color: ${theme.colors.font2};
    text-align: left;
    & > ${FlexWrapper} {
        column-gap: 48px;
    }
`
const WorkTitle = styled.h4`
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    margin-bottom: 17px;
`
const WorkText = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    margin-bottom: 12px;
`
const WorkStack = styled.p`
    line-height: 1.625;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 21px;
`

const WorkPreviewText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
`
const PreviewLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    & > ${FlexWrapper} {
        column-gap: 10px;        
    }
`