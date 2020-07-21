import React from 'react';
import logo from './images/mixifiedLogo.png';
import './styles/App.css';
import hash from "./hash";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import PlaylistOptions from "./PlaylistOptions";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      token: null,
    }
  }
  
  componentDidMount() {
    let tok = hash.access_token;
    if (tok) {
      this.setState({
        token: tok
      });
    }
  }

  render() {
    return (
      <div className="App-main">
          {!this.state.token && (
            <>
            <img src={logo} className="App-logo" alt="Logo"/>
            <h1 className="App-title">Mixified</h1>
            <p className="App-subheading"><i>A Smart Spotify Playlist Generator</i></p>
            <p className="App-explain">Mixified generates personalized playlists based on your Spotify saved tracks, top artists, and top songs.
            The creation process of these playlists has randomizing features to ensure you never get the same playlist twice.</p>
            <a
                className="App-loginButton"
                href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                Login To Spotify
            </a>
            <p className="App-createdBy">Contact: <a href="mailto:giannaaprile@outlook.com">Gianna Aprile</a></p>
            </>
          )} 
          {this.state.token && (
            <PlaylistOptions 
              token={this.state.token}
             />
          )}         
      </div>
    );
  }
}  

export default App;
