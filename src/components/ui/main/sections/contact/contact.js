import '../../../../../assets/css/contact.css';
import { SectionTitle } from "../../../../shared/titles/sectionTitle";
import { Scroll } from '../../../../../assets/scripts/scrollReveal';

export const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <SectionTitle name="contact" text="Contact" ></SectionTitle>

            <div className="contact_section section-container">
                <div className="contact_form">
                    <Scroll name="name-input"
                    children={
                        <>
                        <input type="text" placeholder="Name" className='contact_input'></input>
                        </>
                    } transform="translateY" px="50" time="0.8" >
                    </Scroll>
                    <Scroll name="mail-input"
                    children={
                        <>
                        <input type="email" placeholder="E-mail" className='contact_input' ></input>
                        </>
                    } transform="translateY" px="50" time="1.2" >
                    </Scroll>
                    <Scroll name="text-input"
                    children={
                        <>
                        <input type="text" className='contact_input' id='text' ></input>
                        </>
                    } transform="translateY" px="50" time="1.5" >
                    </Scroll>
                    <Scroll name="button_div"
                    children={
                        <>
                        <button className="contact_button" >SEND</button>
                        </>
                    } transform="translateY" px="50" time="1.6" >
                    </Scroll>
                </div>
            </div>
        </section>
    );
}