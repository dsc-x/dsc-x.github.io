import React from 'react';
import shortlogo from './assets/images/shortlogo.png';
import './App.sass';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import CloseOutlined from '@material-ui/icons/CloseOutlined';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ShopIcon from '@material-ui/icons/Shop';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "relative"
    },
    cardContainer: {
        flexGrow: 1,
        height: "100vh",
        margin: "0",
        overflowY: "auto"
        // right: "0"
    },

    image: {
        width: "100%",
        height: "100%",
        padding: "1rem"
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: "1000px"
    },
}));

export default function FullChapter(props) {
    const classes = useStyles();

    function addChaptersDefaultSrc(ev) {
        ev.target.src = `./chapters/default.png`
    }

    function addLeadsDefaultSrc(ev) {
        ev.target.src = `./leads/default.png`
    }

    function makeMapUrl(data) {
        return "https://maps.google.com/maps?q=" + data.Campus + "," + data.City + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
    }

    return (
        <Card className={classes.cardContainer} id="infoCard" style={{position: props.position}}>
            <CardHeader
                avatar={
                    <Avatar src={shortlogo} />
                }
                action={
                    <IconButton aria-label="close" onClick={props.handleInfoCardClose}>
                        <CloseOutlined />
                    </IconButton>
                }
                title={props.data.Acronym.length > 0 ? props.data.Acronym : "DSC "+props.data.Campus}
                subheader={props.data.Acronym.length > 0 ? props.data.Campus : ""}
            />
            <CardContent>
                <Card style={{ height: "auto", width: "100%" }}>
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
                </Card>
                <br></br>
                { props.data.Facebook.length + 
                    props.data.Email.length + 
                    props.data.Website.length +
                    props.data.Twitter.length + 
                    props.data.Instagram.length +
                    props.data.YouTube.length +
                    props.data.Linkedin.length +
                    props.data.DSCApp.length > 0 && (
                        <>
                        <Typography color="textSecondary" variant="h6" component="h2">
                            Social Links
                        </Typography>
                        { props.data.Email.length > 0 && (
                            <IconButton aria-label="Email" href={"mailto:"+props.data.Email}>
                                <EmailIcon />
                            </IconButton>
                        )}
                        { props.data.Website.length > 0 && (
                            <IconButton aria-label="Website" href={"//"+props.data.Website}>
                                <PublicIcon />
                            </IconButton>
                        )}
                        { props.data.Facebook.length > 0 && (
                            <IconButton aria-label="Facebook" href={"//"+props.data.Facebook}>
                                <FacebookIcon />
                            </IconButton>
                        )}
                        { props.data.Twitter.length > 0 && (
                            <IconButton aria-label="Twitter" href={"//"+props.data.Twitter}>
                                <TwitterIcon />
                            </IconButton>
                        )}
                        { props.data.Instagram.length > 0 && (
                            <IconButton aria-label="Facebook" href={"//"+props.data.Instagram}>
                                <InstagramIcon />
                            </IconButton>
                        )}
                        { props.data.YouTube.length > 0 && (
                            <IconButton aria-label="Facebook" href={"//"+props.data.YouTube}>
                                <YouTubeIcon />
                            </IconButton>
                        )}
                        { props.data.Linkedin.length > 0 && (
                            <IconButton aria-label="Facebook" href={"//"+props.data.Linkedin}>
                                <LinkedInIcon />
                            </IconButton>
                        )}
                        { props.data.DSCApp.length > 0 && (
                            <IconButton aria-label="Email" href={"//"+props.data.DSCApp}>
                                <ShopIcon />
                            </IconButton>
                        )}
                        <br></br>
                        <br></br>
                    </>
                )}
                { props.data.LeadName.length > 0 && (
                    <>
                    <Typography color="textSecondary" variant="h6" component="h2">
                        Lead Details
                    </Typography>
                    <br></br>
                    <Card>
                        <Grid container>
                            <Grid item xs={4}>
                                { props.data.LeadPic.length > 0 ? (
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} onError={addLeadsDefaultSrc} alt="Lead" src={"./leads/" + props.data.LeadPic} />
                                    </ButtonBase>
                                ):(
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} onError={addLeadsDefaultSrc} alt="Lead" src={"./leads/default.png"} />
                                    </ButtonBase>
                                )}
                            </Grid>
                            <Grid item xs={8}>
                                <Card style={{ height: "100%" }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {props.data.LeadName}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            Lead 2019-20
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        { props.data.LeadEmail.length > 0 && (
                                            <IconButton aria-label="Email" href={"mailto:" + props.data.LeadEmail}>
                                                <EmailIcon />
                                            </IconButton>
                                        )}
                                        { props.data.LeadGithub.length > 0 && (
                                            <IconButton aria-label="GitHub" href={"https://github.com/" + props.data.LeadGithub}>
                                                <GitHubIcon />
                                            </IconButton>
                                        )}
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Card>
                    <br></br>
                    <br></br>
                    </>
                )}
                <Card>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe
                                width="100%"
                                height="100%"
                                src={makeMapUrl(props.data)}
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                title="abc"
                            ></iframe>
                        </div>
                    </div>
                </Card>
            </CardContent>
            <hr></hr>
            <Container>
                <Typography color="textSecondary" component="p">
                    The data on this page can be outdated or incorrect. Kindly contact us for corrections.
                </Typography>
            </Container>
        </Card>
    );
}