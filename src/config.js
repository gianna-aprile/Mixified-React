
// ***** SPOTIFY CONFIG *****
export const authEndpoint = 'https://accounts.spotify.com/authorize?';
export const clientId = "5b6937ee59594376822e556cd3db243b";

export const scopes = [
  "playlist-modify-public",
  "playlist-modify-private",
  "user-library-read",
  "user-top-read",
];

// ***** REACT CONFIG *****
export const redirectUri = "https://gianna-aprile.github.io/Mixified-React/"; // -> To use deployed version of React app
//export const redirectUri = "http://localhost:3000"; // -> To use local version of React app

// ***** FLASK APP (API) CONFIG *****
export const apiURL = "https://mixified-api.herokuapp.com" // To use deployed version of API
//export const apiURL = "http://127.0.0.1:5000" // To use local version of API

