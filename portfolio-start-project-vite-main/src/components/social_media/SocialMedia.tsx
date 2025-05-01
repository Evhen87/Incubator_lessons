import {FlexWrapper} from "../FlexWrapper.tsx";
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const SocialMedia = () => {
    return (
        <FlexWrapper align={"center"}>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"githubFillCircle"} height={"30"} width={"30"} viewBox={"0 0 30 30"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"twitterCircle"} height={"32"} width={"32"} viewBox={"0 0 32 32"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"linkedin"} height={"30"} width={"30"} viewBox={"0 0 30 30"}></Icon>
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </FlexWrapper>
    );
};

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`