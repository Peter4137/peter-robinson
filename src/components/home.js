import * as React from 'react';

export default function Home(props) {
    const pageColours = ["aliceBlue", "Aqua", "Aquamarine", "CadetBlue", "LightCyan"];

    return <div className={"home-page"}>
        <div className={"home-page__section left"} style={{backgroundColor: pageColours.pop()}}>
            <div className={"home-page__section-title"}>Section1</div>
            <div className={"home-page__section-text"}>
                text here
            </div>
        </div>
        <div className={"home-page__section right"} style={{backgroundColor: pageColours.pop()}}>
            <div className={"home-page__section-title"}>Section2</div>
            <div className={"home-page__section-text"}>
                text here
            </div>
        </div>
        <div className={"home-page__section left"} style={{backgroundColor: pageColours.pop()}}>
            <div className={"home-page__section-title"}>Section3</div>
            <div className={"home-page__section-text"}>
                text here
            </div>
        </div>
        <div className={"home-page__section left bottom"} style={{backgroundColor: pageColours.pop()}}>
            <div className={"home-page__section-title"}>Links</div>
        </div>
    </div>
}