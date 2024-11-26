import { Skill } from "./skill";

export const SkillsList = ({skills}) => {
    return (
        <div className="skill-list" >
            {skills.map((item, index) =>{
                return (
                    <Skill key={index} skill={item}></Skill>
                );
            })}
        </div>
    );
}