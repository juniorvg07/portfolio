import { Scroll } from "../../../assets/scripts/scrollReveal";

export const SectionTitle = ({name, text}) => {
    return (
        <Scroll name={`${name} section-title`} 
        children={
            <h2 >{text}</h2>
        } transform="translateY" px="60" time="0.8" >
        </Scroll>
    );
}