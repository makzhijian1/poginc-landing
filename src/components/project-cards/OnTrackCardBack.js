import classes from './OnTrackCardBack.module.css'

function OnTrackCardBack() {
    return (
        <div className={classes.main}>
            <div className={classes.description_container}>
                <span>
                    <p className={classes.p_desc_details}>For Project Details</p>
                    <a className={classes.p_desc_details} target="_blank" href="https://poginc.notion.site/Project-OnTrack-47bf60aed35e40248c70d7037f956067">Click Me</a>
                </span>
            </div>
        </div>
    );
}

export default OnTrackCardBack;