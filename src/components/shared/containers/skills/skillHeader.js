import { SkillIcon } from "../../icons/skillIcon";

export const SkillHeader = ({icon, title, click}) => {
    return (
        <div className="skill-header" onClick={click}>
            <div className="skill_technology">
                <SkillIcon id="skill_icon" icon={icon} ></SkillIcon>
                <h2 className="skill_name_title">{title}</h2>
            </div>
            <i className="material-icons" id="skill_arrow">keyboard_arrow_down</i>
        </div>
    );
}