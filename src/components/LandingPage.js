import { Hexagon, TiledHexagons } from 'tiled-hexagons'
import { useState } from "react";
import classes from './LandingPage.module.css'
import astroLogo from '../images/Astro_Icon.png'
import poggersLogo from '../images/PoggersIcon.png'
import AboutCard from './About';
import ProjectSection from './Projects';

function LandingPage() {

    const [aboutShow, setAboutShow] = useState(false);
    const [projectsShow, setProjectShow] = useState(true);

    function handleProjectsClick() {
        setAboutShow(false);
        setProjectShow(true);
    }

    function handleAboutClick() {
        setAboutShow(true);
        setProjectShow(false);
    }
    return (
        <div className={classes.main_container}>

            <div className={classes.header_row}>
                <div className={classes.header_options_col}></div>
                <div className={classes.header_options_col}>
                    <h1 className={classes.header_options}>
                        <button onClick={handleProjectsClick}><span className={classes.menu_span}>Projects</span></button>
                    </h1>
                </div>
                <div className={classes.header_icon_col}>
                    <img src={astroLogo} className={classes.icon1_container} />
                </div>
                <div className={classes.header_options_col}>
                    <h1 className={classes.header_options}>
                        <button onClick={handleAboutClick}><span className={classes.menu_span}>About</span></button>
                    </h1>
                </div>
                <div className={classes.header_options_col}></div>
            </div>

            <div className={classes.content_container}>
                {projectsShow && <ProjectSection />}
                {aboutShow && <AboutCard />}
            </div>

        </div>
    )
}

export default LandingPage;