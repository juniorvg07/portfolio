import { Scroll } from "../../../../assets/scripts/scrollReveal";

export const WorkCard = ({work}) => {
    return (
        <article className="work_article">
            <Scroll name="article_card" 
            children={
                <>
                <h3>{work.title}</h3>
                <div className="image_container">
                    <img className="work_image" alt={work.title} src={work.image} />
                </div>
                <span>{work.description}</span>
                </>
            } transform="translateY" px="50" time="1.0" >
            </Scroll>
        </article>
    );
}