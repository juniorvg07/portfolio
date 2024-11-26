import '../../../../../assets/css/work.css';
import { SectionTitle } from "../../../../shared/titles/sectionTitle";
import { Works } from "../../../../shared/containers/work/works";
import { WorkCard } from "../../../../shared/containers/work/workCard";

export const Work = () => {
    return (
        <section className="work section" id="works">
            <SectionTitle name="work" text="Work" ></SectionTitle>

            <div className="work_section section-container">
                {Works.map((item, index) =>{
                    return (
                        <WorkCard key={index} work={item}></WorkCard>
                    )
                })}
            </div>
        </section>
    );
}