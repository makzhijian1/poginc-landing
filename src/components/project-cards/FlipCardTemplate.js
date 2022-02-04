import classes from './FlipCard.module.css'

function FlipCard(props) {
    return (
        <div className={classes.flip_card}>
            <div className={classes.flip_card_inner}>
                <div className={classes.flip_card_front}>
                    {props.front}
                </div>
                <div className={classes.flip_card_back}>
                    {props.back}
                </div>
            </div>
        </div>
    );
}

export default FlipCard;