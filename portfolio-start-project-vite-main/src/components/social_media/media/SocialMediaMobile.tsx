
import styled from "styled-components";
import {Icon} from "../../icon/Icon.tsx";

export const SocialMediaMobile = () => {
    return (
        <SocialListWrapper>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"githubFillCircleBig"} height={"100%"} width={"100%"} viewBox={"0 0 30 30"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"twitterCircle"} height={"100%"} width={"100%"} viewBox={"0 0 32 32"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"linkedin"} height={"100%"} width={"100%"} viewBox={"0 0 30 30"}></Icon>
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </SocialListWrapper>
    );
};

const SocialListWrapper = styled.div`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    display: inline-block;
    width: 75px;
    height: 75px;
`