import React, { Component } from 'react';
import MiniChapter from './MiniChapter';
import FullChapter from './FullChapter';
import dsclogo from './assets/images/dsclogo.png';
import './App.sass';
import data from "./data/fulllist.json?cachebust=%REACT_APP_CACHE_BUST%";

import SearchBar from 'material-ui-search-bar'
import { withStyles } from '@material-ui/core/styles';
import { Hidden, Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    overflowX: "hidden"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: `${theme.spacing(6)}px 0`,
  }
});

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKey: "",
      gridSize: 12,
      cardSize: 3,
      infoCardOpen: false,
      gridSpacing: 6,
      focusCardData: [],
      searchState: [],
      renderData: []
    }
  }

  initSearch = () => {
    var filtered = [];
    filtered  =  data.dscs.map(dsc => dsc)
    this.setState({renderData: filtered})
  }

  makeSearch = () => {
    const self = this;
    var filteredData=[];
    filteredData = data.dscs.filter((element)  => element.Campus.toLowerCase().includes(self.state.searchKey.toLowerCase()) ||
          element.Acronym.toLowerCase().includes(self.state.searchKey.toLowerCase()) ||
          element.City.toLowerCase().includes(self.state.searchKey.toLowerCase()) ||
          element.LeadName.toLowerCase().includes(self.state.searchKey.toLowerCase()))
      
    
    self.setState({ renderData: filteredData});
  }

  clearSearch = () => {
    this.setState({ searchKey: ""});
    this.initSearch();
  }

  handleInfoCardOpen = (data) => {
    this.setState({ focusCardData: data })
    this.setState({ infoCardOpen: true })
    this.setState({ cardSize: 4 })
    this.setState({ gridSize: 8 })
    this.setState({ gridSpacing: 10 })
  }

  handleInfoCardClose = () => {
    this.setState({ infoCardOpen: false })
    this.setState({ cardSize: 3 })
    this.setState({ gridSize: 12 })
    this.setState({ gridSpacing: 6 })
  }

  componentDidMount(){
    this.initSearch();
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
          <Grid container>
            <Grid item lg={this.state.gridSize} xs={12} style={{ padding: "0 auto !important" }}>
              <Container component="div">
                <Hidden xsDown>
                  <Container component="div" maxWidth="sm" id="logoContainer">
                    <img src={dsclogo} alt="DSC logo" style={{ padding: "0 3rem" }}></img>
                  </Container>
                </Hidden>
                <Hidden smUp>
                  <Container component="div" maxWidth="xl" id="logoContainer">
                    <img src={dsclogo} alt="DSC logo"></img>
                  </Container>
                </Hidden>
                <Container component="div" maxWidth="sm">
                  <SearchBar
                    value={this.state.searchKey}
                    onChange={(newValue) => this.setState({ searchKey: newValue })}
                    onRequestSearch={() => this.makeSearch()}
                    onCancelSearch={()=> this.clearSearch()}
                    style={{
                      margin: '2rem auto',
                      maxWidth: "100%",
                      borderRadius: "500px"
                    }}
                    placeholder="Search"
                  />
                </Container>
              </Container>
              <Container maxWidth="lg" component="div" style={{ marginTop: "6rem" }}>
                <Hidden lgUp>
                  <Grid container spacing={0}>
                    {this.state.renderData.map((dsc, i) => (
                      <MiniChapter cardSize={this.state.cardSize} handleInfoCardOpen={() => this.handleInfoCardOpen(dsc)} data={dsc} key={i} spacing={0} />
                    ))}
                  </Grid>
                </Hidden>
                <Hidden mdDown>
                  <Grid container spacing={this.state.gridSpacing}>
                    {this.state.renderData.map((dsc, i) => (
                      <MiniChapter cardSize={this.state.cardSize} handleInfoCardOpen={() => this.handleInfoCardOpen(dsc)} data={dsc} key={i} />
                    ))}
                  </Grid>
                </Hidden>
              </Container>
              <footer className={classes.footer}>
              <Paper className={classes.paper} elevation={0}>
                  Developed with <span role="img" aria-label="heart">❤️</span> by <a href="https://twitter.com/xprilion">@xprilion</a>
                    <br></br>
                    <br></br>
                    Project is published under the <a href="https://github.com/dsc-x/dsc-x.github.io/blob/dev/LICENSE">MIT license</a>. <br /> 
                    Feel free to <a href="https://github.com/dsc-x/dsc-x.github.io">clone and modify repo</a> as you want, but don't forget to add reference to contributors :)
              </Paper>
            </footer>
            </Grid>
            {
              this.state.infoCardOpen &&
              (
                <Hidden mdDown>
                  <Grid item lg={4} xs={12} style={{ padding: "0 auto !important" }}>
                    <FullChapter data={this.state.focusCardData} handleInfoCardClose={this.handleInfoCardClose} position="fixed" />
                  </Grid>
                </Hidden>
              )
            }
            {
              this.state.infoCardOpen &&
              (
                <Hidden lgUp>
                  <Drawer anchor="bottom" open={this.state.infoCardOpen} onClose={this.handleInfoCardClose} style={{ zIndex: 99999 }}>
                    <FullChapter data={this.state.focusCardData} handleInfoCardClose={this.handleInfoCardClose} />
                  </Drawer>
                </Hidden>
              )
            }
            
          </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);