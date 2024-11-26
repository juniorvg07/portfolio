import { SkillHeader } from "../../../../shared/containers/skills/skillHeader";
import { SectionTitle } from "../../../../shared/titles/sectionTitle";
import { SkillsList } from "../../../../shared/containers/skills/skillsList";
import { SkillsDataFront } from "../../../../shared/containers/skills/dataFront";
import { SkillsDataBack } from "../../../../shared/containers/skills/dataBack";
import { Scroll } from "../../../../../assets/scripts/scrollReveal";
import { useState } from "react";
import '../../../../../assets/css/skills.css';

export const Skills = () => {
    const [front, setFront] = useState('skills_open')
    const [back, setBack] = useState('skills_close')

    function stateFront(header) {
        let state = header
        setFront('skills_close')
        setBack('skills_close')

        if (state === 'skills_close') {
            setFront('skills_open')
        }
    }

    function stateBack(header) {
        let state = header
        setFront('skills_close')
        setBack('skills_close')

        if (state === 'skills_close') {
            setBack('skills_open')
        }
    }

    return (
        <section className="skills section" id="skills">
            <SectionTitle name="skills" text="Skills"></SectionTitle>

            <div className="skills_section section-container">
                {/* Skill 1: Fronted */}
                <Scroll name={`skill techs ${front}`} 
                children={
                    <>
                    <SkillHeader icon="data_object" title="Frontend" click={() => stateFront(front)} ></SkillHeader>
                    <SkillsList skills={SkillsDataFront} ></SkillsList>
                    </>
                } transform="translateX" px="-40" time="1.0" >
                </Scroll>

                {/* Skill 2: Backed */}
                <Scroll name={`skill techs ${back}`} 
                children={
                    <>
                    <SkillHeader icon="storage" title="Backend" click={() => stateBack(back)} ></SkillHeader>
                    <SkillsList skills={SkillsDataBack} ></SkillsList>
                    </>
                } transform="translateX" px="-40" time="1.5" >
                </Scroll>
            </div>
        </section>
    );
}