import React from "react";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import logo from './images/mixifiedLogo.png';
import './styles/PlaylistOptions.css';

class PlaylistOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false
    };
  }
  
  handleButtonClick(playlistType){
      this.setState({loading: true})

      let url = new URL(`http://mixified-api.us-east-1.elasticbeanstalk.com/api/${playlistType}`)
      url.search = new URLSearchParams({ token: this.props.token })
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if(data.data === 'success'){
          confirmAlert({
            title: 'Playlist Created Successfully',
            message: 'New playlist created successfully, it will appear in your Spotify library shortly! (Or relaunch Spotify for instant access)',
            buttons: [{label: 'OK'}]
          });
        }
        else if (data.data === 'rate exceeded'){
          confirmAlert({
            title: 'API Rate Limit Exceeded',
            message: 'Sorry! Spotify needs a little break from making playlists, please try again in a minute.',
            buttons: [{label: 'OK'}]
          });
        }
        else if (data.data === 'creation error'){
          confirmAlert({
            title: 'Error Creating Playlist',
            message: 'Sorry! There was an error creating your playlist, please try again.',
            buttons: [{label: 'OK'}]
          });
        }
        else{
          confirmAlert({
            title: 'No Tracks Found',
            message: 'No tracks were found in your library that match this type of playlist, please save more tracks to your liked songs on your Spotify account for personalized results.',
            buttons: [{label: 'OK'}]
          });
        }
        this.setState({loading: false}) 
      })     
  }

    render(){
    return (
      <body>
      <div className="PLO">
            <div className="PLO-header">
              <img src={logo} className="PLO-logo" alt="Logo"/>
              <h1 className="PLO-title">Mixified</h1>
            </div>
            <div className="PLO-container">
            <div className="PLO-box 1"> 
            <h2 className="box-title">Top Artists</h2>
              <p className="PLO-des">
                <em>
                    Discover more artists related to artists you already love. 
                    This playlist will contain songs that are related to the tracks of your top 50 artists.
                </em>
              </p>
              {!this.state.loading && (
                <button className="PLO-btn"
              onClick = {() => this.handleButtonClick("topRelatedArtists")}>
                <b>Generate My Playlist</b>
              </button>
              )}
              {this.state.loading && (
                <button className="PLO-btn">
              Loading...
              </button>
              )}
            </div>

            <div className="PLO-box 2"> 
            <h2 className="box-title">Recent Artists</h2>
              <p className="PLO-des">
                <em>
                    Find more artists related to your newest saved songs. This playlist will contain artists
                    related to the artists of your most recently saved tracks.
                </em>
              </p>
              {!this.state.loading && (
                <button className="PLO-btn"
                  onClick = {() => this.handleButtonClick("recentRelatedArtists")}>
                  <b>Generate My Playlist</b>
                </button>
              )}
              {this.state.loading && (
                <button className="PLO-btn">
                Loading...
                </button>
              )}
            </div>

            <div className="PLO-box 3"> 
            <h2 className="box-title">Top Tracks</h2>
              <p className="PLO-des">
                <em>
                    Discover more songs related to your favorite tracks. This playlist will contain songs
                    related to your top 50 most played tracks.
                </em>
              </p>
              {!this.state.loading && (
                <button className="PLO-btn"
                  onClick = {() => this.handleButtonClick("topRelatedTracks")}>
                  <b>Generate My Playlist</b>
                </button>
              )}
              {this.state.loading && (
                <button className="PLO-btn">
                Loading...
                </button>
              )}
            </div>
            <div className="PLO-box 4"> 
            <h2 className="box-title">Pop</h2>
            <p className="PLO-des">
              <em>
              Explore the pop genre. This playlist will contain pop songs that are similar to the most recent pop songs saved in your library.
              </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("pop")}>
                  <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>

            <div className="PLO-box 5"> 
            <h2 className="box-title">Hip Hop</h2>
            <p className="PLO-des">
                <em>
                Explore the hip hop genre. This playlist will contain hip hop songs that are similar to the most recent hip hop songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("hiphop")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>

            <div className="PLO-box 6"> 
            <h2 className="box-title">Rap</h2>
            <p className="PLO-des">
                <em>
                Explore the rap genre. This playlist will contain rap songs that are similar to the most recent rap songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("rap")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>

            <div className="PLO-box 7"> 
            <h2 className="box-title">R{`&`}B</h2>
            <p className="PLO-des">
                <em>
                Explore the R{`&`}B genre. This playlist will contain R{`&`}B songs that are similar to the most recent R{`&`}B songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("r&b")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>

            <div className="PLO-box 8"> 
            <h2 className="box-title">EDM</h2>
            <p className="PLO-des">
                <em>
                Explore the EDM genre. This playlist will contain EDM songs that are similar to the most recent EDM songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("edm")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>

            <div className="PLO-box 9"> 
            <h2 className="box-title">House</h2>
            <p className="PLO-des">
                <em>
                Explore the house genre. This playlist will contain house songs that are similar to the most recent house songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("house")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>

            <div className="PLO-box 10"> 
            <h2 className="box-title">Country</h2>
            <p className="PLO-des">
                <em>
                Explore the country genre. This playlist will contain country songs that are similar to the most recent country songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("country")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}  
            </div>

            <div className="PLO-box 11"> 
            <h2 className="box-title">Alternative</h2>
            <p className="PLO-des">
                <em>
                Explore the alternative genre. This playlist will contain alternative songs that are similar to the most recent alt. songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("alternative")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>

            <div className="PLO-box 12"> 
            <h2 className="box-title">Rock</h2>
            <p className="PLO-des">
                <em>
                Explore the rock genre. This playlist will contain rock songs that are similar to the most recent rock songs saved in your library.
                </em>
            </p>
            {!this.state.loading && (
              <button className="PLO-btn"
                onClick = {() => this.handleButtonClick("rock")}>
                <b>Generate My Playlist</b>
              </button>
            )}
            {this.state.loading && (
              <button className="PLO-btn">
              Loading...
              </button>
            )}
            </div>
          </div>
      </div>
      </body>
    );
  }
}
    
    export default PlaylistOptions;