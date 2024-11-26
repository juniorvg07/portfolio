import { Techs } from "../../../../shared/groups/techs";
import profile from "../../../../../assets/images/pictures/blob-profile.png";
import { Front } from "../../../../shared/groups/front";
import { Back } from "../../../../shared/groups/back";
import { Scroll } from "../../../../../assets/scripts/scrollReveal";
import '../../../../../assets/css/home.css';

export const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home section-container" id="home-section">
                <Scroll name="home-name" 
                children={
                    <>
                    <h2 id="home-title" >I'm Junior Vasquez</h2>
                    <h2 >Software Developer</h2>
                    </>
                } transform="translateX" px="-50" time="0.8" >
                </Scroll>

                <Scroll name="home section-profile"
                children={
                    <>
                    <img id="profile" alt="Junior Vasquez Dev" src={profile} />
                    </>
                } transform="translateY" px="-60" time="0.7" >
                </Scroll>

                <Scroll name="front technologies"
                children={
                    <Techs icons={Front} ></Techs>
                } transform="translateX" px="-50" time="1.0" >
                </Scroll>
                
                <Scroll name="back technologies" 
                children={
                    <Techs tech="front" icons={Back} ></Techs>
                } transform="translateX" px="-70" time="1.2" >
                </Scroll>
            </div>
        </section>
    );
}