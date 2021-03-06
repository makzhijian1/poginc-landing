import classes from './OnTrackCardFront.module.css'
import OnTrackPogLogo from '../../images/OnTrack_PogLogo.png'

function OnTrackCardFront() {
    return (
        <div className={classes.main}>
            <div className={classes.title_container}>
                <span>
                    <p className={classes.p_title}>OnTrack</p>
                    </span>
            </div>
            <div className={classes.logo_container}>
                <img src={OnTrackPogLogo} className={classes.image_container}/>
            </div>
            <div className={classes.description_container}>
                <span>
                    <p className={classes.p_desc_header}>Tech Stack</p>
                    <p className={classes.p_desc_details}>Python, Java, MySQL, ReactJS</p>
                    <p className={classes.p_desc_header}>Deployment Platforms</p>
                    <p className={classes.p_desc_details}>Replit, AWS EC2, AWS Amplify</p>
                </span>
            </div>
        </div>
    );
}

export default OnTrackCardFront;