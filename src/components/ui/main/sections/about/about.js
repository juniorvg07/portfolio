import '../../../../../assets/css/about.css';
import { Scroll } from '../../../../../assets/scripts/scrollReveal';
import { SectionTitle } from "../../../../shared/titles/sectionTitle";
import profile from "../../../../../assets/images/pictures/profile_pic_about.png";

export const About = () => {
    return (
        <section className="about section" id="about">
            <SectionTitle name="about" text="About me"></SectionTitle>

            <div className="about_section section-container">
                <Scroll name="about-picture" 
                children={
                    <img id="about-pic" alt="Junior Vasquez Dev" src={profile} />
                } transform="translateY" px="-40" time="1.0" >
                </Scroll>

                <Scroll id="aboutDesc" name="about-description" 
                children={
                    <span>
                        Especialista en Desarrollo de Software, Ingeniero Mecatrónico, con 2 años de experiencia en Desarrollo de Software y Sistemas, 
                        y anteriormente 8 años de experiencia en el área de mantenimiento industrial. 
                        Desarrollador de aplicativos en Java implementados en la Registraduría Especial de Barranquilla.
                    </span>
                } transform="translateY" px="50" time="1.2" >
                </Scroll>
            </div>
        </section>
    );
}