import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "relative"
    },
    media: {
        height: "200px",
        filter: "brightness(0.5)"
    },
    cardActionButtons: {
        flexDirection: "row-reverse",
        backgroundColor: "transparent",
        position: "absolute",
        width: "100%",
        top: "0",
        zIndex: "9999"
    },
    cardInfoBar: {
        backgroundColor: "transparent",
        position: "absolute",
        width: "100%",
        bottom: "0",
        color: "#fff"
    },
    margin: {
        transform: "scale(0.75, 0.75)"
    },
}));

export default function MiniChapter(props) {
    const classes = useStyles();

    function addChaptersDefaultSrc (ev) {
        ev.target.src = `./chapters/default.png`
    }
    
    return (
        <Grid item lg={props.cardSize} xs={12}>
            <Card className={classes.root}>
                <CardActions disableSpacing className={classes.cardActionButtons}>
                    { props.data.Twitter.length > 0 && (
                        <Fab size="small" aria-label="Twitter" color="primary" className={classes.margin} href={"//"+props.data.Twitter}>
                            <TwitterIcon />
                        </Fab>
                    )}
                    { props.data.Email.length > 0 && (
                        <Fab size="small" aria-label="Email" color="primary" className={classes.margin} href={"mailto:"+props.data.Email}>
                            <EmailIcon />
                        </Fab>
                    )}
                    { props.data.Facebook.length > 0 && (
                        <Fab size="small" aria-label="Facebook" color="primary" className={classes.margin} href={"//"+props.data.Facebook}>
                            <FacebookIcon />
                        </Fab>
                    )}
                </CardActions>
                { props.data.TeamPic.length > 0 ? (
                    <CardMedia
                        className={classes.media}
                        component="img"
                        src={ "./chapters/" + props.data.TeamPic}
                        alt={props.data.Campus}
                        onError={addChaptersDefaultSrc} 
                        onClick={props.handleInfoCardOpen}
                    />
                ):(
                    <CardMedia
                        className={classes.media}
                        component="img"
                        src="./chapters/default.png"
                        alt={props.data.Campus}
                        onError={addChaptersDefaultSrc} 
                        onClick={props.handleInfoCardOpen}
                    />
                )}
                { props.data.Acronym.length > 0 ? (
                    <CardHeader
                        className={classes.cardInfoBar}
                        size="small"
                        title={props.data.Acronym}
                        onClick={props.handleInfoCardOpen}
                        style={{transform: "scale(0.8, 0.8)"}}
                    />
                ):(
                    <CardHeader
                        className={classes.cardInfoBar}
                        size="small"
                        title={"DSC " + props.data.Campus}
                        onClick={props.handleInfoCardOpen}
                        style={{transform: "scale(0.7, 0.7)"}}
                    />
                )}
            </Card>
            {
                props.spacing === 0 && (
                    <span>
                    <br></br>
                    </span>
                )
            }
        </Grid>
    );
}