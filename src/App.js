import React, { Component } from 'react';
import dsclogo from './imgs/dsclogo.png';
import shortlogo from './imgs/shortlogo.png';
import './App.sass';
import SearchBar from 'material-ui-search-bar'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';



const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardContainer: {
    flexGrow: 1,
    height: "100vh"
  }
});

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKey: ""
    }
  }

  makeSearch = () => {
    const searchKey = this.state.searchKey;
    console.log(searchKey);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Container component="div" maxWidth="sm" id="logoContainer">
              <img src={dsclogo} alt="DSC logo"></img>
              <SearchBar
                value={this.state.searchKey}
                onChange={(newValue) => this.setState({ searchKey: newValue })}
                onRequestSearch={() => this.makeSearch()}
                style={{
                  margin: '2rem auto',
                  maxWidth: "100%",
                  borderRadius: "500px"
                }}
                classes={{
                  iconButton: "bluebtn"
                }}
              />
            </Container>
            <Container maxWidth="lg" component="div">
              <Grid container spacing={3}>
                <Grid item xs>
                  <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper}>xs</Paper>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item lg={4}>
            <Card className={classes.cardContainer}>
              <CardHeader
                avatar={
                  <Avatar src={shortlogo} />
                }
                action={
                  <IconButton aria-label="close">
                    <CloseOutlined />
                  </IconButton>
                }
                title="DSC NSEC"
                subheader="Netaji Subhash Engineering College"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);