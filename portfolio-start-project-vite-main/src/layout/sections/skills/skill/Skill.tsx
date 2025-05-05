import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </StyledSkill>
    );
};

const StyledSkill  = styled.div`
    padding: 15px;
    min-width: 130px;
    width: 16.6666%;
    display: flex;
    align-items: center;
    justify-content: center;
`