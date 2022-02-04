import FlipCard from './project-cards/FlipCardTemplate';
import OnTrackCardBack from './project-cards/OnTrackCardBack';
import OnTrackCardFront from './project-cards/OnTrackCardFront';
import classes from './Projects.module.css'

function ProjectSection() {
    return (
        <div className={classes.main}>
            <div className={classes.column}></div>
            <div className={classes.column}>
                <FlipCard />
            </div>
            <div className={classes.column}>
                <FlipCard front={<OnTrackCardFront />} back={<OnTrackCardBack />} />
            </div>
            <div className={classes.column}>
                <FlipCard />
            </div>
            <div className={classes.column}></div>
        </div>
    );
}

export default ProjectSection;