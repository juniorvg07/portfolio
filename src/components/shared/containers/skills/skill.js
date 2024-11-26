import { SkillIcon } from "../../icons/skillIcon";

export const Skill = ({skill}) => {
    return (
        <div className="skill_data" id={skill.id}>
            <div className="skill_title">
                <SkillIcon icon={skill.icon} ></SkillIcon>
                <h3 className="skill_name">{skill.name}</h3>
                <span className="skill_number">{skill.number}</span>
            </div>
            <div className="skill bar">
                <span className={`skill_percentage ${skill.percentage}`}></span>
            </div>
        </div>
    );
} 