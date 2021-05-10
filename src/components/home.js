import * as React from 'react';
import Fade from 'react-reveal/Fade';
import home1 from '../styles/images/home1.jpg';
import techStack from '../styles/images/tech-stack.png';
import rowing from '../styles/images/rowing.jpg';

export default function Home(props) {

    return <div className={"home-page"}>
        <div className={"home-page__section left"}>
                <div>
                    <div className={"home-page__section-title"}>About me</div>
                    <div className={"home-page__section-text"}>
                        Software Engineer and sports enthusiast, I graduated with an MEng from Cambridge in 2020 and now
                        work for Softwire Ltd.
                    </div>
                </div>
            <div className={"home-page__image-container"}>
                <img className={"home-page__image"} src={home1} alt={"Cycling"}/>
            </div>
        </div>
        <div className={"home-page__section left"}>
                <Fade left>
                    <div className={"home-page__section-title"}>Technology</div>
                    <div className={"home-page__section-text"}>
                        Experience in a variety of tech stacks including:
                        <ul>
                            <li>KnockoutJS-Java-PostgreSQL</li>
                            <li>Kotlin-Swift-TypeScript-</li>
                            <li>Flutter-Firebase</li>
                            <li>React-ASP.NET-MySQL</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </Fade>
                <Fade>
                    <div left className={"home-page__image-container"}>
                        <img className={"home-page__image"} src={techStack} alt={"Tech stack"}/>
                    </div>
                </Fade>
        </div>
        <div className={"home-page__section left"}>
            <Fade right>
                <div className={"home-page__section-title"}>Sports</div>
                <div className={"home-page__section-text"}>
                    Currently a keen cyclist and runner. Previously have represented Great Britain in Fencing and was a
                    member of the CUBC Boat Race squad 2018/19.
                </div>
            </Fade>
            <Fade>
                <div right className={"home-page__image-container"}>
                    <img className={"home-page__image"} src={rowing} alt={"FaT Lents 2020"}/>
                </div>
            </Fade>
        </div>
        <div className={"home-page__section left bottom"}>
            <Fade left>
                <div className={"home-page__link-container"} onClick={() =>
                    window.open("https://www.linkedin.com/in/peter-robinson-5213a512a/")}>
                    <img className={"home-page__link-image"}
                        src={"https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/" +
                        "1000/2018_social_media_popular_app_logo_linkedin-512.png"}
                        alt={"LinkedIn"}/>
                </div>
                <a className={"home-page__section-text"} href={"mailto:peter.robinson4137@gmail.com"}>peter.robinson4137@gmail.com</a>
            </Fade>
        </div>
    </div>
}