(this["webpackJsonpmixified-react"]=this["webpackJsonpmixified-react"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),i=a.n(s),o=(a(14),a(2)),r=a(3),c=a(6),m=a(5),u=a(4),d=a.n(u),h=(a(15),window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{}));window.location.hash="";var p=h,b=["playlist-modify-public","playlist-modify-private","user-library-read","user-top-read"],E=(a(16),a(1)),y=(a(20),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!1},n}return Object(r.a)(a,[{key:"handleButtonClick",value:function(e){var t=this;this.setState({loading:!0});var a=new URL("".concat("https://mixified-api.herokuapp.com","/api/").concat(e));a.search=new URLSearchParams({token:this.props.token}),fetch(a).then((function(e){return e.json()})).then((function(e){"success"===e.data?Object(E.confirmAlert)({title:"Playlist Created Successfully",message:"New playlist created successfully, it will appear in your Spotify library shortly! (Or relaunch Spotify for instant access)",buttons:[{label:"OK"}]}):"rate exceeded"===e.data?Object(E.confirmAlert)({title:"API Rate Limit Exceeded",message:"Sorry! Spotify needs a little break from making playlists, please try again in a minute.",buttons:[{label:"OK"}]}):"creation error"===e.data?Object(E.confirmAlert)({title:"Error Creating Playlist",message:"Sorry! There was an error creating your playlist, please try again.",buttons:[{label:"OK"}]}):Object(E.confirmAlert)({title:"No Tracks Found",message:"No tracks were found in your library that match this type of playlist, please save more tracks to your liked songs on your Spotify account for personalized results.",buttons:[{label:"OK"}]}),t.setState({loading:!1})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("html",null,l.a.createElement("head",null,l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),l.a.createElement("body",null,l.a.createElement("div",{className:"PLO"},l.a.createElement("div",{className:"PLO-header"},l.a.createElement("img",{src:d.a,className:"PLO-logo",alt:"Logo"}),l.a.createElement("h1",{className:"PLO-title"},"Mixified")),l.a.createElement("div",{className:"PLO-container"},l.a.createElement("div",{className:"PLO-box 1"},l.a.createElement("h2",{className:"box-title"},"Top Artists"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Discover more artists related to artists you already love. This playlist will contain songs that are related to the tracks of your top 50 artists.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("topRelatedArtists")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 2"},l.a.createElement("h2",{className:"box-title"},"Recent Artists"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Find more artists related to your newest saved songs. This playlist will contain artists related to the artists of your most recently saved tracks.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("recentRelatedArtists")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 3"},l.a.createElement("h2",{className:"box-title"},"Top Tracks"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Discover more songs related to your favorite tracks. This playlist will contain songs related to your top 50 most played tracks.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("topRelatedTracks")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 4"},l.a.createElement("h2",{className:"box-title"},"Pop"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the pop genre. This playlist will contain pop songs that are similar to the most recent pop songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("pop")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 5"},l.a.createElement("h2",{className:"box-title"},"Hip Hop"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the hip hop genre. This playlist will contain hip hop songs that are similar to the most recent hip hop songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("hiphop")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 6"},l.a.createElement("h2",{className:"box-title"},"Rap"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the rap genre. This playlist will contain rap songs that are similar to the most recent rap songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("rap")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 7"},l.a.createElement("h2",{className:"box-title"},"R","&","B"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the R","&","B genre. This playlist will contain R","&","B songs that are similar to the most recent R","&","B songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("r&b")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 8"},l.a.createElement("h2",{className:"box-title"},"EDM"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the EDM genre. This playlist will contain EDM songs that are similar to the most recent EDM songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("edm")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 9"},l.a.createElement("h2",{className:"box-title"},"House"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the house genre. This playlist will contain house songs that are similar to the most recent house songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("house")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 10"},l.a.createElement("h2",{className:"box-title"},"Country"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the country genre. This playlist will contain country songs that are similar to the most recent country songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("country")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 11"},l.a.createElement("h2",{className:"box-title"},"Alternative"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the alternative genre. This playlist will contain alternative songs that are similar to the most recent alt. songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("alternative")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading...")),l.a.createElement("div",{className:"PLO-box 12"},l.a.createElement("h2",{className:"box-title"},"Rock"),l.a.createElement("p",{className:"PLO-des"},l.a.createElement("em",null,"Explore the rock genre. This playlist will contain rock songs that are similar to the most recent rock songs saved in your library.")),!this.state.loading&&l.a.createElement("button",{className:"PLO-btn",onClick:function(){return e.handleButtonClick("rock")}},l.a.createElement("b",null,"Generate My Playlist")),this.state.loading&&l.a.createElement("button",{className:"PLO-btn"},"Loading..."))))))}}]),a}(l.a.Component)),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={token:null},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=p.access_token;e&&this.setState({token:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App-main"},!this.state.token&&l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:d.a,className:"App-logo",alt:"Logo"}),l.a.createElement("h1",{className:"App-title"},"Mixified"),l.a.createElement("p",{className:"App-subheading"},l.a.createElement("i",null,"A Smart Spotify Playlist Generator")),l.a.createElement("p",{className:"App-explain"},"Mixified generates personalized playlists based on your Spotify saved tracks, top artists, and top songs. The creation process of these playlists has randomizing features to ensure you never get the same playlist twice."),l.a.createElement("a",{className:"App-loginButton",href:"".concat("https://accounts.spotify.com/authorize?","client_id=").concat("5b6937ee59594376822e556cd3db243b","&redirect_uri=").concat("https://gianna-aprile.github.io/Mixified-React/","&scope=").concat(b.join("%20"),"&response_type=token&show_dialog=true")},"Login To Spotify"),l.a.createElement("p",{className:"App-createdBy"},"Contact: ",l.a.createElement("a",{href:"mailto:giannaaprile@outlook.com"},"Gianna Aprile"))),this.state.token&&l.a.createElement(y,{token:this.state.token}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/mixifiedLogo.86ac2f4a.png"},9:function(e,t,a){e.exports=a(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.d1dff1de.chunk.js.map